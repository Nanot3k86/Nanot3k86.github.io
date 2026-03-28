export default {
  name: 'testimonialSection',
  title: 'Testimonials',
  type: 'object',
  fields: [
    { name: 'heading', title: 'Section Heading', type: 'string' },
    { name: 'headingColor', title: 'Section Heading Color', type: 'color' },
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
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'quote', title: 'Quote', type: 'text' },
            { name: 'quoteColor', title: 'Quote Color', type: 'color' },
            { name: 'author', title: 'Author', type: 'string' },
            { name: 'authorColor', title: 'Author Color', type: 'color' },
            { name: 'role', title: 'Role/Company', type: 'string' },
            { name: 'roleColor', title: 'Role Color', type: 'color' },
            { name: 'photo', title: 'Author Photo', type: 'image', options: { hotspot: true } },
          ],
        },
      ],
    },
  ],
}