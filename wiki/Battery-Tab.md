# Battery Tab

The Battery tab provides analysis of your real-world range, charging patterns, and how your actual performance compares to official specifications.

## Purpose

This tab answers questions like:
- What's my real-world range?
- How does my range compare to WLTP ratings?
- How am I using my battery capacity?
- What are my charging patterns?
- How does my car compare to competitors?

## Real-World Range Analysis

### Calculated Range

Your actual expected range based on real driving data:

```
(Battery Capacity (kWh) / Average Consumption (kWh/100km)) x 100
```

This is your personalized range figure based on how you actually drive, not laboratory conditions.

### WLTP Range

The official rated range from the manufacturer (if you've selected your vehicle model). This provides the benchmark for comparison.

### Range Efficiency

The percentage of WLTP range you're achieving:

```
(Calculated Range / WLTP Range) x 100
```

Typical real-world efficiency is 70-85% of WLTP ratings. Values above 80% indicate efficient driving; below 70% suggests conditions or driving style are significantly impacting range.

### Energy Per Trip

Average energy consumed per trip:

```
Total Energy / Total Trips
```

### Trips Per Full Charge

How many of your typical trips you could take on a full battery:

```
Battery Capacity / Energy Per Trip
```

### Distance Per Charge Cycle

Average distance covered between charges (requires Since Charge data):

```
Total Distance / Total Charge Cycles
```

### Battery % Per Trip

How much of your battery a typical trip uses:

```
(Energy Per Trip / Battery Capacity) x 100
```

## Seasonal Performance

### Best Month Consumption

Your most efficient month and its consumption rate. Usually occurs in moderate temperatures (spring/autumn).

### Worst Month Consumption

Your least efficient month and its consumption rate. Usually occurs in extreme temperatures (winter or very hot summer).

### Seasonal Variation

The percentage difference between best and worst months:

```
((Worst - Best) / Best) x 100
```

Variations of 20-40% between summer and winter are normal for EVs.

### Full Charging Cycles

Total number of complete battery cycles (if you'd used 100% each time):

```
Total Energy / Battery Capacity
```

This helps understand total battery throughput over your driving history.

## Charging Optimization

This section helps you understand and improve your charging habits:

### Charges Per Week

How often you charge on average:

```
(Charge Cycles x 7) / Days of Data
```

### Average Energy Per Charge

How much energy you typically add per charging session:

```
Total Energy / Charge Cycles
```

### SoC Used Per Cycle

State of Charge percentage used per charging cycle:

```
(Energy Per Charge / Battery Capacity) x 100
```

Lower percentages indicate you're charging more frequently before the battery gets low (good for battery longevity).

### Charging Losses

Estimated energy lost during charging. AC charging typically loses 10-15% to heat:

```
Total Energy / 0.9 - Total Energy
```

This is energy that comes from the grid but doesn't reach your battery.

### Off-Peak Savings Potential

Estimated additional savings if you charged during off-peak hours (assuming 30% lower electricity rates):

```
Electric Cost x 0.30
```

This is a rough estimate; actual savings depend on your utility's time-of-use rates.

## Benchmark Comparison

Compare your vehicle's real-world performance against competitors:

### Vehicles Compared

- Tesla Model S
- Mercedes EQS
- BMW i7

### Consumption Comparison

Shows how your average consumption compares to the WLTP ratings of competitor vehicles.

### Range Comparison

Shows your calculated real-world range versus the WLTP ranges of competitors.

This helps put your vehicle's performance in context with the broader EV market.

## Understanding Range

### Why Real Range Differs from WLTP

WLTP testing uses standardized conditions:
- Laboratory controlled temperature (23°C)
- No climate control usage
- Specific driving cycles
- Fully charged battery
- New vehicle

Real-world driving differs:
- Variable temperatures
- Heating/cooling usage
- Different driving patterns
- Partial charges
- Battery aging

### Factors Affecting Range

**Major impacts (can change range by 20-40%):**
- Temperature (cold weather is worst)
- Climate control usage
- Speed (highway driving uses more)
- Driving style (aggressive vs. smooth)

**Moderate impacts (5-15%):**
- Elevation changes
- Wind conditions
- Tire pressure
- Cargo weight

**Minor impacts (1-5%):**
- Tire type
- Wheel size
- External accessories

### Range Anxiety Tips

1. **Know your real range** - This tab gives you accurate expectations
2. **Use 80% as planning range** - Leave buffer for unexpected situations
3. **Plan charging stops** - On long trips, plan where to charge
4. **Precondition the battery** - Warm battery = better range
5. **Monitor consumption** - If consumption spikes, adjust driving or plan a stop

## Battery Health Notes

This dashboard does not measure battery health directly (that would require diagnostic data not available in trip exports). However, you can infer battery condition by:

- Comparing your range over time (significant decline might indicate degradation)
- Noting if winter range impact is getting worse
- Tracking if your consumption is increasing for similar trips

Porsche batteries are designed for minimal degradation. Most owners see less than 10% capacity loss over the first 100,000 km.

## Configuration

For accurate battery analysis, ensure you've configured:

1. **Vehicle Model** - Provides correct WLTP specs for comparison
2. **Battery Capacity** - Should match your vehicle (auto-fills when you select a model)

You can adjust battery capacity in Settings if your vehicle differs from the standard configuration or if you want to account for some degradation.

## Related Information

- For efficiency details, see [Efficiency Tab](Efficiency-Tab)
- For cost of charging, see [Costs Tab](Costs-Tab)
- For charging recommendations, see [Insights Tab](Insights-Tab)
- For battery and range terms, see [Glossary](Glossary)
