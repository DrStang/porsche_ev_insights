import { precise } from './precise';
import { KM_TO_MI, MI_TO_KM, L_TO_UK_GAL, L_TO_US_GAL, UK_GAL_TO_L, US_GAL_TO_L } from '../constants/units';

// Unit conversion helpers
export const unitConvert = {
  // Distance conversions
  kmToMi: (km) => precise.mul(km, KM_TO_MI),
  miToKm: (mi) => precise.mul(mi, MI_TO_KM),

  // Speed conversions (same as distance for km/h <-> mph)
  kmhToMph: (kmh) => precise.mul(kmh, KM_TO_MI),
  mphToKmh: (mph) => precise.mul(mph, MI_TO_KM),

  // Volume conversions
  lToUkGal: (l) => precise.mul(l, L_TO_UK_GAL),
  lToUsGal: (l) => precise.mul(l, L_TO_US_GAL),
  ukGalToL: (gal) => precise.mul(gal, UK_GAL_TO_L),
  usGalToL: (gal) => precise.mul(gal, US_GAL_TO_L),

  // Fuel consumption conversions (from L/100km)
  l100kmToKmL: (l100km) => l100km > 0 ? precise.div(100, l100km) : 0,
  l100kmToMpgUk: (l100km) => l100km > 0 ? precise.div(UK_GAL_TO_L * 100, l100km * MI_TO_KM) : 0,
  l100kmToMpgUs: (l100km) => l100km > 0 ? precise.div(US_GAL_TO_L * 100, l100km * MI_TO_KM) : 0,

  // Fuel consumption conversions (to L/100km)
  mpgUkToL100km: (mpg) => mpg > 0 ? precise.div(UK_GAL_TO_L * 100, mpg * MI_TO_KM) : 0,
  mpgUsToL100km: (mpg) => mpg > 0 ? precise.div(US_GAL_TO_L * 100, mpg * MI_TO_KM) : 0,
  kmLToL100km: (kmL) => kmL > 0 ? precise.div(100, kmL) : 0,

  // Electric consumption conversions (from kWh/100km)
  // Metric formats
  kwh100kmToKmKwh: (kwh100km) => kwh100km > 0 ? precise.div(100, kwh100km) : 0,
  // Imperial formats
  kwh100kmToMiKwh: (kwh100km) => kwh100km > 0 ? precise.div(100, precise.mul(kwh100km, MI_TO_KM)) : 0,
  kwh100kmToKwhMi: (kwh100km) => kwh100km > 0 ? precise.mul(kwh100km, MI_TO_KM / 100) : 0,
  kwh100kmToKwh100mi: (kwh100km) => kwh100km > 0 ? precise.mul(kwh100km, MI_TO_KM) : 0,
  // MPGe conversion (Miles Per Gallon equivalent)
  // 33.7 kWh = energy in 1 gallon of gasoline
  // MPGe = 3370 / (kWh per 100 miles)
  kwh100kmToMpge: (kwh100km) => {
    if (kwh100km <= 0) return 0;
    const kwh100mi = precise.mul(kwh100km, MI_TO_KM);
    return precise.div(3370, kwh100mi);
  },
  // Reverse: MPGe to kWh/100km (for comparison calculations)
  mpgeToKwh100km: (mpge) => {
    if (mpge <= 0) return 0;
    const kwh100mi = precise.div(3370, mpge);
    return precise.div(kwh100mi, MI_TO_KM);
  }
};
