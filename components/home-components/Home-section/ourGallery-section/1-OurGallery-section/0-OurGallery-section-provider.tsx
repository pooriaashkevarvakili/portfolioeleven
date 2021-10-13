// ------------------------------ ---------------------- --------

import { OneCatalogData } from "./../../../../../types/OneCatalogData";
import { GetStaticProps } from "next";
import { OurGalleryCatalogItem } from "./1-OurGallery-section-catalog-item";

// ------------------------------ ---------------------- --------
interface AppProps {
  ourGallerySection: any;
}
export const OurGallerySectionProvider: React.FunctionComponent<AppProps> = ({
  ourGallerySection: { ourGalleryCatalogItem, ourGalleryCatalogHeader },
}) => {
  // ------------------------------ ---------------------- --------

  // ------------------------------ ---------------------- --------
  return (
    <OurGalleryCatalogItem
      ourGalleryCatalogHeader={ourGalleryCatalogHeader[0]}
      ourGalleryCatalogItem={ourGalleryCatalogItem[0]}
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
