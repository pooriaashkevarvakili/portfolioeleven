import React from "react";
import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { PriceingCatalogItem } from "./1-priceing-section-catalog-item";
// ------------------------------ ---------------------- -------
interface AppProps {
  ourPriceingSection: any;
}

export const PricingSecionProvider: React.FunctionComponent<AppProps> = ({
  ourPriceingSection: {
    ourPriceingCatalogItem,
    priceingCatalogHeader,
    priceingCatalogItemOne,
    priceingCatalogItemTwo,
    priceingCatalogItemThree,
  },
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
      <PriceingCatalogItem
        priceingCatalogItemOne={priceingCatalogItemOne[0]}
        ourPriceingCatalogItem={ourPriceingCatalogItem}
        priceingCatalogHeader={priceingCatalogHeader[0]}
        priceingCatalogItemTwo={priceingCatalogItemTwo[0]}
        priceingCatalogItemThree={priceingCatalogItemThree[0]}
      />
    </>
  );
};
