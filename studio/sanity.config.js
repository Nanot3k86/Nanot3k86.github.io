import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { colorInput } from '@sanity/color-input'
import { CogIcon, HomeIcon, DocumentsIcon } from '@sanity/icons'

// Define which types are Singletons (only one instance allowed)
const singletonTypes = new Set(['siteSettings', 'homePage'])

// Define which actions are allowed on Singletons (prevents Delete/Duplicate)
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

export default defineConfig({
  name: 'default',
  title: 'Agency Studio',

  // VITE CONVENTION: Variables must start with SANITY_STUDIO_ to be visible
  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID || 'puh7k8ji',
  dataset: import.meta.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Agency Dashboard')
          .items([
            // Site Settings Singleton
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .icon(CogIcon)
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            // Home Page Singleton
            S.listItem()
              .title('Home Page')
              .id('homePage')
              .icon(HomeIcon)
              .child(
                S.document()
                  .schemaType('homePage')
                  .documentId('homePage')
              ),
            S.divider(),
            // Regular Document Types (Pages, Posts, Products, etc.)
            ...S.documentTypeListItems()
              .filter((listItem) => !singletonTypes.has(listItem.getId()))
              .map((listItem) => {
                if (listItem.getId() === 'page') return listItem.icon(DocumentsIcon)
                return listItem
              }),
          ]),
    }),
    unsplashImageAsset(),
    visionTool(),
    colorInput(),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})