# Favicon Directory

This directory is for storing favicon files for the KeepMe website.

## Recommended Favicon Files

For comprehensive browser and device support, consider including the following files:

- `favicon.ico` - The classic favicon (16x16, 32x32)
- `favicon-16x16.png` - 16x16 PNG icon
- `favicon-32x32.png` - 32x32 PNG icon
- `apple-touch-icon.png` - 180x180 PNG for iOS devices
- `android-chrome-192x192.png` - 192x192 PNG for Android devices
- `android-chrome-512x512.png` - 512x512 PNG for Android devices
- `site.webmanifest` - Web app manifest file

## How to Use

1. Place your favicon files in this directory
2. Update the HTML head section in `index.html` to reference these files:

```html
<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
<link rel="manifest" href="/favicon/site.webmanifest">
<link rel="shortcut icon" href="/favicon/favicon.ico">
```

## Tools for Creating Favicons

You can use online tools like [Favicon Generator](https://realfavicongenerator.net/) or [Favicon.io](https://favicon.io/) to create a complete set of favicon files from a single image.
