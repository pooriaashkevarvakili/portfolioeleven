import React from "react";
import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { CarouselSlideItem } from "./1-carousel-slide-section-Catalog-Item";
// ------------------------------ ---------------------- -------
interface AppProps {
  carouselSlideSection: any;
}

export const CarouselSlideSectionCatalogProvider: React.FunctionComponent<AppProps> = ({
  carouselSlideSection: {
    carouselSlideItem,
    carouselSlideItemOne,
    carouselSlideItemTwo,
    carouselSlideItemThree,
  },
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
      <CarouselSlideItem
        carouselSlideItemThree={carouselSlideItemThree[0]}
        carouselSlideItem={carouselSlideItem}
        carouselSlideItemOne={carouselSlideItemOne[0]}
        carouselSlideItemTwo={carouselSlideItemTwo[0]}
      />
    </>
  );
};
