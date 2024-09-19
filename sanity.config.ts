import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemaTypes';
import { structure } from './structure';
import { defaultDocumentNode } from './structure/defaultDocumentNode';

export default defineConfig({
  name: 'default',
  title: 'sanity-sandbox',

  projectId: 'm6tsi1qz',
  dataset: 'production',

  // https://www.sanity.io/learn/course/studio-excellence/member-mastery#s-e0bdea0f53a6
  // tools: (prev, { currentUser }) => {
  //   const isAdmin = currentUser?.roles.some((role) => role.name === 'administrator');

  //   if (isAdmin) {
  //     return prev;
  //   }

  //   return prev.filter((tool) => tool.name !== 'vision');
  // },

  // Order matters:
  plugins: [structureTool({ structure, defaultDocumentNode }), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
