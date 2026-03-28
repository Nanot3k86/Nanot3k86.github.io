export default {
  name: 'post',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { 
      name: 'accentColor', 
      title: 'Post Accent Color', 
      type: 'color',
      description: 'Used for tags or links associated with this specific post.'
    },
    { name: 'excerpt', title: 'Excerpt', type: 'text' },
    { name: 'mainImage', title: 'Main Image', type: 'image' },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
  ],
}