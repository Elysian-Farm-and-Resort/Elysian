import siteSettings from './siteSettings';
import journalPost from './journalPost';
import galleryImage from "@/sanity/schemaTypes/galleryimage";
import galleryCategory from "@/sanity/schemaTypes/gallerycategories";

// Additional singletons (homePage, farmPage, resortPage, ownPage, storyPage,
// contactPage) get added here as we build each corresponding page — no need
// to pre-build schemas for pages we haven't designed yet.
export const schemaTypes = [siteSettings, journalPost, galleryImage, galleryCategory];