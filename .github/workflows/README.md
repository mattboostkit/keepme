# GitHub Actions Workflows

## CI Workflow
Runs on every push to main/develop and on pull requests. Performs:
- Linting
- Type checking
- Building both the main app and Sanity Studio
- Tests with Node.js 18.x and 20.x

## Deploy Workflow
Runs on push to main branch. Deploys:
- Main app to Netlify
- Sanity Studio to Sanity.io

## Required Secrets
Set these in your repository settings under Settings > Secrets and variables > Actions:

- `NETLIFY_AUTH_TOKEN`: Personal access token from Netlify
- `NETLIFY_SITE_ID`: Your Netlify site ID
- `SANITY_AUTH_TOKEN`: Sanity deployment token

## Dependabot
Configured to:
- Check for updates monthly (first Monday at 9 AM)
- Group all dependencies into single PRs
- Limit to 5 open PRs at a time