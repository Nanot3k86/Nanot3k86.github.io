export default {
  name: 'contactForm',
  title: 'Contact Form Section',
  type: 'object',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string' },
    { name: 'headingColor', title: 'Heading Color', type: 'color' },
    { name: 'subheading', title: 'Subheading', type: 'text', rows: 2 },
    { name: 'subheadingColor', title: 'Subheading Color', type: 'color' },
    { name: 'buttonLabel', title: 'Button Label', type: 'string' },
    { name: 'buttonColor', title: 'Button Color', type: 'color' },
    { name: 'buttonTextColor', title: 'Button Text Color', type: 'color' },
    { name: 'successMessage', title: 'Success Message', type: 'string', description: 'Text shown after submission.' },
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