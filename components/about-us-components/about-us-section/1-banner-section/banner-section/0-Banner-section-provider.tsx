import React from "react";
import { OneCatalogData } from "./../../../../../types/OneCatalogData";
import { BannerCatalogItem } from "./1-Banner-section-catalog-item";
// ------------------------------ ---------------------- -------
interface AppProps {
  bannerSection: any;
}

export const BannerSectionProvider: React.FunctionComponent<AppProps> = ({bannerSection: {bannerCatalogItem
  },
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
      <BannerCatalogItem
          bannerCatalogItem={bannerCatalogItem[0]}


      />
    </>
  );
};
