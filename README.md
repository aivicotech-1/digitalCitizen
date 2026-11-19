# digitalCitizen

**A single-page learning website for students in Grades 2–5.**

Students choose a grade, browse its activities, and open a game, quiz or simulation inside the website. The project connects the existing HTML activities stored in the grade folders.

The supplied library contains **30 activities**. No account, database, API key or paid service is required.

## Contents

- [Features](#features)
- [Getting started](#getting-started)
- [Using the website](#using-the-website)
- [Technologies explained](#technologies-explained)
- [Project structure](#project-structure)
- [How the website works](#how-the-website-works)
- [Managing activities](#managing-activities)
- [Customising the website](#customising-the-website)
- [Animations and accessibility](#animations-and-accessibility)
- [Checking changes](#checking-changes)
- [Publishing online](#publishing-online)
- [Troubleshooting](#troubleshooting)
- [Privacy and limitations](#privacy-and-limitations)
- [Activity inventory](#activity-inventory)

## Features

| Feature | What it does |
| --- | --- |
| Header and navigation | Links to grades, activities and the learning approach; includes a menu on small screens. |
| Illustrated introduction | Introduces digital citizenship with four illustrated cards linked to the grades. |
| Grade selector | Displays Grades 2–5, their activity counts and a clear selected state. |
| Activity cards | Show the title, description, topic, type and start link. |
| Search | Filters activities within the selected grade. |
| Activity viewer | Opens the original HTML activity in a large overlay. |
| New-tab option | Opens an activity separately when more space is useful. |
| Learning approach | Explains the learning purpose and includes a prompt for teachers and families. |
| Footer | Provides grade links, activity-library and approach links, and a return-to-top link. |
| Scroll animations | Introduce content with quick fades and small upward movements. |
| Responsive design | Adjusts the main website for phone, tablet and desktop screens. |

The footer does not contain a “Teachers & families” link. The on-page section for teachers and families remains available.

## Getting started

### Option A: Open the HTML file

1. Open the `digitalCitizen` folder in File Explorer.
2. Double-click `index.html`, or right-click it and open it with your browser.
3. Choose a grade and start an activity.

Keep the entire folder together. Copying only `index.html` will leave behind the styles, scripts and activities it needs.

The supplied assets and activities are local and can work without an internet connection. Browsers may restrict communication between the page and an embedded activity when opened directly from disk. For more consistent viewer behaviour, use the local server below.

### Option B: Start the local server

You need **Node.js** and **npm** installed. Node.js runs the helper scripts; npm runs the shortcuts defined in `package.json`.

Open PowerShell and run:

```powershell
cd E:\digitalCitizen
node --version
npm --version
npm start
```

Replace the folder path if your copy is stored elsewhere. Use quotation marks around paths containing spaces.

Open the address printed in the terminal: [local website preview](http://127.0.0.1:4173).

- Keep the terminal running while you use the preview.
- Press **Ctrl+C** in that terminal to stop the server.
- Refresh the browser after editing files; automatic page reload is not included.
- There are no external package dependencies, so `npm install` is not required.
- `127.0.0.1` means your own computer. This server does not publish the website or make it available on another device.

### Available commands

Run commands from the project folder:

| Command | Purpose |
| --- | --- |
| `npm start` | Start the local preview on port 4173. |
| `npm run refresh` | Scan the activity folders and regenerate the catalogue. |
| `npm run check` | Check paths, catalogue coverage, selected HTML references and JavaScript syntax. |

The equivalent commands without npm are:

```powershell
node scripts/serve.mjs
node scripts/refresh-catalog.mjs
node scripts/check.mjs
```

Run the command for the action you need. The server command continues running until you stop it.

## Using the website

1. Choose a **grade**. Grade 2 is selected when the page first loads.
2. Browse the cards or type in the **search box**.
3. Select **Start activity**.
4. Use the activity's own controls to play or learn.
5. Select **Back to activities** to return, or **Open in new tab** to use the activity separately.

Search matches titles, topics, types and descriptions. It ignores letter case and searches **only the selected grade**. Selecting a different grade clears the search.

Closing the viewer preserves the grade, search and library position. It unloads the activity, so reopening starts it again. Refreshing the whole page resets the selected grade to Grade 2.

## Technologies explained

| Technology | What it means | Use in this project |
| --- | --- | --- |
| HTML5 | Defines a webpage's structure and content. | Header, footer, sections, controls and viewer. |
| CSS3 | Controls appearance and screen-size adaptation. | Colours, fonts, spacing, Grid, Flexbox and animations. |
| Vanilla JavaScript | JavaScript used directly, without a framework. | Search, grade selection, menus and activity loading. |
| SVG | Vector graphics that remain sharp when resized. | Illustrations, icons and brand mark. |
| JSON | A structured text format for information. | Editable activity descriptions and display settings. |
| HTML `dialog` | A browser element for a modal window. | The activity overlay. |
| HTML `iframe` | Displays another webpage inside a page. | Loads each original activity file. |
| Intersection Observer | Detects content approaching or entering the visible screen. | Starts scroll-reveal animations. |
| Node.js | Runs JavaScript outside the browser. | Preview server, catalogue refresh and checks. |
| npm | Runs commands defined in `package.json`. | Provides the `start`, `refresh` and `check` shortcuts. |

### Does Intersection Observer require an API key?

**No.** API means “Application Programming Interface”: a way for code to use a feature. Some APIs contact external services, but Intersection Observer is built into the browser.

In this website, it notices a card or section coming into view and triggers its animation. It needs no account, internet connection, payment or secret key.

The website does not use React, Bootstrap, an animation library, an AI service or a database.

## Project structure

```text
digitalCitizen/
├── index.html
├── styles.css
├── app.js
├── activities.js
├── catalog-details.json
├── package.json
├── README.md
├── assets/
│   └── favicon.svg
├── scripts/
│   ├── serve.mjs
│   ├── refresh-catalog.mjs
│   └── check.mjs
├── preview/
│   └── ...saved screenshots
├── Grade 2/
│   └── Activities/
│       └── ...HTML activities
├── Grade 3/
│   └── Activities/
│       └── ...HTML activities
├── Grade 4/
│   └── Activities/
│       └── ...HTML activities
└── Grade 5/
    └── Activities/
        └── ...HTML activities
```

| File or folder | Responsibility | When to edit it |
| --- | --- | --- |
| `index.html` | Content, navigation, viewer structure and inline SVG symbols. | Change text, branding, links or sections. |
| `styles.css` | Design, responsive rules and animations. | Change colours, spacing, sizes or motion. |
| `app.js` | Interactive behaviour. | Change filtering, viewer controls or navigation behaviour. |
| `catalog-details.json` | Human-edited activity information. | Change descriptions, topics, artwork choices or ordering. |
| `activities.js` | Generated catalogue used by the browser. | Regenerate it; direct edits will be overwritten. |
| `Grade N/Activities/` | The actual learning activities. | Add or edit an activity's HTML file. |
| `assets/favicon.svg` | Icon displayed in the browser tab. | Change the tab icon. |
| `scripts/` | Development helpers. | Change preview, scanning or checking behaviour. |
| `package.json` | Project details and command shortcuts. | Change metadata or commands. |
| `preview/` | Reference screenshots. | Optional; the website does not load these images. |

## How the website works

The project has two separate stages:

```text
When a maintainer runs npm run refresh:

Grade folders + catalog-details.json
                  ↓
       scripts/refresh-catalog.mjs
                  ↓
             activities.js

When a visitor opens the website:

index.html + styles.css + activities.js + app.js
                  ↓
       Select a grade / search
                  ↓
          Matching activity cards
                  ↓
      Original activity inside an iframe
```

The browser does **not** scan folders at runtime. The refresh script reads the HTML files directly inside each supported `Activities` folder and creates the catalogue in advance.

The displayed title comes from the filename without `.html` or `.htm`. The generator looks up that name in `catalog-details.json`, adds its grade and path, then sorts by grade, `order` and title.

`index.html` loads `activities.js` before `app.js`. The application reads `window.DIGITAL_CITIZEN_ACTIVITIES` to build the cards. The original activity files retain their own styles and behaviour.

## Managing activities

### Add an activity

For example, to add **Safe Sharing Challenge** to Grade 3:

1. Save it as `Grade 3/Activities/Safe Sharing Challenge.html`.
2. Include an `<html>` element, a meaningful `<title>` and a visible `<h1>`. The viewer checks for an `<h1>` when browser permissions allow it to inspect the loaded page.
3. Add this entry inside the existing object in `catalog-details.json`:

```json
"Safe Sharing Challenge": {
  "description": "Practise choosing what is safe to share online.",
  "topic": "Sharing safely",
  "type": "Challenge",
  "art": "shield",
  "color": "#dce6d5",
  "order": 9
}
```

This is an entry to insert, not a replacement for the whole file. Separate neighbouring entries with commas. JSON uses double quotes and does not allow comments or a comma after the final entry.

4. Run:

```powershell
npm run refresh
npm run check
```

5. Refresh the browser, select Grade 3, and open the activity.

### Metadata fields

| Field | Meaning |
| --- | --- |
| Entry name | Must exactly match the filename without its extension, including spaces and capitalisation. |
| `description` | Short explanation on the card. |
| `topic` | Subject label, such as “Sharing safely”. |
| `type` | Activity format, such as “Quiz” or “Simulator”. |
| `art` | Existing illustration: `balance`, `shield`, `chat` or `explore`. |
| `color` | Illustration background, written as a CSS colour. |
| `order` | Numeric position within the grade. Lower numbers appear first; ties sort by title. |

An activity with **no metadata entry** receives generic details. If you create an entry, provide all the fields shown above; partial entries are not merged with defaults.

The generator manages `id`, `grade`, `title` and `path`. Do not add those fields to the metadata entry.

### Edit, rename, move or remove an activity

| Change | Steps |
| --- | --- |
| Questions, game logic or internal styling | Edit the activity HTML and reopen it. |
| Card text, illustration, colour or order | Edit `catalog-details.json`, run refresh, then reload. |
| Displayed title | Rename the HTML file and matching metadata key, then refresh and check. |
| Move to another supported grade | Move the file to that grade's `Activities` folder, then refresh and check. |
| Remove from the library | Move the file outside the scanned `Activities` folders, then refresh and check. Remove unused metadata if appropriate. |

### Folder and naming rules

- Only `.html` and `.htm` files directly inside each `Activities` folder are scanned. Nested folders are not scanned.
- If an activity needs its own images, styles or scripts, keep those assets and their relative paths together.
- Metadata is keyed by filename, not grade. Identically named activities in different grades share one metadata entry.
- Use distinct filenames within each grade. Names that become identical after punctuation is removed can produce duplicate IDs; the generator reports these.
- Adding a new grade requires updating the grade lists in the refresh/check scripts, grade controls and navigation in `index.html`, `gradeCopy` in `app.js`, and relevant CSS. A new folder alone will not add a grade.

## Customising the website

### Text, branding and illustrations

Edit `index.html` for the page title, description, header, introduction, learning approach and footer. When renaming the brand, update both visible text and its accessible labels.

The brand mark, icons and illustrations are inline SVG symbols in `index.html`. The tab icon is the separate `assets/favicon.svg` file.

### Colours

Main colour variables are in the `:root` rule in the `base` layer of `styles.css`:

```css
--paper: #f3f1ec; /* Page background */
--ink: #283e35;   /* Main text */
--muted: #61665f; /* Supporting text */
--green: #294f40; /* Main buttons */
--line: #d8d9cf;  /* Borders */
--gold: #c58b3d;  /* Accent */
```

Grade-card backgrounds have their own CSS rules. Activity-card backgrounds come from `catalog-details.json`.

### Typography and layout

The site uses locally available fonts. It tries Inter, then Segoe UI, then Arial for sans-serif text. Serif accents use Georgia or Times New Roman. It does not download external font files.

CSS Grid arranges cards; Flexbox aligns navigation and controls. Responsive rules adjust the layout for narrower screens. The `legibility` CSS layer has final precedence over the other layers, so check it if a font-size change seems ineffective.

The design reference inspired the large typography, restrained colours, card fan and staggered motion. The content and illustrations are specific to digital citizenship.

### Main JavaScript functions

| Function | Purpose |
| --- | --- |
| `render()` | Filters the catalogue and rebuilds activity cards. |
| `selectGrade()` | Changes grade, clears search and optionally scrolls to the library. |
| `openActivity()` | Sets up and opens the viewer. |
| `closeActivity()` | Closes the viewer; its close handler unloads the iframe and restores focus. |
| `watchReveals()` | Registers content for scroll-reveal animations. |
| `revealElement()` | Reveals an element and stops observing it. |
| `updateScroll()` | Updates the header appearance and decorative hero-card movement. |

## Animations and accessibility

Scroll reveals use a **16-pixel upward movement** and a **0.42-second fade**. Items in a row are staggered by **30 milliseconds**, up to **90 milliseconds**. They start near the bottom of the visible screen to avoid a long delay.

Each element reveals once. Searching or switching grade creates new cards that are registered again. Scrolling stays native: the site does not intercept the mouse wheel to impose its own scrolling speed.

To adjust the effect:

- Edit `.reveal` and `.reveal.reveal-pending` in the `motion` layer of `styles.css` for speed and distance.
- Edit `watchReveals()` in `app.js` for staggering.
- Edit the observer's `rootMargin` and `threshold` in `app.js` for when the reveal starts.

The main website includes:

- A **Skip to activities** link and visible keyboard focus.
- Labelled controls and a clearly indicated selected grade.
- Search-result announcements for assistive technology.
- Focus restoration after the viewer closes.
- Immediate visibility when keyboard focus enters an element awaiting its reveal.
- Support for the device's **reduced-motion preference**, which disables decorative animation and keeps content visible.

**Escape** closes the viewer. When focus is inside an activity, this works through same-origin access on the local server. Direct-file browser restrictions may prevent that integration; the visible **Back to activities** control remains available.

These features describe the hub. The existing activities have their own controls, accessibility and small-screen layouts.

## Checking changes

Run:

```powershell
npm run check
```

The script checks:

- Duplicate HTML IDs and selected internal references.
- JavaScript syntax in the hub and inline activity scripts.
- Whether catalogue activity files exist.
- Whether paths match the expected grade folders.
- Whether referenced illustrations exist.
- Whether catalogue counts match the HTML file count in each grade.

**Passing these checks does not prove every game interaction or layout works.** Manually check the affected features in a browser, including grade selection, search, viewer controls, keyboard navigation and narrow-screen layout.

During development, all 30 activities were opened through the local-server viewer, and the hub was checked at phone, tablet and desktop sizes. Repeat relevant checks after future changes.

## Publishing online

This is a **static website**. A host can serve the HTML, CSS, JavaScript and assets directly; it does not need the Node.js preview server.

Run refresh and check, then upload these files and folders together:

```text
index.html
styles.css
app.js
activities.js
assets/
Grade 2/
Grade 3/
Grade 4/
Grade 5/
```

Preserve folder names, spaces, filename capitalisation and supporting activity assets. Place `index.html` at the root of the published folder. No compilation or framework build is required.

`scripts/`, `preview/`, `catalog-details.json`, `package.json` and this README are not needed to run the hosted website. Keep them in the development copy for maintenance.

After uploading, check the activity links at the actual hosted address. No public hosting or domain configuration is included in this local setup.

## Troubleshooting

| Problem | What to do |
| --- | --- |
| `node` or `npm` is not recognised | Install Node.js with npm, then open a new terminal. Opening `index.html` directly does not require Node.js. |
| PowerShell blocks `npm.ps1` | Use `npm.cmd start`, `npm.cmd run refresh` or `npm.cmd run check`, or the equivalent `node scripts/...` command. |
| Port 4173 is in use | Stop an earlier preview with Ctrl+C, or use the alternative-port example below. |
| Preview cannot be reached | Start the server, keep the terminal open and use the printed address on the same computer. |
| New activity is missing | Check its folder and extension, run refresh and reload the page. |
| Card shows generic text | Make the metadata key match the filename exactly, without the extension. |
| Activity fails to load | Check the file path, run refresh and check, and try the local server or new-tab link. |
| Viewer reports an error for a new file | Include a visible `<h1>` and check its HTML and path. The viewer has a fallback after about 12 seconds without a successful load. |
| Refresh reports a JSON error | Check double quotes, commas and matching braces in `catalog-details.json`. |
| Edits to `activities.js` disappear | It is generated. Edit the source HTML or metadata instead. |
| Search finds nothing | It searches only the selected grade. Clear search or choose another grade. |
| CSS or JavaScript changes are missing | Refresh the page. Use Ctrl+F5 if cached assets remain. |
| Scroll animations do not appear | Check the device's reduced-motion preference. Reveals run once per element; reload to see them again. |
| An activity looks crowded on a phone | Its layout belongs to its own HTML file. Check its responsive CSS or open it separately. |
| Escape fails inside a directly opened activity | Use **Back to activities** or run the local server. |

To select another port in PowerShell:

```powershell
$env:PORT = '4174'
npm start
```

Use the newly printed address. After stopping the server, remove this terminal's port override with:

```powershell
Remove-Item Env:PORT
```

## Privacy and limitations

The hub has no login, analytics, database, progress tracking or external API calls. Search runs locally in the browser. It does not save grades, searches or progress across page reloads.

The supplied activities contain practice scenarios. Use made-up information where requested, especially in username and password exercises. Any activities added later may have different storage or network behaviour; review their own scripts separately.

Current boundaries:

- The interface supports Grades 2–5.
- There is no administrator dashboard or browser upload feature; maintainers manage local files.
- Catalogue changes require the refresh command.
- Activity scores are not collected into shared reports.
- Closing the viewer does not preserve an activity's session.
- Original activities may need their own responsive or accessibility improvements.
- The preview server is restricted to this computer and intended for development.

## Activity inventory

These are the 30 included activities. Website counts are calculated from the generated catalogue; update this documentation when the inventory changes.

| Grade | Count | Main themes |
| --- | ---: | --- |
| Grade 2 | 3 | Healthy habits and online safety |
| Grade 3 | 8 | Privacy, sharing and online identity |
| Grade 4 | 9 | Kind communication, conflict and digital protection |
| Grade 5 | 10 | Critical thinking, media literacy and cyber security |
| **Total** | **30** | |

### Grade 2

- My Balanced Day
- Pop-Up Safety Simulator
- Smart Tech Habits Quiz

### Grade 3

- Info Sorter
- Share Circles
- Safe Username Maker
- Password Lab
- Account Guard
- Photo Clue Detective
- Post or Pause
- Privacy Champion Quiz

### Grade 4

- Cool It Down
- Message Makeover Studio
- Group Chat Sandbox
- Sort It Board
- Red Flag Detective
- Encryption Machine
- Decoder Machine
- Cyber Castle
- Virus Outbreak

### Grade 5

- URL Detective
- Beat the Trickster
- App Permission Checker
- Password Cracker
- Two-Step Login
- Network Explorer
- Photo Edit Lab
- Rumour Spread Simulator
- Cyber Crime Scene
- Cyber Defence HQ
