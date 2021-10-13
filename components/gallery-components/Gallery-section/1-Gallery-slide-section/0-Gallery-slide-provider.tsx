import { GallerySlideSectionCatalogProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const CarouselSlideProvider: React.FunctionComponent<AppProps> = ({
  apiProps: { gallerySlideSection },
}) => (
  <>
    <GallerySlideSectionCatalogProvider
     gallerySlideSection={gallerySlideSection}
    />
  </>
);
