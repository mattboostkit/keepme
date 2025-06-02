# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript web application for Keepme, using Vite as the build tool and Sanity CMS for content management. The project uses Tailwind CSS for styling and is deployed on Netlify.

## Essential Commands

```bash
# Development
npm run dev          # Start development server (port 5173)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Sanity Studio (CMS)
cd studio
npm run dev          # Start Sanity Studio (port 3333)
npm run build        # Build Studio for deployment
npm run deploy       # Deploy Studio to Sanity
```

## Architecture Overview

### Frontend Structure
- **Pages**: Located in `src/pages/` - Each page is a React component
- **Components**: Reusable UI components in `src/components/`
- **UI Components**: Design system components in `src/components/ui/`
- **Routing**: React Router with routes defined in `App.tsx`
- **Path Alias**: `@/` maps to `./src/` directory

### Sanity CMS Integration
The project uses Sanity as a headless CMS with the following key patterns:

1. **Client Configuration**: `src/lib/sanity.ts`
   - Project ID: `tyzs5imn`
   - Dataset: `production`
   - Image CDN with automatic WebP optimization

2. **Data Fetching Hooks**: `src/lib/useSanity.ts`
   ```typescript
   // Fetch documents by type
   const { data, loading, error } = useSanityDocuments('post');
   
   // Fetch by slug
   const { data } = useSanityDocumentBySlug('service', 'fragrance-creation');
   
   // Custom GROQ query
   const { data } = useSanityQuery(`*[_type == "post" && featured == true]`);
   ```

3. **Content Types**: Defined in `studio/schemaTypes/`
   - post, service, portfolioBrand, video, gallery
   - teamMember, testimonial, category, author
   - logo, serviceImage, aboutSection, heroSection

### Key Technical Details

1. **Image Handling**: Use `urlFor()` from `src/lib/sanity.ts` for optimized images
2. **Portable Text**: Custom components in `src/components/PortableTextComponents.tsx`
3. **Type Safety**: TypeScript interfaces should match Sanity schemas
4. **Client Components**: Several use Flickity carousel (jQuery-based)

### Deployment
- Frontend deploys automatically to Netlify on push to main
- Sanity Studio deployed separately using `npm run deploy` from studio directory
- Environment variables not required (public Sanity config)

## Development Workflow

1. **Adding New Pages**: Create component in `src/pages/`, add route in `App.tsx`
2. **Sanity Content**: 
   - Define schema in `studio/schemaTypes/`
   - Run studio locally to test
   - Use appropriate hook in frontend to fetch data
3. **Styling**: Use Tailwind CSS classes, custom CSS in `src/index.css`
4. **Components**: Follow existing patterns in `src/components/`