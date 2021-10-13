import {
  BannerSectionProvider,TeamSectionProvider
} from ".";
import React from "react";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const AboutProvider: React.FunctionComponent<AppProps> = ({
  apiProps: {
    bannerSection, historySection,teamSection
  },
}) => (
  <>
<BannerSectionProvider
    bannerSection={bannerSection}
/>

<TeamSectionProvider teamSection={teamSection}/>
  </>
);
