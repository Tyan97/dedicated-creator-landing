# Use Case Studio - Landing Page

A modern Next.js landing page for Use Case Studio with a premium SaaS design aesthetic.

## Design Features

- **Premium SaaS Aesthetic**: Clean, founder-trust focused design with electric blue accent
- **Modern Typography**: Inter font with strong hierarchy (H1 56-64px, H2 32-40px, body 16-18px)
- **Color Palette**: Off-white background (#FAFAFA) with electric blue accent (#0EA5E9)
- **Rounded Corners**: Consistent 16-24px border radius throughout
- **Micro-animations**: Hover lift effects, floating cards, smooth transitions
- **Responsive**: Mobile-first design that works on all screen sizes

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

Make sure you have Node.js installed (v18 or higher recommended).

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Inter font
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── Navigation.tsx      # Sticky navigation bar
│   ├── Hero.tsx           # Hero section with video cards
│   ├── SocialProof.tsx    # Trust indicators
│   ├── WhatWeDo.tsx       # Service cards
│   ├── Formats.tsx        # Video format showcase
│   ├── HowItWorks.tsx     # Process steps
│   ├── Pricing.tsx        # Pricing packages
│   ├── FitCheck.tsx       # Good fit / not fit section
│   ├── FAQ.tsx            # FAQ accordion
│   ├── FinalCTA.tsx       # Final call-to-action
│   └── Footer.tsx         # Footer
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies

```

## Key Sections

1. **Hero**: Large headline with floating video card mockups
2. **Social Proof**: Trust badges and key differentiators
3. **What We Do**: Two main service offerings with hover effects
4. **Formats**: Dark section showcasing video scenario formats
5. **How It Works**: 4-step process with numbered cards
6. **Pricing**: Two-tier pricing with add-ons
7. **Fit Check**: Good fit vs. not fit comparison
8. **FAQ**: Accordion-style frequently asked questions
9. **Final CTA**: Dark section with prominent call-to-action

## Customization

### Colors

Edit the accent color in `tailwind.config.ts`:

```typescript
colors: {
  accent: "#0EA5E9", // Change to your brand color
}
```

### Content

All content is component-based and easy to edit. Each component file in `/components` contains its own content that can be modified directly.

### Typography

The project uses Inter font from Google Fonts. To change fonts, edit `app/layout.tsx`.

## Build for Production

```bash
npm run build
npm start
```

## License

Private project for Use Case Studio.
