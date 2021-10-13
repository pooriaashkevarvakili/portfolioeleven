import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { GetStaticProps } from "next";
import React from "react";

// ------------------------------ ---------------------- --------
interface AppProps {
  blogCatalogItem: OneCatalogData;

}
export const BlogBannerCatalogItem: React.FunctionComponent<AppProps> = ({
  blogCatalogItem,

}) => {

	const { FirstHeader, SecondHeader,
		ShortDescription, ContentAttachment } = blogCatalogItem
  return (
    <>
     	<section className="inner-page-banner slide1">
		<div className="page-banner-caption">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
								<h1>{FirstHeader}</h1>
						<ol className="breadcrumb">
									<li className="breadcrumb-item"><a href="/">{SecondHeader}</a></li>
									<li className="breadcrumb-item active">{ShortDescription}</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
      </section>
      <style jsx>
        {`
       .slide1{
        background-image:url(${ContentAttachment[0]+"?width=1920&height=450"})}
        `}
      </style>
    </>
  );
};
