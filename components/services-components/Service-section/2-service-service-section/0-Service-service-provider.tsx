import { ServiceserviceSectionProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const ServiceServiceProvider: React.FunctionComponent<AppProps> = ({
  apiProps: {    serviceserviceSection },
}) => (
  <>
    <ServiceserviceSectionProvider
        serviceserviceSection={    serviceserviceSection}
    />
  </>
);
