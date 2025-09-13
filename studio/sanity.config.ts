import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemaTypes'   // <— adjust path if needed

export default defineConfig({
  projectId: 'c8lqgnbi',
  dataset: 'production',
  title: 'Patricia-Dominic',
  apiVersion: '2021-03-25',
  plugins: [deskTool()],
  basePath: '/studio',

  schema: {
    types: schemaTypes,   // <— here!
  },
})


