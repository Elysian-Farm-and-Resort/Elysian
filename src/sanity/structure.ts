import type { StructureResolver } from 'sanity/structure';

// Singletons (siteSettings, and later homePage/farmPage/resortPage/etc.)
// are pinned as single, non-creatable list items so the editor can't
// accidentally create a second "Site Settings" document.
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.documentTypeListItem('journalPost').title('Journal Posts'),
      S.documentTypeListItem('galleryCategory').title('Gallery Categories'),
      S.documentTypeListItem('galleryImage').title('Gallery Images'),
    ]);