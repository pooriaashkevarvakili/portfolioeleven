import React from "react";
import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { ServiceServiceCatalogItem } from "./1-Service-service-section-catalog-item";
// ------------------------------ ---------------------- -------
interface AppProps {
  serviceserviceSection: any;
}

export const ServiceserviceSectionProvider: React.FunctionComponent<AppProps> = ({
                                                                                     serviceserviceSection: {
                                                                                         serviceServiceCatalogItem,
                                                                                         serviceServiceCatalogHeader


  },
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
      < ServiceServiceCatalogItem
          serviceServiceCatalogHeader={ serviceServiceCatalogHeader[0]}
          serviceServiceCatalogItem={   serviceServiceCatalogItem[0]}

      />
    </>
  );
};
