import {defineCliConfig} from 'sanity/cli'
import {projectId, dataset} from './src/sanity/env'

export default defineCliConfig({
  api: {projectId, dataset},
})
