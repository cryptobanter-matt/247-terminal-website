# 247 Terminal Website

Marketing website for 247 Terminal - a professional crypto news trading platform.

## Tech Stack

- **Astro** - Static site generation
- **Preact** - Interactive components
- **TailwindCSS v4** - Styling
- **Docker + Nginx** - Production deployment

## Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up -d --build

# Site available at http://localhost:3080
```

For Portainer: Use the `docker-compose.yml` file directly.

## Project Structure

```
src/
├── components/
│   ├── interactive/   # Preact components (MobileMenu, LogoCarousel)
│   ├── layout/        # Header, Footer
│   └── sections/      # Hero, Comparison, Features, Pricing
├── layouts/           # BaseLayout
├── pages/             # index, terms
└── styles/            # global.css
```

## Analytics

- Google Tag Manager: `GTM-MKRKVXRZ`
- Microsoft Clarity: `ugbk7jisfm`
