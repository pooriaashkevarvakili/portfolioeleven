import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { GetStaticProps } from "next";
import React from "react";

// ------------------------------ ---------------------- --------
interface AppProps {
  priceingCatalogHeader: OneCatalogData;
}
export const PriceingCatalogHeader: React.FunctionComponent<AppProps> = ({
  priceingCatalogHeader,
}) => {
  
  const { FirstHeader, SecondHeader } = priceingCatalogHeader;
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="section-title ">
            <h2                               style={{direction:"rtl",textAlign:"right"}}
>
              <span
                              style={{direction:"rtl",textAlign:"right"}}

              >{FirstHeader}</span>
            </h2>
            <p
                            style={{direction:"rtl",textAlign:"right"}}

            >{SecondHeader}</p>
          </div>
        </div>
      </div>
    </>
  );
};
