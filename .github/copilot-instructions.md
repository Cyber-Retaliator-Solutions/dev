# AI Agent Instructions for Cyber Retaliator Portal

## Project Overview
This is a lightweight, static customer solutions portal designed for GitHub Pages deployment. The site showcases Cyber Retaliator's product catalog with three core pillars:
1. **Accessibility**: WCAG AA compliance with semantic HTML and ARIA
2. **Performance**: Sub-500KB bundle with system fonts
3. **Brand Identity**: Sophisticated dark theme with cyber-security aesthetics

## Architecture & Structure
- **Static Site Architecture**: Pure HTML + CSS + vanilla JavaScript
  - Zero dependencies, no build step required
  - High performance through minimal asset sizes
  - CDN-friendly with static assets
- **Key Files**:
  ```
  /
  ├─ index.html      # Main entry with JSON-LD schema
  ├─ app.js          # Core interactivity
  ├─ styles.css      # Responsive theming
  ├─ 404.html        # Error page
  ├─ CNAME          # GitHub Pages config
  └─ assets/        # Static resources
     └─ logo.svg    # Brand assets
  ```

## Development Patterns

### CSS Architecture
```css
/* Theme System: Custom properties in :root */
:root {
  /* Base background - dark navy (10, 15, 26) */
  --bg: rgb(10, 15, 26);
  /* Card/panel backgrounds - darker blue (15, 23, 38) */
  --panel: rgb(15, 23, 38);
  /* Primary text - ice white (230, 238, 252) */
  --txt: rgb(230, 238, 252);
  /* Secondary text - muted blue (142, 162, 198) */
  --muted: rgb(142, 162, 198);
  /* Brand blue - electric blue (79, 182, 255) */
  --primary: rgb(79, 182, 255);
  /* Success/action - matrix green (108, 255, 177) */
  --accent: rgb(108, 255, 177);
  /* Error states - soft red (255, 111, 111) */
  --danger: rgb(255, 111, 111);
}
```

/* Layout Patterns */
.container { max-width: 1200px; margin: 0 auto }
.grid { display: grid; gap: 1rem }
.grid.cols-3 { grid-template-columns: repeat(3, 1fr) }

/* Component Examples */
.card {
  background: linear-gradient(180deg, var(--panel), var(--panel-2));
  border: 1px solid rgb(26, 39, 68);
  border-radius: 16px;
}

/* Responsive Breakpoints */
@media (max-width: 980px) { /* Tablet styles */ }
@media (max-width: 640px) { /* Mobile styles */ }
```

### JavaScript Patterns
```javascript
// Interactive Component Pattern
const initComponent = (id, config = {}) => {
  const element = document.getElementById(id);
  if (!element) return null;
  
  const { onToggle } = config;
  
  element.addEventListener('click', () => {
    const newState = element.classList.toggle('active');
    element.setAttribute('aria-expanded', String(newState));
    onToggle?.(newState);
  });
  
  return element;
};

// Usage Example (sidebar)
initComponent('menuBtn', {
  onToggle: (isOpen) => {
    sidebar.classList.toggle('open');
    sidebar.setAttribute('aria-hidden', String(!isOpen));
  }
});
```

### Form Implementation
```html
<!-- Form Pattern with Netlify Integration -->
<form name="lead" method="post" data-netlify="true">
  <input required name="name" placeholder="Your name"/>
  <input required type="email" name="email"/>
  <select name="interest">
    <option>VAPT</option>
    <option>IBM Technical Training</option>
  </select>
  <button class="btn primary">Submit</button>
</form>
```

### Accessibility Implementation
- **ARIA Patterns**:
  ```html
  <!-- Navigation Pattern -->
  <aside class="sidebar" id="sidebar" 
         aria-label="Solutions sidebar" 
         aria-hidden="true">
    <nav>
      <h3 class="side-title">Solutions</h3>
      <ul class="side-list">...</ul>
    </nav>
  </aside>

  <!-- Form Input Pattern -->
  <input class="card" 
         required 
         aria-label="Name" 
         name="name" 
         placeholder="Your name"/>
  ```
- **Focus Management**:
  ```css
  /* Focus State Pattern */
  :focus { outline: var(--ring) }
  .btn:focus { box-shadow: var(--ring), var(--shadow) }
  ```

## Development Workflow

### 1. Local Development
```bash
# Clone repository
gh repo clone Cyber-Retaliator-Solutions/dev

