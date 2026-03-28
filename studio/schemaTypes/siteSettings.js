export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'title', title: 'Site Title', type: 'string' },
    { name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } },
    { name: 'favicon', title: 'Favicon', type: 'image', options: { hotspot: true } },
    { name: 'seo', title: 'Global SEO Fallback', type: 'seo', options: { collapsible: true, collapsed: true } },
    { name: 'brandPrimary', title: 'Brand Primary', type: 'color' },
    { name: 'brandSecondary', title: 'Brand Secondary', type: 'color' },
    { name: 'brandText', title: 'Default Text Color', type: 'color' },
    { 
      name: 'globalSectionBg', 
      title: 'Global Section Background (Start)', 
      type: 'color',
      description: 'Default background for all modules.'
    },
    { 
      name: 'globalSectionBgEnd', 
      title: 'Global Section Background (End)', 
      type: 'color',
      description: 'Add this to create a global gradient across all modules.'
    },
    { 
      name: 'globalGradientAngle', 
      title: 'Global Gradient Angle', 
      type: 'number',
      initialValue: 135
    },
    { name: 'navbarBg', title: 'Navbar Background', type: 'color' },
    { name: 'navbarText', title: 'Navbar Text Color', type: 'color' },
    { name: 'footerBg', title: 'Footer Background', type: 'color' },
    { name: 'footerText', title: 'Footer Text Color', type: 'color' },
    {
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [{ type: 'object', fields: [{ name: 'label', type: 'string' }, { name: 'url', type: 'string' }] }]
    },
  ],
}