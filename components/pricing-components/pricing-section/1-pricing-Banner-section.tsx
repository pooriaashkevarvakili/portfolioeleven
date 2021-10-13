import { PricingBannerSectionProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const PricingBannerProvider: React.FunctionComponent<AppProps> = ({
  apiProps: {     pricingBannerSection},
}) => (
  <>
    <PricingBannerSectionProvider
        pricingBannerSection={    pricingBannerSection}
    />
  </>
);
