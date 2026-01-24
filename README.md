# Portfolio Website

A modern, responsive portfolio website showcasing professional experience with a clean, dark theme design. Built with React and TypeScript featuring smooth navigation and mobile-responsive layouts.

## Features

- **Dark theme design** with professional aesthetics
- **Section-based navigation** with smooth scrolling
- **Responsive layout** that works on all devices
- **Work experience timeline** with tech stack highlights
- **Contact integration** with social media links
- **Mobile-optimized** with responsive layouts
- **PWA support** with web app manifest
- **SEO optimized** with structured data and meta tags

## Technologies

- **Frontend**: Preact, TypeScript
- **Build**: Vite with @preact/preset-vite
- **Styling**: Modern CSS3 with grid layouts and animations
- **Optimization**: Code splitting, tree shaking, terser minification, inline CSS
- **SEO**: Open Graph, Twitter Cards, structured data schema, build-time sitemap
- **Performance**: ~11KB gzipped JS bundle

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx         # Main hero section with introduction
│   ├── Work.tsx         # Work experience timeline
│   ├── Contact.tsx      # Contact information and links
│   └── LandingPage.tsx  # Main component with navigation
├── data/
│   └── work.ts          # Work experience data
├── App.tsx              # Application entry point
├── main.tsx             # DOM mounting
└── index.css            # Global styles and responsive design

public/
├── _headers             # Security and caching headers
├── manifest.json        # PWA web app manifest
├── robots.txt           # Search engine directives
├── favicon.png          # Site icon
├── profile.webp         # Profile image for social sharing
└── profile-sm.png       # Optimised avatar image
```

## Architecture

- **Component-based** Preact architecture with TypeScript
- **Section-based navigation** with smooth scrolling and active state detection
- **Responsive design** with adaptive layouts
- **Performance-optimized** with code splitting, inline CSS, and optimised images
- **SEO-friendly** with structured data, Open Graph, Twitter Cards, and build-time sitemap
- **Accessible** with proper heading hierarchy, ARIA labels, and reduced-motion support
- **PWA-ready** with web app manifest for installability

## License

MIT
