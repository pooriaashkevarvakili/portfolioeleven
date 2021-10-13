import { OurServiceSectionProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const CarouselSlideProvider: React.FunctionComponent<AppProps> = ({
  apiProps: { ourServiceSection },
}) => (
  <>
    <OurServiceSectionProvider ourServiceSection={ourServiceSection} />
  </>
);
