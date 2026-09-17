import { defineField, defineType } from 'sanity'; 

export default defineType({
  name: 'galleryCategory',
  title: 'Gallery Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g. "The Farm", "Weddings", "Construction Progress"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      description: 'Used in the URL, e.g. /gallery/weddings',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'Short line shown on the gallery card and category page.',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers show first on the Gallery index page.',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'description' },
  },
});