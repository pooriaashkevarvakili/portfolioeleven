import {
  GallerySlideSectionCatalogProvider,
  GalleryGallerySectionProvider
} from ".";
import React from "react";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const GalleryProvider: React.FunctionComponent<AppProps> = ({
  apiProps: {
    gallerySlideSection,galleryGallerySection
  },
}) => (
  <>
      <GallerySlideSectionCatalogProvider
       gallerySlideSection={ gallerySlideSection}
      />
      <GalleryGallerySectionProvider
      galleryGallerySection={galleryGallerySection}
      />
  </>
);
