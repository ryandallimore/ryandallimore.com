// src/lib/sanity.ts
import { createClient } from '@sanity/client';

export const sanity = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID,
  dataset: import.meta.env.SANITY_DATASET || 'production',
  apiVersion: import.meta.env.SANITY_API_VERSION || '2025-01-01',
  useCdn: true, // public, cached reads
  token: import.meta.env.SANITY_READ_TOKEN // only if you need private content
});