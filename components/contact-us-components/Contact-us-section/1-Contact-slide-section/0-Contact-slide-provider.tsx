import { ContactSlideSectionCatalogProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const CarouselSlideProvider: React.FunctionComponent<AppProps> = ({
  apiProps: {   contactSlideSection },
}) => (
  <>
    <ContactSlideSectionCatalogProvider
      contactSlideSection={  contactSlideSection}
    />
  </>
);