# No build step needed - open directly
start index.html
```

### 2. Testing Checklist
- **Accessibility**:
  - [ ] ARIA attributes properly toggled
  - [ ] Focus states visible
  - [ ] Color contrast meets WCAG AA
  - [ ] Keyboard navigation working
- **Responsive**:
  - [ ] Mobile (320px): Stacked layout
  - [ ] Tablet (640px): 2-column grid
  - [ ] Desktop (980px+): Full layout
- **Performance**:
  - [ ] Assets optimized
  - [ ] No render-blocking resources
  - [ ] System fonts loading

### 3. Deployment Process
```bash
# Push to main branch
git push origin main

# Verify GitHub Pages settings
# Settings → Pages → Branch: main, Folder: /root
```

## Troubleshooting Guide

### Common Issues
1. **Sidebar Toggle Not Working**
   ```javascript
   // Check element existence
   console.log(document.getElementById('sidebar'));
   console.log(document.getElementById('menuBtn'));
   ```

2. **Form Submission Fails**
   - Verify `data-netlify="true"` attribute
   - Check all required fields have values
   - Confirm form `name` attribute is set

3. **Layout Breaks**
   - Inspect grid classes on parent
   - Check viewport meta tag
   - Verify media query breakpoints

### Performance Optimization
1. **Image Optimization**
   ```bash
   # SVG optimization
   svgo assets/logo.svg

   # Raster image compression
   squoosh-cli --mozjpeg auto assets/*.jpg
   ```

2. **CSS Optimization**
   - Group media queries
   - Use shorthand properties
   - Leverage CSS custom properties

## Integration Points

### 1. GitHub Pages
- **DNS Configuration**:
  ```
  CNAME cyber.retaliator.solutions → username.github.io
  ```
- **SSL Requirements**:
  - Allow 24h for certificate provisioning
  - Verify HTTPS redirect is active

### 2. Netlify Forms
- **Form Schema**:
  ```html
  <!-- Required Attributes -->
  <form name="lead" 
        method="post" 
        data-netlify="true">
  ```
- **Response Handling**:
  - Submissions in Netlify admin
  - Email notifications configurable
  - Spam filtering included

### 3. SEO & Metadata
```html
<!-- Required Meta Tags -->
<meta name="description" content="..."/>
<meta property="og:type" content="website"/>
<link rel="canonical" href="https://cyber.retaliator.solutions"/>

<!-- JSON-LD Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Cyber Retaliator Solutions"
}
</script>
```

## Project-Specific Requirements

### Performance Budget
- **Target Metrics**:
  - First Paint: < 1s
  - Total Bundle: < 500KB
  - Image Weight: < 200KB
  - No external fonts

### Design System
- **Colors**:
  - Background: Dark Space (RGB: 10, 15, 26)
  - Text: Ice White (RGB: 230, 238, 252)
  - Primary: Cyber Blue (RGB: 79, 182, 255)
  - Accent: Matrix Green (RGB: 108, 255, 177)
  
- **Typography**:
  ```css
  /* System Font Stack */
  font-family: ui-sans-serif, system-ui, -apple-system, 
              Segoe UI, Roboto, Inter, Helvetica;
  ```

- **Spacing**:
  - Base Unit: 4px
  - Container Max: 1200px
  - Grid Gap: 1rem (16px)

### Browser Support
- **Modern Browsers Only**:
  - Chrome/Edge 90+
  - Firefox 90+
  - Safari 14+
  - No IE11 support required

## Security Considerations
1. **Form Protection**:
   - Netlify honeypot enabled
   - reCAPTCHA optional
   - Rate limiting active

2. **Asset Security**:
   - SVG sanitization required
   - CSP headers recommended
   - CORS policy: same-origin