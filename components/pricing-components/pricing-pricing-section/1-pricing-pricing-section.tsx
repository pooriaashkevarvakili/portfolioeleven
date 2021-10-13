import { PricingPricingSectionProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const PricingPricingProvider: React.FunctionComponent<AppProps> = ({
  apiProps: {       pricingpricingSection},
}) => (
  <>
    <PricingPricingSectionProvider
        pricingpricingSection={      pricingpricingSection}
    />
  </>
);
