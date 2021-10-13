import {
    PricingBannerSectionProvider,
    PricingPricingSectionProvider
} from ".";
import React from "react";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const PricingProvider: React.FunctionComponent<AppProps> = ({
  apiProps: {
      pricingBannerSection,   pricingpricingSection
  },
}) => (
  <>
<PricingBannerSectionProvider pricingBannerSection={pricingBannerSection}/>
<PricingPricingSectionProvider pricingpricingSection={   pricingpricingSection}/>
  </>
);
