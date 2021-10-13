import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { GetStaticProps } from "next";
import React from "react";
import { OurServiceCatalogItemOne } from "./2-ourService-section-catalog-itemOne";
import { OurServiceSectionCatalogHeader } from "./1-ourService-section-catalog-header";
import { OurServiceCatalogItemTwo } from "./3-ourService-section-catalog-itemTwo";
import { OurServiceCatalogItemThree } from "./4-ourService-section-catalog-item-Three";
// ------------------------------ ---------------------- --------
interface AppProps {
  ourServiceCatalogItem: OneCatalogData;
  ourServiceSectionCatalogHeader: OneCatalogData;
  ourServiceCatalogItemOne: OneCatalogData;
  ourServiceCatalogItemTwo: OneCatalogData;
  ourServiceCatalogItemThree: OneCatalogData;
}
export const OurServiceCatalogItem: React.FunctionComponent<AppProps> = ({
  ourServiceCatalogItem,
  ourServiceSectionCatalogHeader,
  ourServiceCatalogItemOne,
  ourServiceCatalogItemTwo,
  ourServiceCatalogItemThree,
}) => {
  const { FirstHeader } = ourServiceCatalogItem;
  return (
    <>
      <section className="section-spacing">
        <div className="container">
          <OurServiceSectionCatalogHeader
            ourServiceSectionCatalogHeader={ourServiceSectionCatalogHeader}
          />
          <div className="row">
            <OurServiceCatalogItemOne
              ourServiceCatalogItemOne={ourServiceCatalogItemOne}
            />

            <OurServiceCatalogItemTwo
              ourServiceCatalogItemTwo={ourServiceCatalogItemTwo}
            />

            <OurServiceCatalogItemThree
              ourServiceCatalogItemThree={ourServiceCatalogItemThree}
            />
          </div>
        </div>
      </section>
    </>
  );
};
