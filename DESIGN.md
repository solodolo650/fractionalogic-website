---
name: Fractionalogic
description: Senior leadership logic, applied fractionally. A calm, evidence-led site for a Fractional CMO practice.
colors:
  logic-teal-950: "#062e30"
  logic-teal-800: "#0b4f4e"
  logic-teal-650: "#126a66"
  signal-teal: "#287f78"
  logic-mist: "#d5ebe6"
  graphite: "#151a1f"
  slate: "#5d6a70"
  silver: "#d9dfde"
  warm-porcelain: "#f7f5ef"
  executive-brass: "#b69354"
  white: "#ffffff"
  field-border: "#8a9699"
  error: "#a3302a"
  error-surface: "#fbeeec"
typography:
  display:
    fontFamily: "'Inter Variable', 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.5rem, 3.2vw + 1.25rem, 4rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.035em"
    fontVariation: "'opsz' 32"
  headline:
    fontFamily: "'Inter Variable', 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.875rem, 2vw + 1.125rem, 2.625rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.025em"
    fontVariation: "'opsz' 32"
  title:
    fontFamily: "'Inter Variable', 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.5rem, 0.8vw + 1.2rem, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
    fontVariation: "'opsz' 32"
  title-sm:
    fontFamily: "'Inter Variable', 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.015em"
    fontVariation: "'opsz' 32"
  lede:
    fontFamily: "'Inter Variable', 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.0625rem, 0.3vw + 1rem, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "'Inter Variable', 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "'Inter Variable', 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.3
  small:
    fontFamily: "'Inter Variable', 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  numeral:
    fontFamily: "'Inter Variable', 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontWeight: 600
    letterSpacing: "-0.03em"
    fontFeature: "'tnum', 'lnum'"
    fontVariation: "'opsz' 32"
rounded:
  focus: "4px"
  menu-item: "6px"
  md: "8px"
  pill: "999px"
  sm: "4px"
  circle: "50%"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  row: "28px"
  lg: "40px"
  xl: "48px"
  2xl: "64px"
  gutter: "clamp(16px, 4vw, 40px)"
  section: "clamp(96px, 11vw, 160px)"
  content: "1060px"
  measure: "38rem"
components:
  button-primary:
    backgroundColor: "{colors.logic-teal-650}"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
    height: "50px"
  button-primary-hover:
    backgroundColor: "{colors.logic-teal-800}"
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.logic-teal-800}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
    height: "50px"
  chip:
    backgroundColor: "{colors.white}"
    textColor: "{colors.graphite}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
    height: "36px"
  chip-selected:
    backgroundColor: "{colors.logic-teal-950}"
    textColor: "{colors.white}"
  tab:
    backgroundColor: "{colors.white}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.pill}"
    padding: "8px 18px"
    height: "44px"
  tab-selected:
    backgroundColor: "{colors.logic-teal-950}"
    textColor: "{colors.white}"
  panel:
    backgroundColor: "{colors.logic-mist}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.md}"
    padding: "clamp(28px, 4vw, 48px)"
  surface-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.md}"
    padding: "clamp(24px, 3vw, 32px)"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.md}"
    padding: "12px 14px"
    height: "50px"
  nav-bar:
    textColor: "{colors.graphite}"
    rounded: "{rounded.md}"
    padding: "10px 10px 10px 24px"
    height: "60px"
    width: "min(1104px, 100% - 2 * var(--gutter))"
  footer:
    backgroundColor: "{colors.logic-teal-950}"
    textColor: "{colors.logic-mist}"
    padding: "80px 0 40px"
  prestige-badge:
    backgroundColor: "{colors.executive-brass}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.sm}"
    padding: "4px 12px"
  photo-card:
    backgroundColor: "{colors.logic-teal-950}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
---

# Design System: Fractionalogic

## Overview

**Creative North Star: "The Leadership Ledger"**

