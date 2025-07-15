#!/bin/bash

# Fix dependency issues for deployment
echo "Fixing dependency issues..."

# Remove node_modules and lock files
rm -rf node_modules package-lock.json
rm -rf studio/node_modules studio/package-lock.json

# Install exact versions that we know work
echo "Installing root dependencies..."
npm install --save-exact

echo "Installing studio dependencies..."
cd studio
npm install --save-exact
cd ..

echo "Running build to test..."
npm run build

echo "Done! Dependencies should now be fixed."