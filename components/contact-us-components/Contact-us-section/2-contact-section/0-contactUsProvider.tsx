import { ContactUsSectionProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const GalleryProvider: React.FunctionComponent<AppProps> = ({
  apiProps: {  contactUSSection },
}) => (
  <>
    <ContactUsSectionProvider  contactUSSection={ contactUSSection} />
  </>
);
