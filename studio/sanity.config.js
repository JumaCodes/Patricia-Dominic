import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'sanity',

  projectId: 'c8lqgnbi',
  dataset: 'production',
  studioHost: 'portfolio-2025-1',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
