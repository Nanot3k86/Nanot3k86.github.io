export default {
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
    { name: 'title', title: 'Product Name', type: 'string' },
    { 
      name: 'accentColor', 
      title: 'Product Accent Color', 
      type: 'color',
      description: 'Used for buttons or accents related to this specific product.'
    },
    { name: 'price', title: 'Price', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'productImage', title: 'Product Image', type: 'image' },
    { name: 'buyLink', title: 'Purchase URL', type: 'string' },
  ],
}