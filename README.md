# Best-Basketball-Club-Per-Region-Interactive-Map

https://raw.githack.com/KLubina/Best-Basketball-Club-Per-Region-Interactive-Map/main/index.html

### Work Approach

The data comes form the game 'International Basketball Manager 23' (https://store.steampowered.com/app/2098130/International_Basketball_Manager_23/) which has its stats for its game stored in the following files:

-initial_global_db_static
-initial_global_db_dynamic

from there I "cleaned the data". After they were cleaned they are stored in the .json in the data-folder

### File Structure

```
app.js
index.html
README.md
│
├───controllers
│       SearchController.js
│
├───data
│       clubs-data.js
│
├───managers
│       MapManager.js
│       RadiusManager.js
│       StatsManager.js
│
├───renderers
│       ClubRenderer.js
│
├───styles
│       base.css
│       map.css
│       responsive.css
│       search.css
│
└───utils
        ClubFilter.js
        DistanceCalculator.js
        EventManager.js
```
