
import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { GetStaticProps } from "next";
import React from "react";

// ------------------------------ ---------------------- --------
interface AppProps {
	contactCatalogHeader: OneCatalogData;
  
}
export const ContactCatalogHeader: React.FunctionComponent<AppProps> = ({
  contactCatalogHeader
}) => {
  const { FirstHeader } = contactCatalogHeader
  
  return (
    <>
      
<div className="row">
<div className="col-md-12">
  <div className="section-title text-center">
            <h2
                        style={{ direction: "rtl", textAlign: "right" }}

            ><span>{FirstHeader}</span></h2>
  </div>
</div>
</div>
      </>

  )
    
}

