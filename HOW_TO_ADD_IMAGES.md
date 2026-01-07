# How to Add Images to Your Landing Page

## Quick Start

### Step 1: Add Your Images

1. Put your images in the `public/images/` folder
2. Supported formats: `.jpg`, `.png`, `.webp`, `.svg`

Example structure:
```
public/
  └── images/
      ├── hero-screenshot-1.png
      ├── hero-screenshot-2.png
      ├── hero-screenshot-3.png
      ├── logo.png
      └── feature-demo.png
```

### Step 2: Use Images in Components

I've already updated the Hero component to support images. Here's how to add them:

#### Example: Add Images to Hero Video Cards

Open `components/Hero.tsx` and find the VideoCard components (around line 49-66).

**Before:**
```tsx
<VideoCard
  className="absolute top-0 right-16 w-72 h-96 rotate-3 animate-[float_6s_ease-in-out_infinite]"
  brand="AI"
  name="AIWriter Pro"
  stats="142K views • 2d ago"
/>
```

**After (with image):**
```tsx
<VideoCard
  className="absolute top-0 right-16 w-72 h-96 rotate-3 animate-[float_6s_ease-in-out_infinite]"
  brand="AI"
  name="AIWriter Pro"
  stats="142K views • 2d ago"
  imageSrc="/images/hero-screenshot-1.png"
/>
```

Just add the `imageSrc="/images/your-image.png"` prop!

## Adding Images to Other Sections

### 1. Social Proof Logos

Edit `components/SocialProof.tsx`:

```tsx
import Image from "next/image";

<div className="flex items-center gap-4">
  <Image
    src="/images/company-logo.png"
    alt="Company Name"
    width={120}
    height={40}
    className="opacity-60 hover:opacity-100 transition"
  />
</div>
```

### 2. Feature Cards with Images

Edit `components/WhatWeDo.tsx` - add images to the cards:

```tsx
import Image from "next/image";

<div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
  <Image
    src="/images/feature-demo.png"
    alt="Feature demonstration"
    fill
    className="object-cover"
  />
</div>
```

### 3. Background Images

You can also use images as backgrounds in CSS:

In `tailwind.config.ts`, add:
```typescript
backgroundImage: {
  'hero-pattern': "url('/images/pattern.png')",
}
```

Then use it:
```tsx
<div className="bg-hero-pattern">
  {/* content */}
</div>
```

## Image Optimization Tips

### 1. File Size
- Keep images under 500KB for web
- Use tools like TinyPNG or Squoosh to compress

### 2. Dimensions
- Hero images: 1200x800px
- Logo: 200x80px
- Feature cards: 800x600px
- Background patterns: 400x400px (tileable)

### 3. Format
- Use `.webp` for best compression
- Use `.png` for logos/transparency
- Use `.jpg` for photos

## Using External Images (URLs)

If your images are hosted elsewhere (like on a CDN):

1. Update `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-cdn.com',
      },
    ],
  },
}

module.exports = nextConfig
```

2. Use the full URL:
```tsx
<Image
  src="https://your-cdn.com/image.png"
  alt="Description"
  width={500}
  height={300}
/>
```

## Quick Image Adding Workflow

1. **Download/create your image**
2. **Drag it into** `public/images/` folder
3. **Reference it** with `/images/filename.png`
4. **Restart dev server** if images don't show up (Ctrl+C, then `npm run dev`)

## Examples to Copy

### Full-width background image:
```tsx
<section className="relative h-screen">
  <Image
    src="/images/hero-bg.jpg"
    alt="Background"
    fill
    className="object-cover -z-10"
  />
  <div className="relative z-10">
    {/* Your content */}
  </div>
</section>
```

### Rounded avatar/icon:
```tsx
<Image
  src="/images/avatar.png"
  alt="Avatar"
  width={48}
  height={48}
  className="rounded-full"
/>
```

### Responsive image:
```tsx
<div className="relative w-full h-64 md:h-96 lg:h-[500px]">
  <Image
    src="/images/responsive.png"
    alt="Responsive demo"
    fill
    className="object-contain"
  />
</div>
```

## Need Help?

Just ask! Tell me:
- Which section you want to add images to
- What kind of images (screenshots, logos, icons, etc.)
- And I'll update the code for you!
