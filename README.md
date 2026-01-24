# Portfolio Website

A modern, responsive portfolio website showcasing professional experience with a clean, dark theme design. Built with React and TypeScript featuring smooth navigation and mobile-responsive layouts.

## Features

- **Dark theme design** with professional aesthetics
- **Section-based navigation** with smooth scrolling
- **Responsive layout** that works on all devices
- **Work experience timeline** with tech stack highlights
- **Contact integration** with social media links
- **Mobile-optimized** with adaptive navigation
- **PWA support** with web app manifest
- **SEO optimized** with structured data and meta tags

## Technologies

- **Frontend**: React 19, TypeScript
- **Build**: Vite with Preact compatibility layer
- **Styling**: Modern CSS3 with grid layouts and animations
- **Optimization**: Code splitting, tree shaking, terser minification
- **SEO**: Open Graph, Twitter Cards, structured data schema
- **Performance**: 31KB bundle size, aggressive caching headers

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx         # Main hero section with introduction
│   ├── Work.tsx         # Work experience timeline
│   ├── Contact.tsx      # Contact information and links
│   └── LandingPage.tsx  # Main component with navigation
├── App.tsx              # Application entry point
├── main.tsx             # React DOM mounting
└── index.css            # Global styles and responsive design

public/
├── _headers             # Security and caching headers
├── manifest.json        # PWA web app manifest
├── robots.txt           # Search engine directives
├── sitemap.xml          # SEO sitemap
├── favicon.svg          # Site icon
└── profile.webp         # Profile image for social sharing
```

## Architecture

- **Component-based** React architecture with TypeScript
- **Section-based navigation** with smooth scrolling and active state detection
- **Responsive design** with mobile-first approach and adaptive layouts
- **Performance-optimized** with code splitting and aggressive caching
- **SEO-friendly** with structured data, Open Graph, and Twitter Cards
- **PWA-ready** with web app manifest for installability

## License

MIT
