// src/lib/queries.ts
import groq from 'groq';
export const projectsQuery = groq`*[_type == "project"] | order(date desc) {
  _id, title, summary, date,
  "slug": slug.current,
  "image": coalesce(thumbnail.asset->url, "")
}`;