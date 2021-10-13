import { BannerSectionProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const BannerProvider: React.FunctionComponent<AppProps> = ({
  apiProps: {  bannerSection },
}) => (
  <>
    <BannerSectionProvider  bannerSection={ bannerSection} />
  </>
);
