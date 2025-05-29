import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'keepme',

  projectId: 'tyzs5imn',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  cors: {
    allowOrigins: ['https://keepme.co.uk', 'http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175'],
    allowCredentials: true,
  },
})
