import React from "react";
import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { OurServiceCatalogItem } from "./1-ourService-section-catalog-item";
// ------------------------------ ---------------------- -------
interface AppProps {
  ourServiceSectionCatalogHeader: OneCatalogData;
}

export const OurServiceSectionCatalogHeader: React.FunctionComponent<AppProps> = ({
  ourServiceSectionCatalogHeader,
}) => {
  const { FirstHeader, SecondHeader } = ourServiceSectionCatalogHeader;
  return (
    <>
     			<div className="row">
				<div className="col-md-12">
					<div className="section-title text-center">
            <h2
              style={{direction:"rtl",textAlign:"right"}}
            ><span
            style={{direction:"rtl",textAlign:"right"}}
            >{FirstHeader}</span></h2>
            <p
              style={{direction:"rtl",textAlign:"right"}}
            >{SecondHeader}</p>
					</div>
				</div>
			</div>
    </>
  );
};
