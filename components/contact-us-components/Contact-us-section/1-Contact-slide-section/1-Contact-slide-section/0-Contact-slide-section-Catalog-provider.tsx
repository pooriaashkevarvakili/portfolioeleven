import React from "react";
import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { ContactSlideItem} from "./1-Contact-slide-section-Catalog-Item";
// ------------------------------ ---------------------- -------
interface AppProps {
  contactSlideSection: any;
}

export const ContactSlideSectionCatalogProvider: React.FunctionComponent<AppProps> = ({
  contactSlideSection: {
    contactSlideItem
  },
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
      <ContactSlideItem
          contactSlideItem={   contactSlideItem[0]}
      />
    </>
  );
};
