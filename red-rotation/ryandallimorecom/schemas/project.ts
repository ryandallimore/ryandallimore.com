import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'summary', type: 'text' }),
    defineField({ name: 'date', type: 'date' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({
      name: 'thumbnail',
      type: 'image',
      options: { hotspot: true }
    })
  ]
});
