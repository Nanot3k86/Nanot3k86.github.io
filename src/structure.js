export const myStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      // The Singleton for Site Settings
      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings') // Forces a specific ID
        ),
      S.divider(),
      // Filter out the singleton from the regular document list
      ...S.documentTypeListItems().filter(
        (listItem) => !['siteSettings'].includes(listItem.getId())
      ),
    ]);