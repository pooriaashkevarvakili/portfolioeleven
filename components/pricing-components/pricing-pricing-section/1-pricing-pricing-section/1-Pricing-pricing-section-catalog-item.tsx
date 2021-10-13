import {OneCatalogData} from "./../../../../types/OneCatalogData";
import {GetStaticProps} from "next";
import React from "react";
import {PriceingPriceingCatalogHeader} from "./1-Pricing-pricing-section-catalog-Header"
import {PriceingPriceingCatalogItemOne} from "./2-Pricing-pricing-section-catalog-itemOne"
import {PriceingPriceingCatalogItemTwo} from "./3-Pricing-pricing-section-catalog-itemTwo"
import {PriceingPriceingCatalogItemThree} from "./4-Pricing-pricing-section-catalog-itemThree"
// ------------------------------ ---------------------- --------
interface AppProps {
    priceingPriceingCatalogItem: OneCatalogData;
    priceingPriceingCatalogHeader:OneCatalogData;
    priceingPriceingCatalogItemOne:OneCatalogData;
    priceingPriceingCatalogItemTwo:OneCatalogData;
    priceingPriceingCatalogItemThree:OneCatalogData

}

export const PriceingPriceingCatalogItem: React.FunctionComponent<AppProps> = ({
    priceingPriceingCatalogItem,
    priceingPriceingCatalogHeader,
    priceingPriceingCatalogItemOne,
    priceingPriceingCatalogItemTwo,
    priceingPriceingCatalogItemThree }) => {
    
    return (
        <>
            <section className="section-spacing">
                <div className="container">
              <PriceingPriceingCatalogHeader priceingPriceingCatalogHeader={priceingPriceingCatalogHeader}/>
                    <div className="row">
          <PriceingPriceingCatalogItemOne priceingPriceingCatalogItemOne={priceingPriceingCatalogItemOne}/>
                        <PriceingPriceingCatalogItemTwo priceingPriceingCatalogItemTwo={priceingPriceingCatalogItemTwo}/>
            <PriceingPriceingCatalogItemThree priceingPriceingCatalogItemThree={priceingPriceingCatalogItemThree}/>
                    </div>
                </div>
            </section>
        </>
    );
};
