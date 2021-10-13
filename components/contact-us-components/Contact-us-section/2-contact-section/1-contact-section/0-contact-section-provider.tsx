// ------------------------------ ---------------------- --------

import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { GetStaticProps } from "next";
import {ContactCatalogItem} from "./1-contact-section-catalog-item-Form";

// ------------------------------ ---------------------- --------
interface AppProps {
  contactUSSection: any;
}
export const ContactUsSectionProvider: React.FunctionComponent<AppProps> = ({
  contactUSSection: {  	contactCatalogItem,contactCatalogHeader },
}) => {
  // ------------------------------ ---------------------- --------

  // ------------------------------ ---------------------- --------
  return (
    <>
      <ContactCatalogItem
        contactCatalogItem={contactCatalogItem[0]}
        contactCatalogHeader={contactCatalogHeader[0]}
      />
      </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      catalogData: {},
    },
  };
};
