import { GalleryGallerySectionProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const GalleryProvider: React.FunctionComponent<AppProps> = ({
  apiProps: { galleryGallerySection },
}) => (
  <>
    <GalleryGallerySectionProvider galleryGallerySection={galleryGallerySection} />
  </>
);
