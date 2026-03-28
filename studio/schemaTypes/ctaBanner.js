export default {
  name: 'ctaBanner',
  title: 'CTA Banner',
  type: 'object',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string' },
    { name: 'headingColor', title: 'Heading Color', type: 'color' },
    { name: 'subheading', title: 'Subheading', type: 'text' },
    { name: 'subheadingColor', title: 'Subheading Color', type: 'color' },
    { name: 'buttonText', title: 'Button Text', type: 'string' },
    { name: 'buttonLink', title: 'Button Link', type: 'string' },
    { name: 'buttonColor', title: 'Button Background Color', type: 'color' },
    { name: 'buttonTextColor', title: 'Button Text Color', type: 'color' },
    { name: 'backgroundImage', title: 'Background Image', type: 'image' },
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
  ],
}