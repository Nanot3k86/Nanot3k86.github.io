export default {
  name: 'seo',
  title: 'SEO & Social',
  type: 'object',
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Title for search engines (max 60 chars).',
      validation: (Rule) => Rule.max(60),
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Summary for search results (max 160 chars).',
      validation: (Rule) => Rule.max(160),
    },
    {
      name: 'shareImage',
      title: 'Share Image',
      type: 'image',
      description: 'Image displayed when shared (1200x630px).',
    },
  ],
}