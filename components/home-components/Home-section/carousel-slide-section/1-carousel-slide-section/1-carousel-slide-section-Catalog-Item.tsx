import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { CarouselSlideItemOne } from "./2-carousel-slide-section-Catalog-Item";
import { GetStaticProps } from "next";
import React from "react";
import { CarouselSlideItemTwo } from "./3-carousel-slide-section-Catalog-Item";
import { CarouselSlideItemThree } from "./4-carousel-slide-section-Catalog-Item";
// ------------------------------ ---------------------- --------
interface AppProps {
  carouselSlideItem: OneCatalogData;
  carouselSlideItemOne: OneCatalogData;
  carouselSlideItemTwo: OneCatalogData;
  carouselSlideItemThree: OneCatalogData;
}
export const CarouselSlideItem: React.FunctionComponent<AppProps> = ({
  carouselSlideItem,
  carouselSlideItemOne,
  carouselSlideItemTwo,
  carouselSlideItemThree,
}) => {
  return (
    <>
      <section
        className="carousel slide"
        id="banner"
        data-ride="carousel"
        data-pause="false"
      >
        <div className="carousel-inner">
          <CarouselSlideItemOne carouselSlideItemOne={carouselSlideItemOne} />

          <CarouselSlideItemTwo carouselSlideItemTwo={carouselSlideItemTwo} />

          <CarouselSlideItemThree
            carouselSlideItemThree={carouselSlideItemThree}
          />

          <ol className="carousel-indicators">
            <li data-target="#banner" data-slide-to="0" className="active"></li>
            <li data-target="#banner" data-slide-to="1"></li>
            <li data-target="#banner" data-slide-to="2"></li>
          </ol>
        </div>
      </section>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
