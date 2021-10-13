import { GetStaticProps } from "next";
import { OneCatalogData } from "../../../../../types/OneCatalogData";

import React from "react";
// ------------------------------ ---------------------- --------
interface AppProps {
  carouselSlideItemThree: OneCatalogData;
}
export const CarouselSlideItemThree: React.FunctionComponent<AppProps> = ({
  carouselSlideItemThree,
}) => {
  const {
    FirstHeader,
    SecondHeader,
    ShortDescription,
    LongDescription,
    ContentAttachment,
  } = carouselSlideItemThree;

  return (
    <>
      <div className="carousel-item slide3">
        <div className="banner-caption">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="hero-text"
                style={{direction:"rtl",textAlign:"right"}}
                >
                  <h6 className="animated fadeInRight"
                  style={{direction:"rtl",textAlign:"right"}}
                  >{FirstHeader}</h6>
                  <h1 className="animated fadeInRight"
                  style={{direction:"rtl",textAlign:"right"}}
                  >{SecondHeader}</h1>
                  <p className="animated fadeInRight"
                  style={{direction:"rtl",textAlign:"right"}}
                  >{ShortDescription}</p>
                  <a
                    href="/contact-us"
                    className="btn btn-primary animated fadeInRight"
                  >
                    {LongDescription}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .slide3 {
            background-image: url(${ContentAttachment[0]+"?width=1920&height=700"});
          }
        `}</style>
      </div>
    </>
  );
};
