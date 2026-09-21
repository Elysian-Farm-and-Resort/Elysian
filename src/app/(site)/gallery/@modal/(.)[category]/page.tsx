import { notFound } from "next/navigation";
import GalleryModal from "@/components/gallery/GalleryModal";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { getGalleryCategoryBySlug, getGalleryImages } from "../../../../../../sanity/queries";

type Props = {
  params: Promise<{ category: string }>;
};

export default async function GalleryCategoryModal({ params }: Props) {
  const { category } = await params;
  const meta = await getGalleryCategoryBySlug(category);

  if (!meta) notFound();

  const images = await getGalleryImages(category);

  return (
    <GalleryModal title={meta.title}>
      <GalleryGrid images={images} />
    </GalleryModal>
  );
}