import { OneCatalogData } from "./../../../../../types/OneCatalogData";
import { GetStaticProps } from "next";
import React from "react";

// ------------------------------ ---------------------- --------
interface AppProps {
  serviceCatalogItem: OneCatalogData;

}
export const ServiceBannerCatalogItem: React.FunctionComponent<AppProps> = ({
  serviceCatalogItem,

}) => {

  const{FirstHeader,SecondHeader,ContentAttachment}=serviceCatalogItem
  return (
    <>
      <section className="inner-page-banner slider1" >
        <div className="page-banner-caption">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>{FirstHeader}</h1>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/">{SecondHeader}</a></li>
                  <li className="breadcrumb-item active">{FirstHeader}</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
       .slider1{
      background-image:url(${ContentAttachment[0]+"?width=1920&height=450"})
       }
        `}
      </style>
    </>
  );
};
