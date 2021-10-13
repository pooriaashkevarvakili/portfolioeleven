import { OurGallerySectionProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const GalleryProvider: React.FunctionComponent<AppProps> = ({
  apiProps: { ourGallerySection },
}) => (
  <>
    <OurGallerySectionProvider ourGallerySection={ourGallerySection} />
  </>
);
