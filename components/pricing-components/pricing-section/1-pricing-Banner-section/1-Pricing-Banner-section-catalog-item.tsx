import { OneCatalogData } from "./../../../../types/OneCatalogData";
import { GetStaticProps } from "next";
import React from "react";

// ------------------------------ ---------------------- --------
interface AppProps {
  pricingserviceCatalogItem: OneCatalogData;

}
export const PriceingBannerCatalogItem: React.FunctionComponent<AppProps> = ({
  pricingserviceCatalogItem,

}) => {


const{FirstHeader,SecondHeader,ContentAttachment,ShortDescription}=pricingserviceCatalogItem
  return (
    <>
      <section className="inner-page-banner slide1" >
        <div className="page-banner-caption">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>{ShortDescription}</h1>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/">{FirstHeader}</a></li>
                  <li className="breadcrumb-item active">{SecondHeader}</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
       .slide1{
      background-image:url(${ContentAttachment[0]+"?width=1920&height=450"})
       }
        `}
      </style>
    </>
  );
};
