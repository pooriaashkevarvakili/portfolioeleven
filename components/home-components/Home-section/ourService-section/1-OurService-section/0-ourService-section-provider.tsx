import React from "react";
import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { OurServiceCatalogItem } from "./1-ourService-section-catalog-item";
// ------------------------------ ---------------------- -------
interface AppProps {
  ourServiceSection: any;
}

export const OurServiceSectionProvider: React.FunctionComponent<AppProps> = ({
  ourServiceSection: {
    ourServiceCatalogItem,
    ourServiceSectionCatalogHeader,
    ourServiceCatalogItemOne,
    ourServiceCatalogItemTwo,
    ourServiceCatalogItemThree,
  },
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
      <OurServiceCatalogItem
        ourServiceCatalogItemThree={ourServiceCatalogItemThree[0]}
        ourServiceCatalogItemTwo={ourServiceCatalogItemTwo[0]}
        ourServiceCatalogItemOne={ourServiceCatalogItemOne[0]}
        ourServiceCatalogItem={ourServiceCatalogItem[0]}
        ourServiceSectionCatalogHeader={ourServiceSectionCatalogHeader[0]}
      />
    </>
  );
};
