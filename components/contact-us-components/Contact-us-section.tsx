import {
  ContactSlideSectionCatalogProvider,ContactUsSectionProvider
} from ".";
import React from "react";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const ContactUSProvider: React.FunctionComponent<AppProps> = ({
  apiProps: {
    contactSlideSection,
    contactUSSection
  },
}) => (
  <>
      <ContactSlideSectionCatalogProvider
      contactSlideSection={contactSlideSection}
      />
      <ContactUsSectionProvider
        contactUSSection={contactUSSection} />
  </>
);
