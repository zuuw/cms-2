import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'cms-2-sanity',

  projectId: 'mkmkyko2',
  dataset: "head",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
