import React from "react";
import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { GallerySlideItem } from "./1-Gallery-Gallery-slide-section-Catalog-Item";
// ------------------------------ ---------------------- -------
interface AppProps {
  gallerySlideSection: any;
}

export const GallerySlideSectionCatalogProvider: React.FunctionComponent<AppProps> = ({
  gallerySlideSection: {
    gallerySlideItem
  },
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
      <GallerySlideItem
         gallerySlideItem={  gallerySlideItem[0]}
      />
    </>
  );
};
