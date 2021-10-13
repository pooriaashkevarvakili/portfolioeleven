import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { GetStaticProps } from "next";
import React from "react";
import { OurServiceCatalogItemOne } from "./2-ourService-section-catalog-itemOne";
import { OurServiceSectionCatalogHeader } from "./1-ourService-section-catalog-header";
// ------------------------------ ---------------------- --------
interface AppProps {
  ourServiceCatalogItemThree: OneCatalogData;
}
export const OurServiceCatalogItemThree: React.FunctionComponent<AppProps> = ({
  ourServiceCatalogItemThree,
}) => {
  const {
    FirstHeader,
    SecondHeader,
    ContentAttachment,
  } = ourServiceCatalogItemThree;

  return (
    <>
      <div className="col-md-4">
        <div className="service-item wow fadeIn">
          <div className="thumb">
            <a href="#">
              <img src={ContentAttachment[0]+"?width=350&height=227.5"} alt="serviceThree" />
            </a>
          </div>
          <div className="service-info text-center">
            <h3
              style={{direction:"rtl",textAlign:"right"}}
            >
              <a
                  style={{direction:"rtl",textAlign:"right"}}
                href="#">{FirstHeader}</a>
            </h3>
            <p
              style={{direction:"rtl",textAlign:"right"}}
            >{SecondHeader}</p>
          </div>
        </div>
      </div>
    </>
  );
};
