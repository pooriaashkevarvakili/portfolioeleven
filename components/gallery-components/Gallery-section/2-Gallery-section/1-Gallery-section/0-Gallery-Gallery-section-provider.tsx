// ------------------------------ ---------------------- --------

import { OneCatalogData } from "./../../../../../types/OneCatalogData";
import { GetStaticProps } from "next";
import {GalleryCatalogItem} from "./1-Gallery-Gallery-section-catalog-item";

// ------------------------------ ---------------------- --------
interface AppProps {
  galleryGallerySection: any;
}
export const GalleryGallerySectionProvider: React.FunctionComponent<AppProps> = ({
  galleryGallerySection: {  galleryGalleryCatalogItem,galleryGalleryCatalogHeader },
}) => {
  // ------------------------------ ---------------------- --------

  // ------------------------------ ---------------------- --------
  return (
    <GalleryCatalogItem
      galleryGalleryCatalogItem={galleryGalleryCatalogItem[0]}  
      galleryGalleryCatalogHeader={galleryGalleryCatalogHeader[0]}
    />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      catalogData: {},
    },
  };
};
