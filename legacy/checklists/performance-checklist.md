# Performance Checklist

## Core Web Vitals
- [ ] **Largest Contentful Paint (LCP)**: < 2.5 seconds
- [ ] **First Input Delay (FID)**: < 100 milliseconds
- [ ] **Cumulative Layout Shift (CLS)**: < 0.1
- [ ] **First Contentful Paint (FCP)**: < 1.8 seconds
- [ ] **Time to Interactive (TTI)**: < 5 seconds

## Lighthouse Scores
- [ ] **Performance**: > 90
- [ ] **Accessibility**: > 90
- [ ] **Best Practices**: > 90
- [ ] **SEO**: > 90
- [ ] **PWA** (if applicable): > 90

## Loading Performance
- [ ] Page load time < 3 seconds (initial load)
- [ ] Subsequent page loads < 1 second
- [ ] Time to First Byte (TTFB) < 600ms
- [ ] Critical resources prioritised
- [ ] Non-critical resources deferred
- [ ] Proper loading states implemented

## Image Optimisation
- [ ] Images in modern formats (WebP, AVIF with fallbacks)
- [ ] Images properly sized for different viewports
- [ ] Lazy loading implemented for below-the-fold images
- [ ] Responsive images with srcset
- [ ] Image compression optimised
- [ ] No oversized images served

## JavaScript & CSS
- [ ] Code splitting implemented
- [ ] Tree shaking enabled
- [ ] Dead code eliminated
- [ ] CSS minified and optimised
- [ ] JavaScript minified and optimised
- [ ] Critical CSS inlined
- [ ] Non-critical CSS loaded asynchronously

## Network Optimisation
- [ ] HTTP/2 or HTTP/3 enabled
- [ ] Gzip/Brotli compression enabled
- [ ] CDN configured (Vercel Edge Network)
- [ ] Static assets cached properly
- [ ] API responses cached where appropriate
- [ ] DNS lookups minimised

## Bundle Analysis
- [ ] Bundle size analysed and optimised
- [ ] No unnecessary dependencies
- [ ] Large dependencies loaded asynchronously
- [ ] Bundle splitting optimised
- [ ] Vendor chunks properly separated
- [ ] Dynamic imports used where beneficial

## Runtime Performance
- [ ] No memory leaks identified
- [ ] Event listeners properly cleaned up
- [ ] DOM manipulations optimised
- [ ] Animations use transform/opacity
- [ ] Long tasks avoided or split
- [ ] Service worker implemented (if beneficial)

## Mobile Performance
- [ ] Mobile Lighthouse score > 90
- [ ] Touch targets minimum 44px
- [ ] Viewport properly configured
- [ ] Mobile-specific optimisations implemented
- [ ] Offline functionality (if applicable)
- [ ] App-like experience on mobile

## Database & API Performance
- [ ] Notion API calls optimised
- [ ] Database queries efficient
- [ ] Caching strategy implemented
- [ ] Rate limiting considerations
- [ ] Error handling doesn't impact performance
- [ ] Background tasks properly managed

## Monitoring & Testing
- [ ] Performance monitoring configured
- [ ] Real User Metrics (RUM) tracked
- [ ] Performance budgets defined
- [ ] Performance regression tests
- [ ] Regular performance audits scheduled
- [ ] Performance alerts configured