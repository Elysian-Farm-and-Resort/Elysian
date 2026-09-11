import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe what\'s in the photo — required for accessibility and image SEO.',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Optional short caption shown under the image on the Gallery page.',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'galleryCategory' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Featured images can be pulled out for use on the Home page or category headers.',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers show first. Leave blank to sort by upload date instead.',
    }),
  ],
  preview: {
    select: { title: 'caption', subtitle: 'category.title', media: 'image' },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Untitled image',
        subtitle,
        media,
      };
    },
  },
});