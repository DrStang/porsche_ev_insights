# Overview Tab

The Overview tab is your dashboard homepage, providing a quick summary of your driving statistics and trip distribution.

## Purpose

This tab answers the question: "What does my overall EV usage look like?"

It gives you a high-level view without diving into the details available in other tabs.

## Stat Cards

The top section displays eight key metrics in card format:

### Total Trips

The count of all recorded trips in your data. A trip is defined as a journey from when you started the car to when you turned it off.

### Total Distance

The cumulative distance traveled across all trips. Displayed in your chosen unit (km or miles).

### Total Energy

The total electricity consumed across all trips, measured in kWh. This is calculated from each trip's distance and consumption rate.

### Average Consumption

Your fleet-wide efficiency average, shown in your chosen format (kWh/100km, km/kWh, etc.). Lower is better for consumption-per-distance formats; higher is better for distance-per-energy formats.

### Total Charge Cycles

The number of charging events recorded. This requires the "Since Charge" file to be accurate. Without it, this shows as 0.

### Trips Per Charge

How many trips you typically take between charges. Calculated as total trips divided by charge cycles. Higher numbers generally mean you're maximizing each charge.

### Short Trips %

The percentage of your trips that are under 10 km. High percentages (above 40%) may indicate opportunities to combine trips for better efficiency.

### Monthly Average

Your average distance traveled per month, useful for understanding typical monthly usage patterns.

## Charts

### Distance & Trips Over Time

A combined chart showing two data series:

- **Bars** - Total distance per period (colored in blue/sky)
- **Line** - Number of trips per period (with markers)

Use the time view selector to switch between:
- **Day** - Each bar/point is one day
- **Week** - Each bar/point is one week (labeled W01, W02, etc.)
- **Month** - Each bar/point is one calendar month

The dual-axis design lets you see both metrics together. The left axis shows distance; the right axis shows trip count.

**What to look for:**
- Consistent patterns vs. sporadic usage
- Correlation between trips and distance (many short trips vs. fewer long trips)
- Trends over time (increasing or decreasing usage)

### Trip Type Distribution

A pie chart breaking down your trips by distance category:

| Category | Distance Range | Color |
|----------|----------------|-------|
| Micro | Less than 5 km | Red |
| Short | 5-10 km | Orange |
| Medium | 10-20 km | Yellow |
| Long | 20-50 km | Green |
| Very Long | Over 50 km | Blue |

Hover over any slice to see the exact count and percentage.

**What this tells you:**
- Your typical trip profile (mostly short hops vs. longer journeys)
- Potential efficiency opportunities (micro trips are least efficient)
- How you use your EV compared to traditional car usage patterns

## Interpretation Tips

### Healthy Usage Patterns

- Good variety of trip types
- Reasonable trips-per-charge (5+ is good)
- Consistent monthly distance

### Potential Improvements

**High percentage of micro/short trips**

Very short trips don't allow the battery and motor to reach optimal operating temperature, leading to higher consumption. Consider combining errands into single trips.

**Low trips per charge**

If you're charging frequently but only taking a few trips between charges, you might be overcharging. Most EV experts recommend charging to 80% for daily use rather than 100%.

**Erratic monthly patterns**

Large variations month-to-month are normal for occasional drivers but may indicate missed recording or app sync issues if unexpected.

## Time View Details

The time selector in this tab affects the Distance & Trips Over Time chart:

**Day view** works best when you have:
- A few weeks to a few months of data
- Regular daily driving
- Want to see weekday vs. weekend patterns

**Week view** works best when you have:
- Several months of data
- Want to see weekly trends
- Data that varies day-to-day

**Month view** works best when you have:
- Multiple months of data
- Want to see seasonal or long-term trends
- Don't need daily granularity

## Related Tabs

- For deeper time-based analysis, see [Patterns Tab](Patterns-Tab)
- For efficiency by trip type, see [Efficiency Tab](Efficiency-Tab)
- For cost impact of your usage, see [Costs Tab](Costs-Tab)
