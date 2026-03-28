export default {
  name: 'features',
  title: 'Feature Grid',
  type: 'object',
  fields: [
    {
      name: 'headline',
      title: 'Section Headline',
      type: 'string', 
      description: 'e.g., Why We Are Different',
    },
    {
      name: 'titleColor',
      title: 'Main Headline Color',
      type: 'color',
    },
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
      name: 'badgeColor',
      title: 'Number Badge Background',
      type: 'color',
    },
    {
      name: 'badgeTextColor',
      title: 'Number Badge Text Color',
      type: 'color',
    },
    {
      name: 'cardBackgroundColor',
      title: 'Card Background Color',
      type: 'color',
    },
    {
      name: 'cardTitleColor',
      title: 'Card Title Color',
      type: 'color',
    },
    {
      name: 'cardTextColor',
      title: 'Card Text Color',
      type: 'color',
    },
    {
      name: 'items',
      title: 'Feature Items',
      type: 'array',
      validation: Rule => Rule.max(3).warning('The design looks best with 3 items.'),
      of: [
        {
          type: 'object',
          title: 'Feature',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            }
          ]
        }
      ]
    }
  ]
}