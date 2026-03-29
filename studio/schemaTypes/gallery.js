export default {
  name: 'gallery',
  title: 'Gallery Module',
  type: 'object',
  fields: [
    { name: 'headline', title: 'Gallery Headline', type: 'string' },
    { name: 'headlineColor', title: 'Headline Color', type: 'color' },
    { name: 'subheading', title: 'Subheading', type: 'text' },
    { name: 'subheadingColor', title: 'Subheading Color', type: 'color' },
    { 
      name: 'backgroundColor', 
      title: 'Local Background (Start)', 
      type: 'color',
      description: 'Leave blank to inherit global style.'
    },
    { name: 'backgroundColorEnd', title: 'Local Background (End)', type: 'color' },
    { name: 'gradientAngle', title: 'Local Gradient Angle', type: 'number', initialValue: 135 },
    {
      name: 'items',
      title: 'Media Items',
      type: 'array',
      options: { layout: 'grid' },
      of: [
        {
          type: 'object',
          title: 'Media Item',
          fields: [
            {
              name: 'mediaType',
              title: 'Media Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Image', value: 'image' },
                  { title: 'Video (YouTube/Vimeo Embed)', value: 'video' },
                  { title: 'Audio Player', value: 'audio' }
                ],
                layout: 'radio'
              },
              initialValue: 'image'
            },
            {
              name: 'image',
              title: 'Image / Cover Art',
              type: 'image',
              options: { hotspot: true },
              description: 'Upload the image, or the thumbnail cover art for your video/audio.'
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
              description: 'Text displayed on hover and in the lightbox.'
            },
            {
              name: 'alt',
              title: 'Title / Alt Text',
              type: 'string',
              description: 'Required for accessibility and audio player titles.',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'videoUrl',
              title: 'Video Embed URL',
              type: 'url',
              description: 'e.g., https://www.youtube.com/embed/dQw4w9WgXcQ',
              hidden: ({ parent }) => parent?.mediaType !== 'video'
            },
            {
              name: 'audioFile',
              title: 'Audio File',
              type: 'file',
              options: { accept: 'audio/*' },
              hidden: ({ parent }) => parent?.mediaType !== 'audio'
            }
          ]
        }
      ],
    },
  ],
}