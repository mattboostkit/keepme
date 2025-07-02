# Sanity Integration Plan for KeepMe Website

## Overview
This document outlines a comprehensive plan to fully integrate all pages with Sanity CMS, ensuring consistent content management across the entire website.

## Current Integration Status

### ✅ Fully Integrated Pages
1. **Creative** - Complete Sanity integration with `creativePage` schema
2. **Blog** - Full integration with posts, categories, and authors

### ⚠️ Partially Integrated Pages
1. **Home** - Uses Sanity for some components but hero is hardcoded
2. **Services** - Only images managed through Sanity
3. **Portfolio** - Portfolio items and brands in Sanity, but hero is hardcoded

### ❌ Not Integrated Pages
1. **About** - Almost entirely hardcoded
2. **Glass** - Completely hardcoded
3. **Tools** - Completely hardcoded

## Proposed Schema Structure

### 1. **Glass Page Schema** (Priority: HIGH)
Create `glassPage` schema with:
```
- heroSection
  - title
  - subtitle
  - description
  - bulletPoints[]
  - backgroundImage
  
- glassTypes[]
  - title
  - description
  - features[]
  - image
  - displayOrder
  
- manufacturingProcess
  - title
  - steps[]
    - year
    - title
    - description
    - icon
    
- customSolutions
  - title
  - description
  - features[]
  - ctaText
  - ctaLink
  
- seoMetadata
```

### 2. **About Page Schema** (Priority: HIGH)
Create `aboutPage` schema with:
```
- heroSection
  - title
  - subtitle
  - description
  - image
  
- missionSection
  - title
  - content
  
- values[]
  - title
  - description
  - icon
  - displayOrder
  
- companyTimeline[]
  - year
  - title
  - description
  - displayOrder
  
- glassManufacturerSection
  - title
  - description
  - features[]
  
- ctaSection
  - title
  - description
  - buttonText
  - buttonLink
  
- seoMetadata
```

### 3. **Tools Page Schema** (Priority: MEDIUM)
Create `toolsPage` schema with:
```
- heroSection
  - title
  - description
  
- tools[]
  - title
  - description
  - features[]
  - ctaText
  - ctaLink
  - image
  - isExternal
  - displayOrder
  
- seoMetadata
```

### 4. **Services Page Enhancement** (Priority: MEDIUM)
Enhance existing services with:
```
- servicesPage schema
  - heroSection
    - title
    - subtitle
    - description
    
- serviceDetails[] (enhance existing serviceImage)
  - title
  - slug
  - shortDescription
  - fullDescription
  - features[]
  - image
  - displayOrder
  
- faqSection
  - title
  - faqs[]
    - question
    - answer
    - displayOrder
    
- ctaSection
  - title
  - description
  - buttonText
  - buttonLink
  
- seoMetadata
```

### 5. **Home Page Enhancement** (Priority: MEDIUM)
Create `homePage` schema with:
```
- heroSection
  - backgroundImage
  - logoImage
  - showLogo (boolean)
  
- mainSection
  - title
  - subtitle
  - description
  - ctaText
  - ctaLink
  
- seoMetadata
```

### 6. **Portfolio Page Enhancement** (Priority: LOW)
Create `portfolioPage` schema with:
```
- heroSection
  - title
  - subtitle
  
- statsSection
  - clientCount
  - badgeText
  
- seoMetadata
```

### 7. **Global Schemas** (Priority: MEDIUM)
Create reusable schemas:

#### `faqItem`
```
- question
- answer
- category
- displayOrder
```

#### `ctaSection`
```
- title
- description
- buttonText
- buttonLink
- style (enum: primary, secondary)
```

#### `seoSettings`
```
- title
- description
- ogImage
- keywords[]
```

## Implementation Plan

### Phase 1: Foundation (Week 1)
1. Create global schemas (faqItem, ctaSection, seoSettings)
2. Create Glass page schema and migrate content
3. Create About page schema and migrate content

### Phase 2: Enhancement (Week 2)
1. Create Tools page schema and migrate content
2. Enhance Services page with full content management
3. Create Home page schema for hero management

### Phase 3: Polish (Week 3)
1. Create Portfolio page schema
2. Add SEO metadata to all pages
3. Create content migration scripts
4. Test and refine all integrations

## Benefits of Full Integration

1. **Content Management**: All content editable through Sanity Studio
2. **Consistency**: Reusable components and consistent data structure
3. **SEO Control**: Manage meta tags and SEO settings per page
4. **Multilingual Ready**: Easy to add language variants later
5. **Version Control**: Track content changes over time
6. **Preview**: Live preview of changes before publishing

## Migration Strategy

1. Create schemas in development
2. Write migration scripts to populate initial content
3. Test thoroughly in staging
4. Deploy schemas to production
5. Run migration scripts in production
6. Update page components to use Sanity data
7. Remove hardcoded content

## Success Metrics

- 100% of page content manageable through Sanity
- Zero hardcoded text content in components
- All images served through Sanity CDN
- SEO metadata controlled through CMS
- Content editors can update any page without developer help