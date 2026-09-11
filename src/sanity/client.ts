import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from './env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Static pages should use the CDN for speed; set to false only where you
  // need guaranteed-fresh data (e.g. previewing an unpublished draft).
  useCdn: true,
});