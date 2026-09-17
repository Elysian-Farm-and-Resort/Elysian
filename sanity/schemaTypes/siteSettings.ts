
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',

  // Singleton pattern: only one document of this type should ever exist.
  // Enforced in the Studio structure (see structure.ts), not here.
  fields: [
    defineField({
      name: 'contactAddress',
      title: 'Address',
      type: 'string',
    }),

    defineField({
      name: 'contactPhone',
      title: 'Phone Number',
      type: 'string',
      description: 'Include country code, e.g. +234 000 000 0000',
    }),

    defineField({
      name: 'contactEmail',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.email(),
    }),

    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      type: 'string',
      description:
        'Digits only with country code, e.g. 2340000000000 (used to build the wa.me link)',
    }),

    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  'instagram',
                  'facebook',
                  'tiktok',
                  'youtube',
                  'linkedin',
                ],
              },
            }),

            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'footerCtaHeadline',
      title: 'Footer CTA Headline',
      type: 'string',
      initialValue: 'Own the Escape.',
    }),

    defineField({
      name: 'footerCtaSubtext',
      title: 'Footer CTA Subtext',
      type: 'string',
      initialValue:
        'Aduke Cottages · Farm · Resort · Hospitality · Experiences',
    }),

    defineField({
      name: 'parentCompanyName',
      title: 'Parent Company Name',
      type: 'string',
      initialValue: 'Agrolocale',
    }),

    defineField({
      name: 'parentCompanyUrl',
      title: 'Parent Company URL',
      type: 'url',
    }),
  ],
});