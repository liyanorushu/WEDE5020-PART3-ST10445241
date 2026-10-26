# Changelog — Sip & Sack Co. Website

All notable changes to the **Sip & Sack Co.** web development repository (`PART-2---ST10445241-WEDE5020`) will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to structured academic and e-commerce release versions.

---

## [3.0.0] - 2026-10-26 (Part 3 Release)

### Added
- Created **`js/main.js`**:
  - Implemented dynamic active navigation link highlight based on the active HTML page route.
  - Added auto-updating copyright year in the footer.
  - Added smooth scroll-to-top interaction.
- Created **`js/validation.js`**:
  - Implemented real-time form validation for both `enquiry.html` and `contactus.html`.
  - Added regex checks for valid South African email and phone number formats.
  - Added error message toggling and highlight classes (`.error`, `.error-message`).
- Created **`js/search.js`**:
  - Added a live product search bar on `services.html` allowing instant client-side filtering of drinkware cards.
- Created **`js/location.js`**:
  - Added dynamic store status calculation (Open/Closed badge) based on operating hours (Mon–Fri, 08:00–17:00).
  - Integrated browser Geolocation API distance calculation to Motherwell, Gqeberha coordinates.
- Updated **`CSS/style.css`**:
  - Added styling rules for `.search-input`, `.store-status` badges, and `.error` field states.

---

## [2.0.0] - 2026-09-15 (Part 2 Release)

### Added
- Developed inner page HTML files inside the `pages/` directory:
  - `pages/aboutus.html`: Added company journey, mission, vision, and target market sections.
  - `pages/services.html`: Added product showcase cards and service feature breakdowns.
  - `pages/enquiry.html`: Created custom order quote form with file upload support.
  - `pages/contactus.html`: Added contact card grid, interactive message form, and embedded Google Maps iframe for Motherwell, Gqeberha.
- Created centralized **`CSS/style.css`**:
  - Defined CSS root color variables (`--primary-color: #1e3a8a`, `--accent-color: #f59e0b`, `--primary-dark: #0f172a`).
  - Added shared Flexbox header/navbar and 4-column footer components across all pages.
  - Added CSS Grid layouts for product cards with responsive breakpoints.
  - Fixed product image scaling using `object-fit: contain` and padded card wrappers.
- Configured local Git version control and remote origin link to GitHub (`https://github.com/liyanorushu/PART-2---ST10445241-WEDE5020.git`).

---

## [1.0.0] - 2026-08-20 (Part 1 Initial Setup)

### Added
- Created root `index.html` structure with brand header, hero feature banner, and product preview grid.
- Added brand identity assets to `images/` folder (logos, tumblers, and product shots).
- Established project folder hierarchy (`/CSS`, `/images`, `/pages`).
- Created initial `README.md` repository documentation.