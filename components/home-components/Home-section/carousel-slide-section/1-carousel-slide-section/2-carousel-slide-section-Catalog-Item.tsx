import { OneCatalogData } from "../../../../../types/OneCatalogData";

import { GetStaticProps } from "next";
import React from "react";
// ------------------------------ ---------------------- --------
interface AppProps {
  carouselSlideItemOne: OneCatalogData;
}
export const CarouselSlideItemOne: React.FunctionComponent<AppProps> = ({
  carouselSlideItemOne,
}) => {
  const {
    FirstHeader,
    SecondHeader,
    ShortDescription,
    LongDescription,
    ContentAttachment,
  } = carouselSlideItemOne;
 
  return (
    <>
      <div className="carousel-item active slide1 ">
        <div className="banner-caption">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div style={{direction:"rtl",textAlign:"right"}} className="hero-text">
                  <h6 className="animated fadeInDown"
                  style={{direction:"rtl",textAlign:"right"}}
                  >{FirstHeader}</h6>
                  <h1 className="animated fadeInUp"
                  style={{direction:"rtl",textAlign:"right"}}
                  >{SecondHeader}</h1>
                  <p className="animated fadeInUp"
                  style={{direction:"rtl",textAlign:"right"}}
                  >{ShortDescription}</p>
                  <a
                    href="/contact-us"
                    className="btn btn-primary animated fadeInUp"
                    style={{direction:"rtl",textAlign:"right"}}
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
          .slide1 {
            background-image: url(${ContentAttachment[0]+"?width=1920&height=700"});
          }
        `}
      </style>
    </>
  );
};
