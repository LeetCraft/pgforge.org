# PgForge Design System 2.0

## Philosophy

**Modern. Minimal. Fast.**

pgForge's design is inspired by Vercel, Linear, and Bun—companies known for exceptional UI/UX. Every pixel serves a purpose. No decoration without function.

---

## Typography

### Font Family
**Geist Sans & Geist Mono** by Vercel

```css
--font-sans: 'Geist Sans', system-ui, sans-serif;
--font-mono: 'Geist Mono', monospace;
```

**Why Geist?**
- Perfect screen rendering at all sizes
- Modern, clean aesthetic  
- Excellent readability
- Professional appearance
- Optimized kerning and line-height

---

## Color Palette

### Core Colors

```css
/* Backgrounds */
--white: #ffffff        /* Main background */
--slate-50: #f8fafc     /* Subtle backgrounds */

/* Text */
--slate-950: #020617    /* Headlines */
--slate-700: #334155    /* Body text */
--slate-600: #475569    /* Secondary text */

/* Borders */
--slate-200: #e2e8f0    /* Default borders */

/* Accent */
--blue-500: #3b82f6     /* Primary actions */
```

---

## Components

### Header
- Fixed top with backdrop-blur
- Logo: 32px with rounded corners
- Links: Clean, minimal hover states

### Buttons
- Primary: `bg-slate-950 text-white`
- Rounded: `rounded-lg`
- Padding: `px-6 py-3`

### Cards
- Border: `border-2 border-slate-100`
- Rounded: `rounded-xl`
- Padding: `p-8`

---

**Remember**: Less is more. Every element should have a purpose.
