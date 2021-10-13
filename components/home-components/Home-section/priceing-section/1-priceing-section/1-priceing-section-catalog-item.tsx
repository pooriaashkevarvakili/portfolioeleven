import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { GetStaticProps } from "next";
import React from "react";
import { PriceingCatalogHeader } from "./1-priceing-section-catalog-header";
import { PriceingCatalogItemOne } from "./2-priceing-section-catalog-item-One";
import { PriceingCatalogItemTwo } from "./3-priceing-section-catalog-item-Two";
import { PriceingCatalogItemThree } from "./4-priceing-section-catalog-item-Three";
// ------------------------------ ---------------------- --------
interface AppProps {
  ourPriceingCatalogItem: OneCatalogData;
  priceingCatalogHeader: OneCatalogData;
  priceingCatalogItemOne: OneCatalogData;
  priceingCatalogItemTwo: OneCatalogData;
  priceingCatalogItemThree;
}
export const PriceingCatalogItem: React.FunctionComponent<AppProps> = ({
  ourPriceingCatalogItem,
  priceingCatalogHeader,
  priceingCatalogItemOne,
  priceingCatalogItemTwo,
  priceingCatalogItemThree,
}) => {
  return (
    <>
      <section className="section-spacing">
        <div className="container">
          <PriceingCatalogHeader
            priceingCatalogHeader={priceingCatalogHeader}
          />
          <div className="row">
            <PriceingCatalogItemOne
              priceingCatalogItemOne={priceingCatalogItemOne}
            />
            <PriceingCatalogItemTwo
              priceingCatalogItemTwo={priceingCatalogItemTwo}
            />
            <PriceingCatalogItemThree
              priceingCatalogItemThree={priceingCatalogItemThree}
            />
          </div>
        </div>
      </section>
    </>
  );
};
