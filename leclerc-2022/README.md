# Leclerc 2022 Counterfactual Championship Lab

Public interactive fan-made analysis of Charles Leclerc's 2022 Formula 1 title campaign.

## Live site

https://gjimzhou.github.io/ferrari-sp3-atlas/leclerc-2022/

## What it does

- covers all 22 rounds of the 2022 F1 season
- ranks plausible counterfactual improvements from most natural to most speculative
- lets visitors toggle any race outcome and recompute Leclerc vs Verstappen points
- includes conservative/aggressive scenarios for Baku and France
- automatically adds events in plausibility order until Leclerc crosses the championship threshold
- explicitly separates reliability, strategy, driver-error, racecraft, and team-order counterfactuals

## Method note

The plausibility index is an editorial heuristic, **not an empirical probability**. The default model does not invent Verstappen mechanical failures or crashes; it primarily changes Ferrari/Leclerc-controlled events and uses conservative finishing positions where the race outcome remained uncertain.

Base standings and race results are sourced from Formula 1's official 2022 results pages.

This is an independent fan project and is not affiliated with Formula 1, Ferrari, Charles Leclerc, Red Bull Racing, or Max Verstappen.
