import { ServiceBannerSectionProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const ServiceBannerProvider: React.FunctionComponent<AppProps> = ({
  apiProps: {   serviceBannerSection },
}) => (
  <>
    <ServiceBannerSectionProvider
        serviceBannerSection={  serviceBannerSection}
    />
  </>
);
