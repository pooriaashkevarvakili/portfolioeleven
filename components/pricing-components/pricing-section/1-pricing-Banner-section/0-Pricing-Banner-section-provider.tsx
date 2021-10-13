import React from "react";
import { OneCatalogData } from "./../../../../types/OneCatalogData";
import { PriceingBannerCatalogItem } from "./1-Pricing-Banner-section-catalog-item";
// ------------------------------ ---------------------- -------
interface AppProps {
    pricingBannerSection: any;
}

export const PricingBannerSectionProvider: React.FunctionComponent<AppProps> = ({
  pricingBannerSection: {
      pricingserviceCatalogItem,


  },
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
      <PriceingBannerCatalogItem

          pricingserviceCatalogItem={  pricingserviceCatalogItem[0]}

      />
    </>
  );
};
