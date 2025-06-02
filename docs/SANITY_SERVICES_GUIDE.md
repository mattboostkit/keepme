# Guide to Adding Service Images in Sanity

This guide will help you upload and manage service images for your KeepMe website.

## Accessing Sanity Studio

1. Start Sanity Studio locally:
   ```bash
   cd studio
   npm run dev
   ```

2. Open your browser and navigate to: http://localhost:5174/

## Creating Service Entries

### Step 1: Create a New Service

1. In the Sanity Studio sidebar, click on "Service"
2. Click the "Create new Service" button
3. Fill in the following fields:

   - **Title**: Name of the service (e.g., "Fragrance Creation")
   - **Slug**: This will auto-generate based on the title, but you can customize it
   - **Icon Name**: Enter the exact name of the Lucide icon to use:
     - Droplets (for Fragrance Creation)
     - GlassWater (for Fragrance Componentry)
     - Palette (for Cosmetic Componentry)
     - Home (for Home Fragrance)
     - Package (for Secondary Packaging)
     - Gift (for Gifts With Purchase)
     - Truck (for Delivery & Logistics)
   
   - **Service Image**: Click "Upload" to add your service image
     - After uploading, click on the image to add alt text
   
   - **Short Description**: Write a brief description (1-2 sentences) for the service card
   
   - **Full Description**: Add a more detailed description using the rich text editor
   
   - **Display Order**: Enter a number to control the order (lower numbers appear first)
     - Recommended order:
       1. Fragrance Creation
       2. Fragrance Componentry
       3. Cosmetic Componentry
       4. Home Fragrance
       5. Secondary Packaging
       6. Gifts With Purchase
       7. Delivery & Logistics

4. Click "Publish" to save the service

### Step 2: Repeat for All Services

Create entries for all seven services following the same process.

## Image Guidelines

For best results, follow these guidelines for service images:

- **Dimensions**: 600×400 pixels (will be displayed at 300×200)
- **Format**: JPG or WebP for photos, PNG for graphics with transparency
- **File size**: Keep under 200KB for optimal performance
- **Style**: Use consistent, high-quality images that represent each service
- **Alt text**: Always provide descriptive alt text for accessibility

## Updating Existing Services

To update an existing service:

1. Click on the service in the list
2. Make your changes
3. Click "Publish" to save your changes

## Deployment Considerations

When deploying to https://keep-me-bolt.windsurf.build/:

1. Make sure all services are published in Sanity
2. Verify that the CORS settings include your deployment URL
3. Check that the Sanity client in your code is configured for production

## Troubleshooting

If images don't appear on your site:

1. Check the browser console for errors
2. Verify that the service has been published in Sanity
3. Make sure the image was uploaded successfully
4. Check that the Sanity client is properly configured
