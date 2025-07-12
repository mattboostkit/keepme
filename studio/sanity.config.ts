import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {
  dashboardTool,
  projectInfoWidget
} from '@sanity/dashboard'
import {presentationTool} from 'sanity/presentation'
import {schemaTypes} from './schemaTypes'
import resolveProductionUrl from './lib/presentation/resolve-production-url'

export default defineConfig({
  name: 'default',
  title: 'keepme',

  projectId: 'tyzs5imn',
  dataset: 'production',

  plugins: [
    structureTool(), 
    visionTool(),
    dashboardTool({
      widgets: [
        projectInfoWidget()
      ]
    }),
    presentationTool({
      previewUrl: {
        origin: 'https://keepme.co.uk',
        previewMode: {
          enable: '/.netlify/functions/preview-enable',
          disable: '/.netlify/functions/preview-disable',
        },
      },
      resolve: resolveProductionUrl,
    })
  ],

  schema: {
    types: schemaTypes,
  },
})