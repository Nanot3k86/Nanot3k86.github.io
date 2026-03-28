export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'modules',
      title: 'Page Modules',
      type: 'array',
      of: [
        { type: 'hero' }, { type: 'features' }, { type: 'gallery' },
        { type: 'textWithImage' }, { type: 'ctaBanner' },
        { type: 'testimonialSection' }, { type: 'recentPosts' },
        { type: 'featuredProduct' }, { type: 'contactForm' }
      ],
    },
  ],
}