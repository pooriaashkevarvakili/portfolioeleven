import {
  CarouselSlideSectionCatalogProvider,
  OurServiceSectionProvider,
  ChooseUSSectionProvider,
  PricingSecionProvider,
    TeamSecionProvider,
  OurGallerySectionProvider,
} from ".";
import React from "react";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const HomeProvider: React.FunctionComponent<AppProps> = ({
  apiProps: {
    carouselSlideSection,
    ourServiceSection,
    chooseUSSection,
    ourPriceingSection,
    ourGallerySection,
      teamSection
  },
}) => (
  <>
    <CarouselSlideSectionCatalogProvider
      carouselSlideSection={carouselSlideSection}
    />
    <OurServiceSectionProvider ourServiceSection={ourServiceSection} />

    <ChooseUSSectionProvider chooseUSSection={chooseUSSection} />

    <PricingSecionProvider ourPriceingSection={ourPriceingSection} />
    <OurGallerySectionProvider ourGallerySection={ourGallerySection} />
    <TeamSecionProvider teamSection={teamSection}/>
  </>
);
