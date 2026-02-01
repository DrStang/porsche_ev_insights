# Environmental Tab

The Environmental tab calculates your carbon footprint and compares it to what a petrol vehicle would have emitted, helping you understand your positive environmental impact.

## Purpose

This tab answers questions like:
- How much CO2 have I produced?
- How much CO2 have I avoided?
- What's the equivalent in everyday terms?
- How do my emissions compare month over month?

## Hero Metric

At the top of this tab, you'll see a prominent display of:

**Total CO2 Saved**

The total kilograms of CO2 you've avoided by driving electric instead of a petrol car. This is accompanied by a tree equivalent, helping put the number in perspective.

For example: "You've saved 450 kg of CO2 - equivalent to 21 trees absorbing CO2 for a year"

## Stat Cards

### CO2 Produced (Your Vehicle)

The actual CO2 emissions associated with your driving. This accounts for the electricity you consumed and the carbon intensity of the electrical grid.

**Calculation:**
```
Total Energy (kWh) x Grid CO2 Intensity (g/kWh)
```

Also shows your emissions per kilometer.

### CO2 Petrol Would Produce

What the same trips would have emitted in a petrol car.

**Calculation:**
```
Petrol Consumed (L) x CO2 per Liter (g/L)
```

Where petrol consumed is based on your configured petrol consumption rate.

### Reduction Percentage

How much lower your emissions are compared to petrol:

```
(CO2 Saved / Petrol CO2) x 100
```

Typical reductions range from 50-80% depending on your grid's carbon intensity.

### Liters of Petrol Avoided

The volume of petrol not burned thanks to driving electric:

```
Total Distance (km) / 100 x Petrol Consumption (L/100km)
```

This helps visualize the physical fuel you're not using.

## Charts

### Monthly Emissions Comparison

A grouped bar chart showing side-by-side emissions for each month:

- **Green/blue bars** - Your actual EV emissions
- **Gray/red bars** - What petrol would have emitted

The visual gap between bars represents your monthly CO2 savings.

**What to look for:**
- Consistent reduction gap = steady environmental benefit
- Seasonal variations (winter driving may have higher consumption)
- Months with heavy driving show larger savings

### Cumulative CO2 Saved

An area chart showing your total CO2 savings accumulating over time. This growing curve represents your lifetime environmental contribution.

**What to look for:**
- Steady upward trend
- The total at the right side = your total environmental benefit
- Steeper sections indicate periods of more driving (more savings)

## Understanding the Numbers

### Grid CO2 Intensity

The dashboard uses a default value of **164 g CO2/kWh**, which represents Portugal's electricity grid (a relatively clean mix with significant renewable energy).

Your actual emissions depend on your local grid:

| Country/Region | Typical CO2 Intensity | EV Advantage |
|----------------|----------------------|--------------|
| Norway | ~20 g/kWh | Excellent (nearly zero emissions) |
| France | ~60 g/kWh | Excellent (nuclear + hydro) |
| UK | ~200 g/kWh | Very good |
| Germany | ~350 g/kWh | Good |
| Poland | ~700 g/kWh | Moderate |
| Coal-heavy grids | ~900 g/kWh | Still usually better than petrol |

Even on the dirtiest grids, EVs typically produce fewer lifetime emissions than petrol cars due to the efficiency of electric motors.

### Petrol Emissions

The dashboard uses **2,310 g CO2 per liter** of petrol burned. This is a standard figure that includes:
- Direct combustion emissions
- Does NOT include extraction/refining (which would add more)

### Tree Equivalent

The calculation assumes a tree absorbs approximately **21 kg of CO2 per year**. This is an average for mature trees.

It's a simplified metric meant to make large numbers relatable, not a precise scientific measurement.

## Why EVs Are Better for the Environment

### The Efficiency Factor

Electric motors are roughly 85-90% efficient at converting energy to motion. Petrol engines are only about 25-30% efficient. This fundamental difference means EVs use less primary energy even when that energy comes from fossil fuels.

### The Grid Gets Cleaner

As more renewable energy is added to electrical grids, EVs automatically become cleaner without any changes to the vehicle. A petrol car's emissions are fixed by the fuel it burns.

### No Tailpipe Emissions

EVs produce zero emissions at the point of use. This is particularly important for urban air quality, where vehicle exhaust contributes to health problems.

### Lifetime Analysis

When considering manufacturing, usage, and disposal:
- EVs have higher manufacturing emissions (battery production)
- EVs have much lower usage emissions
- Over a typical vehicle lifetime, EVs produce 50-70% fewer total emissions

## Improving Your Environmental Impact

Even with an EV, you can further reduce your carbon footprint:

1. **Charge with renewables** - Home solar or green electricity tariffs
2. **Drive efficiently** - Lower consumption = fewer grid emissions
3. **Charge during high-renewable periods** - Daytime in solar-heavy grids
4. **Combine trips** - Fewer miles = fewer emissions
5. **Choose the right vehicle size** - Smaller batteries have lower manufacturing impact

## Limitations of This Analysis

This tab provides estimates based on:
- Average grid intensity (your local grid may differ)
- Standard petrol emissions factors
- Simplified tree absorption rates

For precise carbon accounting, you would need:
- Your specific utility's carbon intensity data
- Time-of-day charging patterns
- Local environmental factors

The dashboard's calculations are directionally accurate and useful for understanding your impact, even if not precise to the gram.

## Related Information

- For efficiency details affecting emissions, see [Efficiency Tab](Efficiency-Tab)
- For cost savings, see [Costs Tab](Costs-Tab)
- For environmental terms, see [Glossary](Glossary)
