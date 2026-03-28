export default {
  name: 'hero',
  title: 'Hero Module',
  type: 'object',
  fields: [
    {
      name: 'headline',
      title: 'Main Headline',
      type: 'string',
    },
    {
      name: 'headlineColor',
      title: 'Headline Color',
      type: 'color',
    },
    {
      name: 'subheadline',
      title: 'Subheadline',
      type: 'text',
    },
    {
      name: 'subheadlineColor',
      title: 'Subheadline Color',
      type: 'color',
    },
    {
      name: 'buttonText',
      title: 'Button Label',
      type: 'string',
    },
    {
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
    },
    {
      name: 'buttonColor',
      title: 'Button Background Color',
      type: 'color',
    },
    {
      name: 'buttonTextColor',
      title: 'Button Text Color',
      type: 'color',
    },
    {
      name: 'bgImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
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
    {
      name: 'gradientAngle',
      title: 'Local Gradient Angle',
      type: 'number',
      initialValue: 135
    },
  ],
}