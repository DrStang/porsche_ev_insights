# Costs Tab

The Costs tab provides financial analysis comparing your EV operating costs to what you would have spent driving an equivalent petrol vehicle.

## Purpose

This tab answers questions like:
- How much have I spent on electricity?
- How much would the same trips have cost with petrol?
- How much money am I saving?
- What's my cost per kilometer?

## Stat Cards

Four cards summarize your financial picture:

### Electric Cost

Your total electricity cost for all trips. Calculated as:

```
Total Energy (kWh) x Electricity Price (per kWh)
```

Also shows the cost per distance unit (e.g., cost per km or per mile).

### Petrol Equivalent

What the same distance would have cost in a petrol car. Calculated using:

```
(Total Distance / 100) x Petrol Consumption (L/100km) x Petrol Price (per L)
```

Or the equivalent calculation for MPG and gallons in imperial systems.

### Total Savings

The difference between petrol cost and electric cost:

```
Petrol Equivalent - Electric Cost = Savings
```

This represents actual money kept in your pocket by driving electric.

### Savings Rate

Your percentage savings compared to petrol:

```
(Savings / Petrol Equivalent) x 100 = Savings Rate %
```

Typical savings rates range from 50-75% depending on local electricity and fuel prices.

## Charts

### Monthly Cost Comparison

A grouped bar chart showing side-by-side comparison for each month:

- **Blue bars** - Your actual electric cost
- **Gray/red bars** - What petrol would have cost

This visualization makes it easy to see your savings month by month and identify any unusual periods.

**What to look for:**
- Consistent gap between bars = steady savings
- Narrowing gap = petrol prices dropping or electricity increasing
- Widening gap = increasing savings

### Cumulative Savings Over Time

An area chart showing your total accumulated savings growing over time. The X-axis shows time progression, and the Y-axis shows cumulative savings in your currency.

**What to look for:**
- Steady upward trend = consistent savings
- Steeper slope = periods of more driving or better efficiency
- The total at the rightmost point = your lifetime savings so far

## Configuration

The accuracy of cost calculations depends on your settings. Configure these in the Settings tab:

### Electricity Price

Enter your cost per kWh. This might be:
- Your home electricity rate
- A time-of-use average
- Your charging network cost

If you charge at different rates (home vs. public), use a weighted average.

**Default:** 0.25 (varies by region)

### Petrol Price

Enter the current fuel price in your area per liter (metric) or per gallon (US imperial).

**Default:** 1.70 per liter

### Petrol Consumption

Enter what a comparable petrol car would consume. This is used for the "what if" comparison.

Options vary by unit system:
- **L/100km** - Liters per 100 kilometers (metric, lower is better)
- **km/L** - Kilometers per liter (metric, higher is better)
- **MPG** - Miles per gallon (imperial, higher is better)

For meaningful comparisons, use a vehicle comparable to your Porsche:
- A luxury sport sedan might use 10-12 L/100km
- A performance SUV might use 12-15 L/100km

**Default:** 8.0 L/100km

### Currency

Select your local currency for proper formatting. Available currencies include:
- EUR, USD, GBP, CHF
- CAD, AUD, NZD
- JPY, CNY, KRW
- And many more

## Understanding the Numbers

### Real-World Cost Factors

The calculated costs are estimates. Actual costs may vary due to:

**Electricity costs you might not track:**
- Public charging premiums (often 2-4x home rates)
- Charging network subscription fees
- Time-of-use rate variations
- Charging losses (typically 10-15%)

**Petrol costs to consider:**
- The comparison uses steady prices, but petrol fluctuates
- Petrol cars also have oil changes, more brake wear, etc.

### Typical Savings

Here are some realistic examples:

| Country | Electric (per km) | Petrol (per km) | Savings |
|---------|-------------------|-----------------|---------|
| Germany | ~0.06 EUR | ~0.15 EUR | ~60% |
| UK | ~0.05 GBP | ~0.14 GBP | ~65% |
| US | ~0.04 USD | ~0.12 USD | ~67% |
| Norway | ~0.02 EUR | ~0.18 EUR | ~89% |

Actual savings depend heavily on local electricity and fuel prices.

### Total Cost of Ownership

This tab focuses on fuel/energy costs only. A complete cost comparison would include:
- Purchase price difference
- Insurance (may be higher or lower for EVs)
- Maintenance (typically lower for EVs)
- Tire wear (may be higher for EVs due to weight/torque)
- Depreciation

## Tips for Maximizing Savings

1. **Charge at home when possible** - Public fast charging is usually more expensive
2. **Use time-of-use rates** - Charge overnight when electricity is cheapest
3. **Consider solar** - Home solar can make charging nearly free
4. **Drive efficiently** - Lower consumption = lower cost per km
5. **Track your actual costs** - Update settings periodically with real prices

## Example Calculation

Let's walk through a sample calculation:

**Your data:**
- Total distance: 5,000 km
- Total energy: 1,100 kWh
- Electricity price: 0.25 EUR/kWh
- Petrol price: 1.70 EUR/L
- Petrol consumption: 10 L/100km

**Electric cost:**
```
1,100 kWh x 0.25 EUR = 275 EUR
Per km: 275 / 5,000 = 0.055 EUR/km
```

**Petrol equivalent:**
```
(5,000 / 100) x 10 L = 500 L
500 L x 1.70 EUR = 850 EUR
Per km: 850 / 5,000 = 0.17 EUR/km
```

**Savings:**
```
850 - 275 = 575 EUR saved
575 / 850 = 67.6% savings rate
```

## Related Information

- For efficiency details, see [Efficiency Tab](Efficiency-Tab)
- For environmental impact, see [Environmental Tab](Environmental-Tab)
- For configuration details, see [Settings and Configuration](Settings-and-Configuration)
