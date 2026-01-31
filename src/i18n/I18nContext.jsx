import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { en, pt, de, fr, es, it, nl, pl, zh, ja } from './translations';
import { safeStorage } from '../utils/storage';

// All available translations
const translations = { en, pt, de, fr, es, it, nl, pl, zh, ja };

// Storage key for language preference
const LANGUAGE_STORAGE_KEY = 'taycan_language';

// Default language
const DEFAULT_LANGUAGE = 'en';

// Supported languages with metadata for the settings dropdown
export const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski' },
  { code: 'zh', name: 'Chinese', nativeName: '简体中文' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語' }
];

/**
 * Detects the user's preferred language from browser settings
 * @returns {string} The detected language code or default
 */
function detectUserLanguage() {
  try {
    // Get browser languages (e.g., ['en-US', 'en', 'pt'])
    const browserLanguages = navigator.languages || [navigator.language || navigator.userLanguage];

    for (const lang of browserLanguages) {
      // Extract base language code (e.g., 'en-US' -> 'en')
      const baseCode = lang.split('-')[0].toLowerCase();

      // Check if we support this language
      if (translations[baseCode]) {
        return baseCode;
      }
    }
  } catch (e) {
    console.warn('Could not detect user language:', e);
  }

  return DEFAULT_LANGUAGE;
}

/**
 * Gets a nested value from an object using dot notation
 * @param {object} obj - The object to search
 * @param {string} path - The dot-notation path (e.g., 'common.settings')
 * @returns {any} The value at the path or undefined
 */
function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

/**
 * Interpolates variables in a translation string
 * @param {string} str - The string with placeholders like {name}
 * @param {object} vars - The variables to interpolate
 * @returns {string} The interpolated string
 */
function interpolate(str, vars) {
  if (!vars || typeof str !== 'string') return str;
  return str.replace(/\{(\w+)\}/g, (match, key) => {
    return vars[key] !== undefined ? vars[key] : match;
  });
}

// Create the context
const I18nContext = createContext(null);

/**
 * I18n Provider component
 * Wraps the app and provides translation functionality
 */
export function I18nProvider({ children }) {
  // Initialize language from storage or detect from browser
  const [language, setLanguageState] = useState(() => {
    const saved = safeStorage.get(LANGUAGE_STORAGE_KEY);
    if (saved && translations[saved]) {
      return saved;
    }
    return detectUserLanguage();
  });

  // Get current translation object
  const currentTranslations = useMemo(() => {
    return translations[language] || translations[DEFAULT_LANGUAGE];
  }, [language]);

  // Translation function with fallback to English
  const t = useCallback((key, vars = null) => {
    // Try to get the translation in current language
    let value = getNestedValue(currentTranslations, key);

    // Fallback to English if not found
    if (value === undefined && language !== DEFAULT_LANGUAGE) {
      value = getNestedValue(translations[DEFAULT_LANGUAGE], key);
    }

    // If still not found, return the key itself
    if (value === undefined) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }

    // Interpolate variables if provided
    return interpolate(value, vars);
  }, [currentTranslations, language]);

  // Function to change language
  const setLanguage = useCallback((newLanguage) => {
    if (translations[newLanguage]) {
      setLanguageState(newLanguage);
      safeStorage.set(LANGUAGE_STORAGE_KEY, newLanguage);
    } else {
      console.warn(`Language not supported: ${newLanguage}`);
    }
  }, []);

  // Persist language changes
  useEffect(() => {
    safeStorage.set(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  // Context value
  const contextValue = useMemo(() => ({
    language,
    setLanguage,
    t,
    translations: currentTranslations,
    supportedLanguages: SUPPORTED_LANGUAGES
  }), [language, setLanguage, t, currentTranslations]);

  return (
    <I18nContext.Provider value={contextValue}>
      {children}
    </I18nContext.Provider>
  );
}

/**
 * Hook to access i18n functionality
 * @returns {{ language: string, setLanguage: function, t: function, translations: object, supportedLanguages: array }}
 */
export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return context;
}

/**
 * Hook to get just the translation function (for performance)
 * @returns {function} The translation function
 */
export function useT() {
  const { t } = useTranslation();
  return t;
}

// Export the storage key for backup/restore functionality
export { LANGUAGE_STORAGE_KEY };
