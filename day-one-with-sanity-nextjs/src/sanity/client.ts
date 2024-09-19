import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'm6tsi1qz',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});
