import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'cody-first-cms',

  projectId: 'mkmkyko2',
  dataset: 'head',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