Fractionalogic reads like a well-kept board document: a warm paper ground, deep teal ink for anything that carries authority, and structure drawn with hairlines rather than boxes. Every page proves the practice runs on logic, so sequences, pairings, comparisons, and data are shown as structure (ruled lists, numbered steps, bars, pairing diagrams) instead of decoration. The system is one family of sans type, one radius, one accent family, and one photographic treatment, repeated with discipline.

Density is moderate and editorial: a single 1060px column, generous section gaps, body text held to a ~70-character measure, and a left-aligned first viewport (breadcrumb, large Inter Display title, one-paragraph lede, primary action) with a proof element set beside the title on Persuade inner pages (About, a Read page, runs title-only). Depth is almost entirely tonal: porcelain ground, white surfaces, Mist panels, and Teal 950 closing bands. Photography only appears re-toned through the Executive Logic tritone, never in natural colour.

The build explicitly refuses the consultancy default of identical icon-card grids and stock hero banners. There are no serif faces and no glyph icons standing in for content. Gradients are limited to the legibility tint over tritone photos and, by the user's direction (2026-09-26), in-palette teal gradients on bento, stat and sequence tiles; never gradient text.

**Key Characteristics:**
- Warm Porcelain canvas with Logic Teal 950 Inter Display headlines at weight 600, opsz 32.
- One radius (8px) for every rectangle; pills (999px) only for chips and tabs; prestige badges take the small 4px radius.
- Silver hairline rules organise content (rule lists, data lists, recognition, steps).
- Teal 650 is the single action colour; Signal Teal only marks hover and current state underlines.
- Executive Brass is a rare prestige mark, never a UI colour.
- Tritone teal photography confined to photo-cards (closing CTA bands, homepage feature cards, About's India tile) and to stand-in resource thumbnails.

## Colors

A restrained cool-teal ink family on a warm paper ground, with one metallic accent held back for recognition.

### Primary
- **Logic Teal 650** (`logic-teal-650`): The action colour. Primary button fill, text links, focus outline, caret and accent-color, active step markers, the leading bar in comparison charts, selected TOC rule. 6.40:1 on white, 5.87:1 on Porcelain.
- **Logic Teal 800** (`logic-teal-800`): Brand and pressed-action colour. Primary button hover, wordmark, secondary-button text.
- **Logic Teal 950** (`logic-teal-950`): Heading ink and the dark field. All h1-h3, numerals, footer, photo-card base, selected chip/tab fill, partner monogram discs, `theme-color`. 13.37:1 on Porcelain.

### Secondary
- **Signal Teal** (`signal-teal`): Highlight only. The 2px underline that appears on link hover and marks the current nav item. Never a fill, never text.
- **Logic Mist** (`logic-mist`): Panel ground (tabs holder, Benefits & ROI, header asides), menu-item hover, text selection, the highlight stop of the photo tritone, and muted text on dark fields (11.70:1 on Teal 950).

### Tertiary
- **Executive Brass** (`executive-brass`): Prestige accent, capped at 5% of any screen. Current uses: About recognition left rule, About India "Primary base" badge, footer column headings (5.06:1 on Teal 950), homepage award badge (Graphite on Brass, 6.08:1). Fails as text on Porcelain (2.64:1).

### Neutral
- **Warm Porcelain** (`warm-porcelain`): The page canvas. Brand-pinned; do not substitute white or grey. Also the nav's translucent glass tint and the empty track of bar charts.
- **White** (`white`): Raised surfaces: cards, inputs, chips, tabs, secondary buttons, dropdown menus.
- **Graphite** (`graphite`): Body text everywhere, and all text on Mist panels (14.05:1).
- **Slate** (`slate`): Muted text on Porcelain or white only (5.12:1 / 5.58:1): breadcrumbs, captions, sources, hints. Also field hover border.
- **Silver** (`silver`): Hairline rules, card and chip borders, breadcrumb separators, bar-chart secondary bars, scrollbar thumb.
- **Field Border** (`field-border`): Form control outline, ~3:1 on white to meet WCAG 1.4.11; also the dashed "report pending" outline.
- **Error** (`error`) on **Error Surface** (`error-surface`): Invalid-field border, inline and summary error text (6.97:1 on white); the error summary box sits on the pale surface with an Error border.

### Named Rules
**The Graphite-on-Mist Rule.** Text on a Logic Mist panel is Graphite or Teal 950, never Slate. Slate on Mist is 4.48:1 and fails AA.

**The Semantic Role Rule.** Components use semantic roles, never raw palette names: `--color-dark` for teal fields, marks and nodes; `--color-selected` / `--color-on-selected` for pressed chips and selected tabs; `--color-text-on-panel` for text on Mist; `--color-rule-on-panel` and `--color-rule-on-dark` for hairlines on tinted grounds. Translucent teals are written as `color-mix()` of a role, never as rgba literals, so a palette change reaches every tint.

**The Brass Ration Rule.** Executive Brass marks recognition and prestige only, at 5% of a screen or less. It is never a button, link, or body-text colour, and never text on a light ground.

**The One Action Rule.** Teal 650 is the only interactive colour on light grounds; hover deepens to Teal 800 and hover underlines use Signal Teal. On dark fields, actions flip to white.

## Typography

**Display Font:** Inter Display, served as the Inter variable font with `font-variation-settings: 'opsz' 32` (fallback system-ui, -apple-system, Segoe UI, sans-serif)
**Body Font:** Inter Variable, optical size automatic (same fallback)

**Character:** One family, two optical voices. Headlines take the tighter, sharper Display cut at weight 600 with negative tracking; body stays at the text cut. Hierarchy comes from size, weight, and colour (Teal 950 vs Graphite), never from a second family. No serif faces anywhere.

### Hierarchy
- **Display** (600, clamp 2.5 to 4rem, 1.04, -0.035em): Page titles on inner pages, capped at 16em width. The homepage hero uses a near-identical clamp (2.375 to 4rem).
- **Headline** (600, clamp 1.875 to 2.625rem, 1.12, -0.025em): Section h2s and CTA band titles. Pull quotes run slightly larger (up to 2.75rem, 1.08). Ruled quotes (homepage Founder, Testimonial) use Display 500 at clamp 1.25 to 1.5rem, line-height 1.4.
- **Title** (600, clamp 1.5 to 1.75rem, 1.2, -0.02em): h3s, sequence step names, report and region titles.
- **Title-sm** (600, 1.1875rem, 1.3, -0.015em): Rule-list row labels, recognition and sub-heads.
- **Lede** (400, clamp 1.0625 to 1.1875rem, 1.6): The one paragraph under a page title, held to the 38rem measure.
- **Body** (400, 1rem, 1.5): Running text, max width 38rem (about 70 to 78 characters).
- **Label** (500, 0.9375rem, 1.3): Chips, tabs, breadcrumbs, captions, secondary meta.
- **Small** (400 to 600, 0.875rem): Field hints and errors, TOC title, source lines, footer legal row.
- **Numeral** (600, tabular lining figures, -0.03em, Teal 950): Statistics, bar values, data-list figures. Stat tiles: clamp 2.25 to 3rem; the one lead stat tile runs clamp 4 to 6rem at -0.04em.

### Named Rules
**The One Family Rule.** Every headline is Inter at opsz 32, weight 600, Teal 950. Do not introduce a second family or a serif for "editorial" moments.

**The Title-First Rule.** Inner-page sections open with the heading itself. No small label, kicker, or eyebrow sits above a heading.

*Known inconsistency (not a pattern):* the homepage carries four Figma-derived eyebrows in Teal 650, 1.0625rem, weight 500 (Why fractional, Services, Our story, Testimonials). The user chose to keep them (2026-09-26); an eyebrow must never repeat its heading's words. Homepage only: inner pages stay title-first. They are a carried defect, not a style to reuse on new surfaces.

## Layout

A single centred column of `min(1060px, 100% - 2 × gutter)`, with a fluid gutter (16 to 40px) and fluid section spacing (96 to 160px). Body copy is capped at the 38rem measure; section heads at 720px. The floating nav is slightly wider (1104px) than the content column so it frames it.

- **Inner-page header:** breadcrumb, Display title, lede, actions, left-aligned; top padding clamp 72 to 112px. The split variant places a proof aside (comparison chart, pull quote, panel) in a 1.1fr / 1fr grid, top-aligned so titles start at the same height on every page, collapsing to one column under 900px. Read pages (About) use the plain variant: no aside, the title alone owns the first viewport. Header actions stack full-width under 560px.
- **Homepage split (`.split`):** every two-column homepage section uses one grid, head on the left 5/12 and content on the right 7/12 (column gap clamp 40 to 80px), so all right columns start on the same vertical line (671px at a 1440px viewport). Right-column content starts on the section's top line (the eyebrow's). Padded panels offset their first column so their right column still lands on that line (see JoinRoster). Only the homepage hero is centred.
- **Ruled quote (`.ruled-quote`):** quotes are never boxed. A 1px Silver rule on the section's top line, 28px padding, the quote in Display 500 at clamp 1.25 to 1.5rem, then a byline (name 600 Graphite, role Slate). Used by Founder only (with a 4:3 portrait settled to the bottom of the left column, so photo and link share a bottom edge): the single voice.
- **Testimonial cards:** the many voices, deliberately unlike the ruled quote. Split header (label + heading left), then a full-width three-column row of surface cards (16px gap, 56px below the header, one column under 900px). Quote in body type (1rem, 1.6), byline pinned to the card foot above a Silver hairline: a 44px Teal 950 initials disc, name 600 Teal 950, role and company 0.875rem Slate. Equal-height cards, so names align across the row.
- **Pinned sequence (FCMO How it works):** on screens 1024px+ wide and 700px+ tall without reduced motion, the section pins 96px under the nav and vertical scroll drives the step cards sideways (travel equals the track overflow, plus a 25vh hold on the last card). A four-part rail above (number + stage name) fills 1 → 4 with progress and is the only place numbers appear. Cards darken with the engagement: Mist, Mist-to-Teal, Teal 650 → 800, Teal 800 → 950; each holds just the stage name (Display, up to 3.5rem) at the top and one sentence at the foot, and fills the pinned frame's height (up to 520px). Everywhere else the cards stack in a plain list and no script runs.
- **Coverage bento (FCMO What's covered):** six-column grid, tiles span 4+2, 3+3, 2+2+2; tones mix a Teal 950 → 800 gradient lead tile, a Teal 800 → 650 tile, Mist and white surfaces. Each tile is a title over one short descriptive paragraph (no item lists or hairlines); the lead tile adds a soft Teal 650 corner glow.
- **Persona block (FCMO Who we serve):** one Mist panel on the 5/7 split: heading and description left, stages as hairline rows right. No nested cards.
- **Industries:** spaced blocks on the 16px rhythm (12px on phones), four columns, two under 900px, each with a Mist-to-white wash; names only, no figures.
- **Long reads (About):** a 200px sticky "On this page" rail beside the body (the `fl-toc` host sticks at 128px, matching `scroll-padding-top`; the sticky must sit on the host, whose parent is the stretched grid cell), collapsing to a wrapping row of pill links under 1024px. The founder bio is one column: a 128px square portrait (88px on phones) beside the name, role and tagline, then body copy flush to the column edge. Narrative sequences (the About story) run as a single reading column on a 1px Silver spine with 13px Teal 650 ring nodes; the first and last nodes are filled.
- **Rule list:** label | body rows at 5fr / 7fr with 48px column gap, 28px row padding, one column under 900px.
- **Sequences:** four equal columns, each topped by a 2px Silver rule with a 32px numbered circle; the first step's rule is Teal 650.
- **Forms:** two-column field grid (24px row, 20px column gap), one column and full-width submit under 560px.
- **Rhythm:** internal gaps step through 8, 12, 16, 20, 24, 28, 40, 48, 64px. Three shared breakpoints: 560px (phone), 900px (single column), 1024px (desktop nav and the About rail). Media queries cannot read custom properties, so these are written as literals and must not drift.

## Elevation & Depth

Flat by default. Depth comes from tone: Porcelain ground, white surfaces with a Silver hairline, Mist panels without borders, and Teal 950 dark fields. Shadows exist only on things that float above the page.

### Shadow Vocabulary
- **Float** (`box-shadow: 0 12px 32px color-mix(in srgb, var(--color-dark) 10%, transparent)`): Nav dropdown and mobile menu only.
- **Focus halo** (`box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-action) 22%, transparent)`): Form controls on focus, paired with a Teal 650 border.
- **Nav glass** (`background: color-mix(canvas 82%); backdrop-filter: blur(20px) saturate(1.4)`, Silver hairline at 70%): The sticky nav bar, 16px from the top.

### Named Rules
**The Floating-Only Shadow Rule.** Cards, panels, and buttons never carry shadows. Only menus that overlay content do.

**The Tritone Rule.** Photography is never shown in natural colour. It passes through the `#duotone-logic` SVG filter (luminance mapped to Teal 950 shadows, Teal 650 midtones, Mist highlights) inside a photo-card, with a Teal 950 gradient tint for text legibility.

## Shapes

One gentle corner for every rectangle (8px): buttons, cards, panels, inputs, nav bar, photo-cards, founder photo. Pills (999px) are reserved for chips, tabs, TOC links on small screens, and badges. Circles mark identity and order: partner monogram discs (56px, or 48px compact) and sequence step numbers (32px, 2px Teal 650 stroke). Menu items use 6px, the focus outline 4px with a 3px offset. Borders are always 1px Silver hairlines, except step rules (2px) and the 2px underline hover.

## Components

### Buttons
Calm, solid, and unmistakable; there is one primary action per view.
- **Shape:** gentle corner (8px), min-height 50px, 12px 20px padding, weight 600.
- **Primary:** Teal 650 fill and border, white text. Hover deepens to Teal 800. 160ms colour transition.
- **Secondary:** white fill, Silver border, Teal 800 text; hover turns the border Teal 650. On dark CTA bands the border is white.
- **Glass (homepage hero on photo):** 10% white fill, 40% white border, 12px backdrop blur; hover 20% white.
- **Nav CTA:** a compact primary (Teal 650, 38px min-height, 0 16px, 6px radius, 0.9375rem 600). The one deliberate second primary on a screen: it is the persistent route to Talk to Us.
- **Text link:** Teal 650, weight 600, transparent 2px underline at 5px offset that turns Signal Teal on hover.
- **Focus:** 2px Teal 650 outline, 3px offset, 4px radius; white on dark fields.

### Chips and Tabs
- **Chip:** white, 1px Silver border, pill, 36px min-height, 0.9375rem. Static chips list industries and functions; `button.chip` acts as a filter.
- **Tab:** same pill language at 44px, weight 500.
- **State:** hover turns the border Teal 650; pressed or selected fills Teal 950 with white text. Under 600px tabs become a full-width stacked segmented list inside one 8px-radius outline.

### Cards / Containers
- **Surface card:** white, 1px Silver border, 8px radius, clamp 24 to 32px padding. Used for partner cards, comparison asides, region tiles, reports.
- **Panel:** Logic Mist, no border, 8px radius, clamp 28 to 48px padding. Text inside is Graphite.
- **Resource card:** the one card for every resource (Resources grid, report pages, homepage block). White surface, 16:10 thumbnail, title as the stretched link (external pieces add an arrow glyph), meta row of category (Teal 650) and source ("On LinkedIn", "PDF coming soon"). Entries without their own thumbnail get their category's tritone photo at a crop derived from the id. Under 560px it becomes a compact row with a 104px thumbnail. The dashed Field Border "PDF coming soon" state lives on report pages.
- **Shadow strategy:** none (see Elevation).

### Inputs / Fields
- **Style:** white fill, 1px Field Border outline, 8px radius, 50px min-height (textarea 140px), 12px 14px padding. Labels are Teal 950 weight 600 with a muted "Required/Optional" note on the right.
- **Hover:** border to Slate.
- **Focus:** border Teal 650 plus the 3px focus halo.
- **Error:** border Error; message in Error at 0.875rem weight 500; an error summary box on Error Surface with linked items.
- **Success:** replaces the form with a Mist panel and a Teal 650 check.

### Navigation
- **Style:** slim floating glass bar (redesigned 2026-09-26 from the 80px version), sticky 16px from top, 32px top margin, 60px tall (56px under 900px), 8px radius, logo 1.125rem 700 Teal 800.
- **Items:** 38px-tall soft targets, 0 14px padding, 6px radius, 0.9375rem weight 500, 4px apart. Hover and the open trigger fill with Teal 950 at 6%; the current page fills Mist and turns Teal 950 weight 600 (a current section's trigger only turns 600). No underlines.
- **Dropdowns:** 340px white panel, float shadow, 6px padding; each item is a title (0.9375rem 600 Teal 950) over a one-line description (0.875rem Slate), hovering to Porcelain (never Mist: Slate fails there). The current page carries a 6px Teal 650 dot after its title. Opens from the trigger with fade + 4px drop + 0.97 scale, 220ms `cubic-bezier(0.22, 1, 0.36, 1)`; the chevron rotates 180° over 300ms; a 120ms leave grace stops accidental closes. Descriptions live on `NavLink.description` in `src/data/site.ts`.
- **Mobile (under 900px):** a 40px icon button with a two-line hamburger (18px, 1.5px strokes) that morphs into an X; it opens a white sheet (fade + scale 0.98) of hairline-divided rows: Display 1.25rem top items, Graphite sub-links, current page in Teal 650, and a full-width primary CTA.
- **Footer:** Teal 950 field, Mist text, Brass column headings, white on hover.

### Rule List (signature)
The house way to present pairs of facts: a label in Title-sm Teal 950 beside a body cell, each row separated by a Silver hairline, top rule on the list. Variant: the recognition list (Brass 1px left rule).

### Stat Bento (About 2026 data)
A six-column grid of stat tiles, 16px gap. One lead tile (span 4, Teal 950 dark field, the largest numeral) beside the India tile (span 2, Logic Mist, home base); two white surface tiles (span 3 each) below; one full-width tile last. A thin bar (10 to 14px, pill track on Porcelain or Silver, Teal 650 lead) is added only when a figure carries a real comparison (before/after, part of a whole), never as decoration. Collapses to one column under 560px.

### Photo-card / CTA Band (signature)
Teal 950 base, tritone-filtered image cover, a Teal 950 gradient tint (`--tint`) for legibility, white text via the on-dark role flip. Every inner page closes on a CTA band: headline, one sentence, one secondary-on-dark button pointing to Talk to Us.

## Do's and Don'ts

### Do:
- **Do** set every page on Warm Porcelain (#f7f5ef) and every headline in Inter at opsz 32, weight 600, Teal 950.
- **Do** use the semantic roles (`--color-canvas`, `--color-action`, `--color-panel`, `--color-text-muted`, `--color-rule`, `--color-prestige`) rather than raw palette values in components.
- **Do** keep text on Logic Mist panels Graphite or Teal 950.
- **Do** draw structure with 1px Silver hairlines: rule lists, data lists, step rules, dividers.
- **Do** keep one 8px radius for rectangles and pills only for chips, tabs, and badges.
- **Do** hold body copy to the 38rem measure and open Persuade inner pages with breadcrumb, title, lede, and a proof aside (Read pages go title-only).
- **Do** run all photography through the tritone filter inside a photo-card.
- **Do** use the Field Border (#8a9699) and Error (#a3302a) tokens for every form control.

### Don't:
- **Don't** use a serif or a second type family.
- **Don't** spend Executive Brass beyond recognition and prestige marks, or above 5% of a screen, or as text on a light ground.
- **Don't** put Slate text on Logic Mist (4.48:1).
- **Don't** place a small label, kicker, or eyebrow above a heading.
- **Don't** add shadows to cards, panels, or buttons; only floating menus get the float shadow.
- **Don't** build identical icon-card grids or stock photo hero banners.
- **Don't** show photography in natural colour.
