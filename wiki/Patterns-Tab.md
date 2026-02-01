# Patterns Tab

The Patterns tab reveals when and how you drive, helping you understand your driving habits through time-based analysis.

## Purpose

This tab answers questions like:
- What times of day do I typically drive?
- Which days of the week see the most travel?
- How do my weekday patterns differ from weekends?
- What does my distance trend look like over time?

## Charts

### Distance Over Time

An area chart showing your total distance traveled per period. The filled area helps visualize the volume of driving over time.

Use the time view selector to switch between:
- **Day** - Daily totals
- **Week** - Weekly totals
- **Month** - Monthly totals

**What to look for:**
- Overall trends (increasing, decreasing, stable)
- Seasonal patterns
- Unusual spikes or dips

### Trips Per Hour

A bar chart showing the distribution of trips by hour of arrival. The X-axis spans from 7:00 to 23:00 (7 AM to 11 PM).

Each bar represents how many trips ended at that hour.

**What to look for:**
- Peak driving times (usually morning and evening commute)
- Unusual patterns that might indicate specific routines
- Spread vs. concentrated driving times

**Common patterns:**
- **Commuter pattern** - Peaks around 8-9 AM and 5-7 PM
- **Errand runner** - Spread throughout daytime hours
- **Evening driver** - Higher activity in late afternoon/evening

### Trips & Distance by Day

A dual-series chart showing for each day of the week:
- **Bars** - Total trips taken
- Values for distance patterns

Days are ordered Monday through Sunday.

**What to look for:**
- Weekday vs. weekend differences
- Your heaviest travel days
- Consistent patterns vs. irregular usage

### Average Distance Per Day

A bar chart showing the average trip distance for each day of the week.

Special color coding:
- **Blue** - Weekdays (Monday-Friday)
- **Orange** - Weekends (Saturday-Sunday)

This helps you quickly spot if weekend trips tend to be longer (typical for leisure) or shorter (quick errands).

**What to look for:**
- Weekend trips are often longer for leisure activities
- Weekday trips may be more consistent (commuting)
- Very short average distances may indicate efficiency opportunities

## Interpretation Guide

### The Commuter Profile

If you see:
- Strong peaks at morning and evening rush hours
- Consistent weekday patterns
- Weekends with different patterns or less activity

You likely use your EV primarily for commuting. Consider:
- Preconditioning the car while still plugged in during winter
- Charging overnight with off-peak electricity rates
- Combining errands with your commute to reduce total trips

### The Weekend Warrior

If you see:
- Lower weekday activity
- Significant weekend distance/trips
- Longer average trip distances on weekends

You use your EV more for leisure than commuting. Consider:
- Charging to a higher percentage before weekend trips
- Planning routes to maximize range on longer journeys
- Taking advantage of destination charging on longer trips

### The Mixed-Use Driver

If you see:
- Moderate activity throughout the week
- Similar patterns weekdays and weekends
- Varied trip distances

You have diverse driving needs. Consider:
- Keeping the battery in the 20-80% range for daily flexibility
- Using trip planning for longer occasional journeys
- Setting charging schedules that match your variable usage

### The Urban Hopper

If you see:
- Many trips throughout the day
- Short average distances
- Activity spread across daytime hours

You take frequent short trips, perhaps for deliveries, errands, or urban work. Consider:
- Combining multiple short trips into fewer longer ones
- Preconditioning before the first trip of the day
- Using route planning to optimize errand sequences

## Time View Explained

The time view selector affects the Distance Over Time chart:

**Day view**
- Shows each individual day as a data point
- Best for recent data (last 30-60 days)
- Reveals day-to-day variations
- Good for identifying specific dates with unusual activity

**Week view**
- Aggregates data by calendar week
- Best for medium-term analysis (2-6 months)
- Smooths out daily variations
- Shows weekly trends more clearly
- Weeks labeled as W01, W02, etc.

**Month view**
- Aggregates data by calendar month
- Best for long-term analysis (6+ months)
- Shows seasonal patterns
- Useful for year-over-year comparisons if you have that much data

## Tips for Using This Tab

1. **Start with Month view** to see the big picture
2. **Drill down to Week view** to understand patterns within seasons
3. **Use Day view** only when investigating specific periods

4. **Compare with other tabs:**
   - High hour-of-day variation? Check [Efficiency Tab](Efficiency-Tab) for time-based efficiency
   - Weekend heavy usage? See [Costs Tab](Costs-Tab) for financial impact
   - Many short trips? Check [Insights Tab](Insights-Tab) for recommendations

## Data Requirements

- **Trips Per Hour** - Needs accurate arrival times in your data
- **Day of Week charts** - Needs correct date parsing
- **Time trends** - More useful with more data spanning longer periods

If charts appear empty or show unexpected results, verify your CSV data contains proper date and time information.
