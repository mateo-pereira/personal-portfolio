import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schemaTypes'
import {apiVersion, dataset, projectId} from './src/sanity/env'

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'Mateo Pereira Portfolio',
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
  },
  plugins: [structureTool(), visionTool({defaultApiVersion: apiVersion})],
})
