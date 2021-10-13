import {
    ServiceBannerSectionProvider,
    ServiceserviceSectionProvider
} from ".";
import React from "react";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const ServiceProvider: React.FunctionComponent<AppProps> = ({
  apiProps: {
      serviceBannerSection, serviceserviceSection
  },
}) => (
  <>
<ServiceBannerSectionProvider serviceBannerSection={serviceBannerSection}/>
<ServiceserviceSectionProvider serviceserviceSection={serviceserviceSection}/>
  </>
);
