# Importing Blog Posts into Sanity

This guide explains how to import the blog posts from the static Blog page into Sanity.

## Prerequisites

1. Make sure you have the Sanity CLI installed:
   ```bash
   npm install -g @sanity/cli
   ```

2. The Sanity token with write access is already included in the script, so you don't need to set it up separately.

## Steps to Import Blog Posts

1. Navigate to the studio directory:
   ```bash
   cd studio
   ```

2. Install the UUID package (needed for the import script):
   ```bash
   npm install uuid
   ```

3. Run the import script:
   ```bash
   sanity exec scripts/import-blog-posts.js --with-user-token
   ```

5. The script will:
   - Create the categories (Industry Trends, Sustainability, Innovation, Manufacturing)
   - Create the blog posts with their content
   - Print messages about the images that need to be manually uploaded

## Manual Image Upload

The script doesn't automatically download and upload images to Sanity. You'll need to:

1. Download the images from the URLs printed in the console
2. Upload them to Sanity Studio by editing each post
3. Assign the uploaded image to the post's mainImage field

## Viewing the Sanity-Powered Blog

Once the import is complete and you've added the images, you can view the Sanity-powered blog at `http://localhost:5173/sanity-blog`.

## Customizing the Blog

You can customize the blog by:

1. Editing the posts in Sanity Studio
2. Modifying the `SanityBlog.tsx` component
3. Adding more features like pagination, filtering by category, etc.

## Troubleshooting

If you encounter any issues during the import:

1. Check the console for error messages
2. Verify that the project ID and dataset in the script match your Sanity project
3. Try running the script with the `--debug` flag for more detailed logs:
   ```bash
   sanity exec scripts/import-blog-posts.js --with-user-token --debug
   ```
