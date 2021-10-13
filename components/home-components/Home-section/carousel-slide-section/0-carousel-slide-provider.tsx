import { CarouselSlideSectionCatalogProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const CarouselSlideProvider: React.FunctionComponent<AppProps> = ({
  apiProps: { carouselSlideSection },
}) => (
  <>
    <CarouselSlideSectionCatalogProvider
      carouselSlideSection={carouselSlideSection}
    />
  </>
);
