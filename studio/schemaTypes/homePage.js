export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    { name: 'title', title: 'Page Title', type: 'string' },
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