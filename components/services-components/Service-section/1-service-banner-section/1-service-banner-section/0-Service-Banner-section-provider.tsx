import React from "react";
import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { ServiceBannerCatalogItem } from "./1-Service-Banner-section-catalog-item";
// ------------------------------ ---------------------- -------
interface AppProps {
  serviceBannerSection: any;
}

export const ServiceBannerSectionProvider: React.FunctionComponent<AppProps> = ({
  serviceBannerSection: {
    serviceCatalogItem,


  },
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
      <ServiceBannerCatalogItem

          serviceCatalogItem={ serviceCatalogItem[0]}

      />
    </>
  );
};
