# digitalCitizen · Skill2Success

A digital citizenship website with **36 activities for Grades 2–6**, built with HTML, CSS and vanilla JavaScript. No account, database, API key or external packages are required.

## Features

- Choose a grade and search its games, quizzes and simulations.
- Open grades and activities in the same tab; use **Back** to return.
- Select **Description** inside an activity for its purpose, instructions, learning outcomes and scoring.
- Responsive layouts, keyboard controls and smooth scroll animations with reduced-motion support.

| Grade | Activities |
| --- | ---: |
| 2 | 3 |
| 3 | 8 |
| 4 | 9 |
| 5 | 10 |
| 6 | 6 |

## Run locally

Install Node.js with npm, then run this from the project folder:

```sh
npm start
```

Open [localhost:4173](http://127.0.0.1:4173). Keep the terminal open; press **Ctrl+C** to stop. Refresh the browser after editing files. No `npm install` is needed.

You can also open `index.html` directly in a browser. Keep all project files together.

## Commands

| Command | Purpose |
| --- | --- |
| `npm start` | Start the local preview server. |
| `npm run refresh` | Rebuild the activity catalogue from the grade folders. |
| `npm run check` | Check catalogue coverage, file paths, references and JavaScript syntax. |
| `npm test` | Run activity regression tests, including all six Grade 6 flows. |

On Windows, use `npm.cmd` instead of `npm` if PowerShell blocks `npm.ps1`.

## Main files

| File or folder | Purpose |
| --- | --- |
| `index.html` | Homepage and grade cards. |
| `activities.html` | Searchable activity library. |
| `styles.css`, `app.js` | Main website design, navigation, filtering and animations. |
| `catalog-details.json` | Card descriptions, topics, artwork and ordering. |
| `activities.js` | Generated catalogue; regenerate instead of editing manually. |
| `Grade 2/` through `Grade 6/` | Each grade's `Activities/` folder contains its HTML activities. |
| `assets/activity-ui.css` | Shared activity styling. |
| `assets/activity-descriptions.js` | Activity-specific description dialogs. |
| `scripts/` | Preview server, catalogue generator and checks/tests. |

## Add or update an activity

1. Place the HTML file directly in `Grade N/Activities/` for a supported grade (2–6).
2. Add its entry to `catalog-details.json`. The key must match the filename without `.html`. Follow an existing entry's `description`, `topic`, `type`, `art`, `color` and `order` fields.
3. Follow an existing activity's shared stylesheet, header, Back link and Description button. Set the body's `data-grade` and unique `data-activity` value, and add the matching guide in `assets/activity-descriptions.js`.
4. Run `npm run refresh`, `npm run check` and `npm test`.
5. Open the activity and check gameplay, scoring, restart, keyboard controls, descriptions and mobile layout.

The browser reads the generated catalogue; it does not scan folders itself. Refresh the catalogue after adding, renaming, moving or removing activities, or changing card metadata. Adding another grade also requires updating the grade lists, navigation and layouts.

## Publish

This is a static website with no build step. Serve `index.html`, `activities.html`, `styles.css`, `app.js`, `activities.js`, `assets/` and all grade folders together. Preserve filenames and relative paths. The Node.js server is for local preview only.

Keep the generated `activities.js` in Git. Local screenshots in `preview/`, dependencies and environment files are excluded by `.gitignore`.

## Notes

- Progress is not saved between page reloads. Use made-up information in practice activities.
- Closing a Description dialog keeps the activity state; running animations continue.
- Scroll animations use the browser's **Intersection Observer API**, which requires no API key.
- Automated checks do not replace browser testing after changes.
