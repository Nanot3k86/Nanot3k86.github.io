export default {
  name: 'featuredProduct',
  title: 'Featured Product',
  type: 'object',
  fields: [
    { name: 'heading', title: 'Section Heading', type: 'string' },
    { name: 'headingColor', title: 'Section Heading Color', type: 'color' },
    { name: 'product', title: 'Select Product', type: 'reference', to: [{ type: 'product' }] },
    { 
      name: 'backgroundColor', 
      title: 'Local Background (Start)', 
      type: 'color',
      description: 'Overrides Global Background. Leave blank to inherit global style.'
    },
    { 
      name: 'backgroundColorEnd', 
      title: 'Local Background (End)', 
      type: 'color',
      description: 'Add for a local gradient override.' 
    },
    { name: 'gradientAngle', title: 'Local Gradient Angle', type: 'number', initialValue: 135 },
    { 
      name: 'cardColor', 
      title: 'Card Background Color', 
      type: 'color', 
      description: 'Background color of the product card itself.' 
    },
    { name: 'productTitleColor', title: 'Product Title Color', type: 'color' },
    { name: 'textColor', title: 'Text Color (Description & Price)', type: 'color' },
    { name: 'buttonColor', title: 'Button Background Color', type: 'color' },
    { name: 'buttonTextColor', title: 'Button Text Color', type: 'color' },
  ],
}