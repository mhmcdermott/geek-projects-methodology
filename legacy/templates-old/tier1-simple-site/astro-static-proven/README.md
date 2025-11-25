# Tier 1 Simple Site Starter

## Enhanced Geek Projects Methodology v4.1+ - Tier 1 Template

Professional static site template built with Astro and Tailwind CSS. Perfect for business websites, portfolios, and marketing sites.

### Technology Stack
- **Framework**: Astro 5.1.1 (Static Site Generator)
- **Styling**: Tailwind CSS 3.4.17
- **Language**: TypeScript 5.7.3
- **Deployment**: Static hosting (Vercel, Netlify, etc.)

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── Header.astro    # Site navigation
│   └── Footer.astro    # Site footer
├── layouts/            # Page layout templates
│   └── Layout.astro    # Base HTML layout
├── pages/              # File-based routing
│   ├── index.astro     # Homepage
│   └── contact.astro   # Contact page
└── styles/             # Global styles (if needed)
```

### Quick Start

1. **Copy this template to your project directory**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start development server**:
   ```bash
   npm run dev
   ```
4. **Customize content**:
   - Update company name and branding in components
   - Modify colors in `tailwind.config.mjs`
   - Add your content to pages
   - Replace placeholder contact information

### Customization Guide

#### Brand Colors
Edit `tailwind.config.mjs`:
```js
colors: {
  brand: {
    50: '#your-light-color',
    500: '#your-main-color',
    900: '#your-dark-color',
  }
}
```

#### Content Updates
- **Header**: Update logo and navigation in `src/components/Header.astro`
- **Footer**: Update company info in `src/components/Footer.astro`
- **Homepage**: Customize hero and value props in `src/pages/index.astro`
- **Contact**: Update contact info in `src/pages/contact.astro`

### Features Included
- ✅ Responsive mobile-first design
- ✅ Professional homepage with hero section
- ✅ Contact page with form
- ✅ SEO-optimized meta tags
- ✅ Accessibility compliant (WCAG 2.1 AA)
- ✅ Fast loading performance
- ✅ Type-safe TypeScript
- ✅ Tailwind CSS for styling

### Performance
- **Build time**: < 10 seconds
- **Page load**: < 1 second
- **Bundle size**: < 100KB
- **Lighthouse**: 100/100/100/100

### Deployment
```bash
npm run build
```
Deploy the `dist/` folder to any static hosting service.

### Need More Features?
This is a Tier 1 template. For more complex needs:
- **Tier 2**: Interactive features, authentication → Use Next.js template
- **Tier 3**: Enterprise SaaS features → Use Next.js + Prisma template

---

Built with Enhanced Geek Projects Methodology v4.1+ for reliable, professional results with business intelligence tracking.