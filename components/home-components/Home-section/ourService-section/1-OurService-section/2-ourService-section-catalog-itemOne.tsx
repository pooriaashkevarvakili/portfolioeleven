import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { GetStaticProps } from "next";
import React from "react";
import { OurServiceSectionCatalogHeader } from "./1-ourService-section-catalog-header";
// ------------------------------ ---------------------- --------
interface AppProps {
  ourServiceCatalogItemOne: OneCatalogData;
}
export const OurServiceCatalogItemOne: React.FunctionComponent<AppProps> = ({
  ourServiceCatalogItemOne,
}) => {
  const {
    FirstHeader,
    SecondHeader,

    ContentAttachment,
  } = ourServiceCatalogItemOne;
  
  return (
    <>
      <div className="col-md-4">
        <div className="service-item wow fadeIn">
          <div className="thumb">
            <a href="#">
              <img src={ContentAttachment[0]+"?width=350&height=227.5"} alt="serviceOne" />
            </a>
          </div>
          <div className="service-info text-center">
            <h3
              style={{direction:"rtl",textAlign:"right"}}
            >
              <a href="#"
                style={{direction:"rtl",textAlign:"right"}}
              >{FirstHeader}</a>
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
