import { defineCliConfig } from 'sanity/cli'

// Read environment variables
const projectId = 'c8lqgnbi';
const dataset = 'production';

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  autoUpdates: true,
})
