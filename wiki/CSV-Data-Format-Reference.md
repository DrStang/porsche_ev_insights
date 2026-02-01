# CSV Data Format Reference

This technical reference documents the CSV file format exported by the My Porsche app and how Porsche EV Insights processes it.

## File Types

### Since Start File

Contains individual trip records. Each row represents one trip from engine start to engine stop.

### Since Charge File

Contains charging cycle records. Each row represents a period from one charge to the next.

## Supported Languages

The My Porsche app exports CSVs in the user's device language. Porsche EV Insights supports:

### English Headers

```csv
arrival time,distance (km),avg. consumption (kwh/100 km),average speed (km/h)
```

### Portuguese Headers

```csv
data de chegada,distancia,consumo,velocidade media
```

The dashboard automatically detects which language is used based on the first row headers.

## Column Definitions

### Arrival Time

The timestamp when the trip ended (when you turned off the car).

**English headers:** `arrival time`, `arrival date`
**Portuguese headers:** `data de chegada`

**Supported formats:**

| Format | Example | Notes |
|--------|---------|-------|
| ISO 8601 | `2025-11-09T13:22:52Z` | International standard |
| Portuguese date | `09/11/2025 13:22` | DD/MM/YYYY HH:MM |

The parser extracts:
- Date for daily/weekly/monthly aggregation
- Hour for time-of-day analysis

### Distance

The distance traveled during the trip in kilometers.

**English headers:** `distance (km)`, `distance`
**Portuguese headers:** `distancia`

**Format:** Numeric value, may use comma or period as decimal separator

**Examples:**
- `15.3` - 15.3 kilometers
- `15,3` - Also 15.3 kilometers (comma decimal)

### Average Consumption

The average energy consumption for the trip in kWh per 100 km.

**English headers:** `avg. consumption (kwh/100 km)`, `consumption`
**Portuguese headers:** `consumo`

**Format:** Numeric value, typically 10-40 range

**Examples:**
- `22.5` - 22.5 kWh/100km
- `22,5` - Also 22.5 kWh/100km

### Average Speed

The average speed during the trip in km/h.

**English headers:** `average speed (km/h)`, `average speed`
**Portuguese headers:** `velocidade media`

**Format:** Numeric value, typically 10-130 range

## Delimiters

The parser auto-detects the delimiter:

| Delimiter | Character | Common In |
|-----------|-----------|-----------|
| Comma | `,` | International exports |
| Semicolon | `;` | European exports (where comma is decimal separator) |

## Sample Data

### English Format (Comma Delimited)

```csv
arrival time,distance (km),avg. consumption (kwh/100 km),average speed (km/h)
2025-11-09T08:30:00Z,12.5,21.3,45
2025-11-09T17:45:00Z,15.2,19.8,52
2025-11-10T09:15:00Z,8.3,28.5,32
```

### Portuguese Format (Semicolon Delimited)

```csv
data de chegada;distancia;consumo;velocidade media
09/11/2025 08:30;12,5;21,3;45
09/11/2025 17:45;15,2;19,8;52
10/11/2025 09:15;8,3;28,5;32
```

## Parsing Process

### Step 1: Delimiter Detection

The parser checks the header row for semicolons. If found, semicolon is used; otherwise, comma.

### Step 2: Header Normalization

Headers are converted to lowercase and trimmed of whitespace.

### Step 3: Row Processing

For each data row:
1. Split by detected delimiter
2. Map values to column names
3. Parse date string to extract components
4. Convert numeric strings to numbers (handling comma/period decimals)
5. Calculate derived values (energy consumed, trip type, etc.)

### Step 4: Validation

Trips are filtered to include only valid records:
- Distance must be greater than 0
- Date must be parseable

### Step 5: Aggregation

Valid trips are aggregated into:
- Hourly distribution
- Daily distribution
- Weekly totals
- Monthly totals
- Trip type categories
- Speed range buckets
- Seasonal groupings

## Calculated Fields

The dashboard calculates additional fields from the raw data:

### Energy Per Trip

```
energy = (distance * consumption) / 100
```

### Trip Type

| Type | Condition |
|------|-----------|
| Micro | distance < 5 km |
| Short | 5 km <= distance < 10 km |
| Medium | 10 km <= distance < 20 km |
| Long | 20 km <= distance < 50 km |
| Very Long | distance >= 50 km |

### Season

| Season | Months |
|--------|--------|
| Spring | March, April, May |
| Summer | June, July, August |
| Autumn | September, October, November |
| Winter | December, January, February |

### Week Number

Calculated as ISO week number (Monday-start weeks).

## Filename Parsing

The dashboard extracts vehicle model from the filename:

**Pattern:** `[Model Name]-[Export Type]-[Date]_[Time].csv`

**Examples:**
- `Taycan 4 Cross Turismo-Since start-2026-01-30_08-45.csv`
- `Macan Electric-Desde o arranque-2026-01-29_14-54.csv`

The model name is everything before the first dash that's followed by more content.

## Data Merging

When merging new data with existing data:

### Fingerprinting

Each trip is fingerprinted using:
```
fingerprint = `${date}|${distance.toFixed(1)}|${consumption.toFixed(1)}`
```

### Duplicate Detection

Trips with matching fingerprints are considered duplicates and skipped during merge.

### Merge Process

1. Extract fingerprints from existing trips
2. Parse new CSV data
3. For each new trip, check if fingerprint exists
4. Add only non-duplicate trips
5. Re-aggregate all data

## Raw Data Storage

For merge functionality, the dashboard stores:

```javascript
taycan_raw_data: {
  start: [...],   // Raw Since Start rows
  charge: [...]   // Raw Since Charge rows
}
```

This enables future merges even after the original CSV files are no longer available.

## Troubleshooting

### "No trips found"

Check that your CSV file:
- Has the expected column headers
- Contains at least one data row (beyond the header)
- Uses supported date formats

### "Date parsing failed"

Verify date format matches one of:
- `YYYY-MM-DDTHH:MM:SSZ` (ISO)
- `DD/MM/YYYY HH:MM` (Portuguese)

### "Distance shows as 0"

Check that:
- The distance column uses the correct header name
- Values use period or comma as decimal (not other separators)
- The file hasn't been corrupted during transfer

### "Consumption values seem wrong"

Verify:
- The consumption column is in kWh/100km (not kWh/km or km/kWh)
- Decimal separators are correct
- No extra characters in the numeric fields

### "Merge doesn't detect duplicates"

Fingerprinting relies on:
- Exact date strings
- Distance rounded to 1 decimal
- Consumption rounded to 1 decimal

Minor variations may cause false non-matches.

## Creating Test Data

For testing, you can create a CSV manually:

```csv
arrival time,distance (km),avg. consumption (kwh/100 km),average speed (km/h)
2025-01-15T08:30:00Z,15.0,22.0,45
2025-01-15T18:00:00Z,15.0,21.5,48
2025-01-16T08:45:00Z,12.3,23.2,42
2025-01-16T17:30:00Z,18.7,20.1,55
2025-01-17T09:00:00Z,5.2,28.5,30
```

Save as UTF-8 encoded CSV file with `.csv` extension.

## Related Information

- For exporting from the app, see [Exporting Data from My Porsche](Exporting-Data-from-My-Porsche)
- For uploading files, see [Uploading and Managing Data](Uploading-and-Managing-Data)
- For terminology, see [Glossary](Glossary)
