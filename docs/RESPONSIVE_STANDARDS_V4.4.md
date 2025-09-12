# Responsive Design Standards v4.4+

## Component Extraction Guidelines

### The 2-Repeat Rule
Extract components immediately when a pattern appears twice to prevent consistency debt.

**Examples from Catalyst Events Project**:
```jsx
// After seeing this pattern twice → Extract immediately
// ❌ Repeated pattern
<div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 flex items-center justify-center">
  <IconComponent />
</div>

// ✅ Extracted component
<IconContainer size="md">
  <IconComponent />
</IconContainer>
```

### Standard Responsive Patterns

**Icon Containers**:
```jsx
// Standard responsive icon sizing
w-12 h-12 md:w-16 md:h-16  // Icons scale from mobile to desktop
```

**Typography Scaling**:
```jsx
// Systematic typography scale
text-lg md:text-xl lg:text-2xl    // Body text scaling
text-3xl md:text-4xl lg:text-5xl  // Display text scaling
```

**Spacing Rhythm**:
```jsx
// Standard spacing patterns
p-6 md:p-8 lg:p-12     // Container padding
mb-8 md:mb-12          // Section spacing
mb-8 md:mb-0           // Mobile-specific spacing resets
```

## Mobile UX Checklist

### Sprint Completion Requirements
Every sprint must validate across these breakpoints:

- [ ] **iPhone SE (320px width)** - Minimum compatibility
- [ ] **Standard mobile (375px)** - Primary mobile target
- [ ] **Tablet (768px)** - Responsive transition point
- [ ] **Desktop (1440px)** - Standard desktop
- [ ] **Large desktop (1920px)** - Large screen validation

### Touch Target Standards
- **Minimum size**: 44x44px for all interactive elements
- **Examples**: Buttons, links, form controls, navigation items
- **Validation**: Test on actual mobile devices, not just browser resize

### Layout Requirements
- **Zero horizontal scroll** at any breakpoint
- **Text readable without zoom** on 320px screens
- **Proper mobile top padding** for hero sections
- **Consistent spacing rhythm** using 8px grid system (8px, 16px, 24px, 32px)

## Design System Tokens

### Spacing Scale
```css
/* Base spacing scale (8px grid) */
--space-xs: 8px;   /* 0.5rem */
--space-sm: 16px;  /* 1rem */
--space-md: 24px;  /* 1.5rem */
--space-lg: 32px;  /* 2rem */
--space-xl: 48px;  /* 3rem */
```

### Typography Scale
```css
/* Responsive typography system */
.text-display-1 { font-size: clamp(2rem, 5vw, 3rem); }
.text-headline-1 { font-size: clamp(1.5rem, 4vw, 2rem); }
.text-body-large { font-size: clamp(1rem, 2.5vw, 1.125rem); }
```

### Component Utilities
```css
/* Standard component patterns */
.icon-container-sm { @apply w-8 h-8 md:w-10 md:h-10; }
.icon-container-md { @apply w-12 h-12 md:w-16 md:h-16; }
.icon-container-lg { @apply w-16 h-16 md:w-20 md:h-20; }

.space-section { @apply mb-12 md:mb-16 lg:mb-20; }
.space-component { @apply mb-8 md:mb-10; }
.space-element { @apply mb-4 md:mb-6; }
```

## Quality Gates Integration

### Sprint 2: Navigation/Header Quality
- [ ] Mobile menu functionality
- [ ] Logo/branding responsive sizing
- [ ] Navigation touch targets meet 44px minimum
- [ ] Header collapses appropriately on small screens

### Sprint 4: Content Pages Quality
- [ ] Typography scales properly across breakpoints
- [ ] Images responsive and optimized
- [ ] Content readable without horizontal scroll
- [ ] Spacing rhythm consistent

### Sprint 6: Interactive Elements Quality
- [ ] Forms usable on mobile devices
- [ ] Buttons meet touch target requirements
- [ ] Interactive states work across devices
- [ ] JavaScript functionality responsive-aware

### Sprint 8: Full System Quality
- [ ] Complete cross-device testing
- [ ] Performance validation on mobile networks
- [ ] Accessibility testing across breakpoints
- [ ] Final responsive polish and optimization

## Integration Resilience Planning

### Dependency Monitoring
- **API Version Tracking**: Monitor external API versions for breaking changes
- **Fallback Strategies**: Implement graceful degradation for API failures
- **Change Impact Assessment**: Document how dependency updates affect responsive behavior

### Example Protocols
```json
{
  "dependencies": {
    "notion-api": "^5.0.0",
    "fallback_strategy": "local_content_cache",
    "change_impact": "responsive_layouts_affected"
  }
}
```

## Client UX Feedback Integration

### Why Client Feedback Is Critical
Client UX feedback often catches responsive issues that developer QA misses because:
- Clients test on their actual devices (not just browser resize)
- Clients use the site naturally (not systematically testing features)  
- Clients notice visual inconsistencies across pages
- Clients identify touch target problems in real usage

### Feedback Integration Protocol
1. **Collect Specific Feedback**: "Icons look squashed on mobile" → Systematic fix needed
2. **Implement System-Wide**: Don't fix just the reported instance, fix the pattern
3. **Document Pattern**: Add to component library to prevent future occurrences
4. **Test Across Site**: Validate fix doesn't break other responsive layouts

## Common Responsive Patterns

### Hero Sections
```jsx
// Standard hero responsive pattern
<section className="hero-responsive px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
  <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8">
    {title}
  </h1>
  <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-10">
    {subtitle}
  </p>
</section>
```

### Back Navigation Links
```jsx
// Standard back link with proper mobile spacing
<Link 
  href="/blog" 
  className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 md:mb-12"
>
  <ArrowLeft className="w-4 h-4 mr-2" />
  Back to Insights
</Link>
```

### Card Grids
```jsx
// Responsive card grid pattern
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
  {cards.map(card => (
    <Card key={card.id} className="p-6 md:p-8" />
  ))}
</div>
```

---

**Status**: Production-ready responsive design standards for Enhanced Geek Projects Methodology v4.4+  
**Implementation**: Apply these standards starting Sprint 0 Foundation Excellence phase