import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { GetStaticProps } from "next";
import React from "react";

// ------------------------------ ---------------------- --------
interface AppProps {
  ourGalleryCatalogHeader: OneCatalogData;
}
export const OurGalleryCatalogHeader: React.FunctionComponent<AppProps> = ({
  ourGalleryCatalogHeader,
}) => {
 
  const { FirstHeader, SecondHeader } = ourGalleryCatalogHeader;
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="section-title text-center">
            <h2
                        style={{ direction: "rtl", textAlign: "right" }}

            >
              <span>{FirstHeader}</span>
            </h2>
            <p
                        style={{ direction: "rtl", textAlign: "right" }}

            >{SecondHeader}</p>
          </div>
        </div>
      </div>
    </>
  );
};
