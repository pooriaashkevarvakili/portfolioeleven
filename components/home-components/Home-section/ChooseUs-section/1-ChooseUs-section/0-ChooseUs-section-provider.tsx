import React from "react";
import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { ChooseUSCatalogItem } from "./1-ChooseUs-section-catalog-item";
// ------------------------------ ---------------------- -------
interface AppProps {
  chooseUSSection: any;
}

export const ChooseUSSectionProvider: React.FunctionComponent<AppProps> = ({
  chooseUSSection: { chooseUSCatalogItem },
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
      <ChooseUSCatalogItem chooseUSCatalogItem={chooseUSCatalogItem[0]} />
    </>
  );
};
