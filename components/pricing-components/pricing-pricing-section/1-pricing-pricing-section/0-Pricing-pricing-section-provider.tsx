import React from "react";
import { OneCatalogData } from "./../../../../types/OneCatalogData";
import { PriceingPriceingCatalogItem } from "./1-Pricing-pricing-section-catalog-item";
// ------------------------------ ---------------------- -------
interface AppProps {
    pricingpricingSection: any;
}

export const PricingPricingSectionProvider: React.FunctionComponent<AppProps> = ({
  pricingpricingSection: {
      priceingPriceingCatalogItem,
      priceingPriceingCatalogHeader,  priceingPriceingCatalogItemOne, priceingPriceingCatalogItemTwo, priceingPriceingCatalogItemThree


  },
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
      <PriceingPriceingCatalogItem
          priceingPriceingCatalogItemThree={ priceingPriceingCatalogItemThree[0]}
          priceingPriceingCatalogItemTwo={ priceingPriceingCatalogItemTwo[0]}
          priceingPriceingCatalogItemOne={  priceingPriceingCatalogItemOne[0]}
          priceingPriceingCatalogHeader={ priceingPriceingCatalogHeader[0]}
          priceingPriceingCatalogItem={ priceingPriceingCatalogItem}

      />
    </>
  );
};
