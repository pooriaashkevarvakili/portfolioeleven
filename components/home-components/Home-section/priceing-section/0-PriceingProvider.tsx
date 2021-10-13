import { PricingSecionProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const PriceingProvider: React.FunctionComponent<AppProps> = ({
  apiProps: { ourPriceingSection },
}) => (
  <>
    <PricingSecionProvider ourPriceingSection={ourPriceingSection} />
  </>
);
