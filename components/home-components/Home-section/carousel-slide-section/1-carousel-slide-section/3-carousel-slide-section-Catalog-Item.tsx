import { OneCatalogData } from "../../../../../types/OneCatalogData";

import { GetStaticProps } from "next";
import React from "react";
// ------------------------------ ---------------------- --------
interface AppProps {
  carouselSlideItemTwo: OneCatalogData;
}
export const CarouselSlideItemTwo: React.FunctionComponent<AppProps> = ({
  carouselSlideItemTwo,
}) => {

  const {
    FirstHeader,
    SecondHeader,
    ShortDescription,
    LongDescription,
    ContentAttachment,
  } = carouselSlideItemTwo;
  return (
    <>
      <div className="carousel-item slide2">
        <div className="banner-caption">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div
                  style={{direction:"rtl",textAlign:"right"}}
                  className="hero-text">
                  <h6
                    style={{direction:"rtl",textAlign:"right"}}
                    className="animated fadeInLeft">{FirstHeader}</h6>
                  <h1 className="animated fadeInLeft"
                  style={{direction:"rtl",textAlign:"right"}}
                  >{SecondHeader}</h1>
                  <p className="animated fadeInLeft"
                  style={{direction:"rtl",textAlign:"right"}}
                  >{ShortDescription}</p>
                  <a
                    href="/contact-us"
                    className="btn btn-primary animated fadeInLeft"
                  >
                    {LongDescription}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .slide2 {
            background-image: url(${ContentAttachment[0]+"?width=1920&height=700"});
          }
        `}
      </style>
    </>
  );
};
