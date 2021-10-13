import { BlogBannerSectionProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const ServiceBannerProvider: React.FunctionComponent<AppProps> = ({
  apiProps: {     blogBannerSection },
}) => (
  <>
    <BlogBannerSectionProvider
          blogBannerSection={    blogBannerSection}
    />
  </>
);
