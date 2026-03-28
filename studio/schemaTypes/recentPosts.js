export default {
  name: 'recentPosts',
  title: 'Recent Posts Feed',
  type: 'object',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string' },
    { name: 'headingColor', title: 'Heading Color', type: 'color' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'descriptionColor', title: 'Description Color', type: 'color' },
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