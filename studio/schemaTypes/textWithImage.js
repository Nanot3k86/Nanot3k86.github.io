export default {
  name: 'textWithImage',
  title: 'Text with Image',
  type: 'object',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string' },
    { name: 'headingColor', title: 'Heading Color', type: 'color' },
    { name: 'tagline', title: 'Tagline', type: 'string' },
    { name: 'taglineColor', title: 'Tagline Color', type: 'color' },
    { name: 'text', title: 'Text', type: 'text' },
    { name: 'textColor', title: 'Body Text Color', type: 'color' },
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
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    {
      name: 'layout',
      title: 'Image Alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
      },
    },
  ],
}