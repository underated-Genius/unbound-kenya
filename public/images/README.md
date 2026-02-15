# Images Directory

This directory is for static images and assets.

## Current Setup

The project currently uses Unsplash images via URLs for:
- Destination photos
- Regional backgrounds
- Hero backgrounds

## To Add Local Images

1. Place images in this directory
2. Update references in:
   - `src/data/gems.js` for destination images
   - Component files for backgrounds

## Recommended Structure

```
public/images/
├── destinations/
│   ├── ndere-island.jpg
│   ├── chalbi-desert.jpg
│   └── ...
├── regions/
│   ├── coast.jpg
│   ├── rift-valley.jpg
│   └── northern-kenya.jpg
└── icons/
    └── favicon.ico
```

## Optimization

For production:
- Compress images (TinyPNG, Squoosh)
- Use Next.js Image component
- Consider WebP format
- Maximum width: 1920px for backgrounds
- Destination cards: 800px width

---

**Note**: Current Unsplash URLs work for demo purposes but for production, host images locally or use a CDN.
