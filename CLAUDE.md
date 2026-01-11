# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Resume Builder that generates both a static website and a PDF resume from a single YAML data source. Built with Astro, React, and TailwindCSS; uses Puppeteer to export PDF from the rendered site.

## Commands

```bash
npm run dev          # Start dev server at localhost:5173
npm run build        # Build site AND generate PDF (runs astro:build + puppeteer export)
npm run astro:build  # Build static site only (no PDF)
npm run preview      # Preview built site
npm run lint         # ESLint with TypeScript

# Testing
npm run test:integration   # Playwright integration tests
npm run test:screenshots   # Playwright visual regression tests
```

## Architecture

### Data Flow
1. Resume data lives in `resume/resume.yaml` (extended JSONResume format)
2. Zod schema validates and types the data (`src/schema/resume.ts`)
3. YAML is imported directly into Astro via `vite-plugin-yaml`
4. Jobs are filtered by `disposition` field into page groups: `current`, `page1`, `page2`, `page3`
5. PDF export: `npm run build` starts preview server, Puppeteer navigates to it, generates PDF to `dist/`

### Key Files
- `resume/resume.yaml` - All resume content; edit here to update resume
- `src/schema/resume.ts` - Zod schema defining `Resume` and `ProcessedResume` types
- `src/pages/index.astro` - Main page; parses YAML, filters work by disposition, renders pages
- `src/export.js` - Puppeteer script that generates PDF and sets PDF metadata
- `tailwind.config.mjs` - Custom colors (`smo-grey`, `smo-blue`, `smo-yellow`) and typography theme

### Page Components
Resume is paginated for print. Components in `src/components/`:
- `Page0.tsx` - First page: header, contact info, skills, languages, current positions
- `Page1.tsx`, `Page2.tsx`, `Page3.tsx` - Additional work history pages
- `Job.tsx` - Individual job entry with markdown support for summary/highlights

### Resume YAML Structure
Jobs have a `disposition` field that determines which page they appear on:
- `current` - Page 0 (featured positions)
- `page1`, `page2`, `page3` - Subsequent pages
- `obsolete` - Hidden from display

## Conventions

- Commits follow Conventional Commits format (feat/fix/chore)
- Release management via release-please (auto-generates CHANGELOG.md)
- Dark mode supported via TailwindCSS `dark:` variants (uses `prefers-color-scheme`)
- Print styles use `print:` variants for PDF generation
