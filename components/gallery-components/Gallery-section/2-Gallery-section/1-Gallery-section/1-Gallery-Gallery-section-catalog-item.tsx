import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { GetStaticProps } from "next";
import React from "react";
import { GallerygalleryCatalogHeader } from "./1-Gallerry-Gallery-section-catalog-header";

// ------------------------------ ---------------------- --------
interface AppProps {
  galleryGalleryCatalogItem: OneCatalogData;
  galleryGalleryCatalogHeader: OneCatalogData;
  
}
export const GalleryCatalogItem: React.FunctionComponent<AppProps> = ({
  galleryGalleryCatalogItem,galleryGalleryCatalogHeader
 
}) => {

	const { FirstHeader,
		SecondHeader,
		ShortDescription,
		ContentAttachment } = galleryGalleryCatalogItem
  return (
    <>
     	<section className="section-spacing">
		<div className="container">
          <GallerygalleryCatalogHeader
          galleryGalleryCatalogHeader={galleryGalleryCatalogHeader}
          />
			<div className="row">
				<div className="col-sm-6 col-md-4">
					<div className="gallery-item wow fadeIn">
						<a href={ContentAttachment[0]+"?width=350&height=247.91"} className="venobox" data-gall="gallery">
							<img src={ContentAttachment[0]+"?width=350&height=247.91"} alt=""/>
									<div
										            

										className="gallery-caption text-center">
								<i className="fa fa-heart-o"></i>
										<p
										           

										>{FirstHeader}</p>
										<h3

										>{SecondHeader}</h3>
							</div>
						</a>
					</div>
				</div>
				
				<div className="col-sm-6 col-md-4">
					<div className="gallery-item wow fadeIn">
						<a href={ContentAttachment[1]+"?width=350&height=247.91"} className="venobox" data-gall="gallery">
							<img src={ContentAttachment[1]+"?width=350&height=247.91"} alt=""/>
							<div className="gallery-caption text-center">
								<i className="fa fa-heart-o"></i>
                    <p>{FirstHeader}</p>
                    <h3>{SecondHeader}</h3>
							</div>
						</a>
					</div>
				</div>
				
				<div className="col-sm-6 col-md-4">
					<div className="gallery-item wow fadeIn">
						<a href={ContentAttachment[2]+"?width=350&height=247.91"} className="venobox" data-gall="gallery">
							<img src={ContentAttachment[2]+"?width=350&height=247.91"} alt=""/>
							<div className="gallery-caption text-center">
								<i className="fa fa-heart-o"></i>
                    <p>{FirstHeader}</p>
                    <h3>{SecondHeader}</h3>
							</div>
						</a>
					</div>
				</div>
				
				<div className="col-sm-6 col-md-4">
					<div className="gallery-item wow fadeIn">
						<a href={ContentAttachment[3]+"?width=350&height=247.91"} className="venobox" data-gall="gallery">
							<img src={ContentAttachment[3]+"?width=350&height=247.91"} alt=""/>
							<div className="gallery-caption text-center">
								<i className="fa fa-heart-o"></i>
                    <p>{FirstHeader}</p>
                    <h3>{ShortDescription}</h3>
							</div>
						</a>
					</div>
				</div>
				
				<div className="col-sm-6 col-md-4">
					<div className="gallery-item wow fadeIn">
						<a href={ContentAttachment[4]+"?width=350&height=247.91"} className="venobox" data-gall="gallery">
							<img src={ContentAttachment[4]+"?width=350&height=247.91"} alt=""/>
							<div className="gallery-caption text-center">
								<i className="fa fa-heart-o"></i>
                    <p>{FirstHeader}</p>
                    <h3>{ShortDescription}</h3>
							</div>
						</a>
					</div>
				</div>
				
				<div className="col-sm-6 col-md-4">
					<div className="gallery-item wow fadeIn">
						<a href={ContentAttachment[5]+"?width=350&height=247.91"} className="venobox" data-gall="gallery">
							<img src={ContentAttachment[5]+"?width=350&height=247.91"} alt=""/>
							<div className="gallery-caption text-center">
								<i className="fa fa-heart-o"></i>
                    <p>{FirstHeader}</p>
                    <h3>{ShortDescription}</h3>
							</div>
						</a>
					</div>
				</div>
				<div className="col-sm-6 col-md-4">
					<div className="gallery-item wow fadeIn">
						<a href={ContentAttachment[0]+"?width=350&height=247.91"} className="venobox" data-gall="gallery">
							<img src={ContentAttachment[0]+"?width=350&height=247.91"} alt=""/>
							<div className="gallery-caption text-center">
								<i className="fa fa-heart-o"></i>
                    <p>{FirstHeader}</p>
                    <h3>{SecondHeader}</h3>
							</div>
						</a>
					</div>
				</div>
				
				<div className="col-sm-6 col-md-4">
					<div className="gallery-item wow fadeIn">
						<a href={ContentAttachment[1]+"?width=350&height=247.91"} className="venobox" data-gall="gallery">
							<img src={ContentAttachment[1]+"?width=350&height=247.91"} alt=""/>
							<div className="gallery-caption text-center">
								<i className="fa fa-heart-o"></i>
                    <p>{FirstHeader}</p>
                    <h3>{SecondHeader}</h3>
							</div>
						</a>
					</div>
				</div>
				
				<div className="col-sm-6 col-md-4">
					<div className="gallery-item wow fadeIn">
						<a href={ContentAttachment[2]+"?width=350&height=247.91"} className="venobox" data-gall="gallery">
							<img src={ContentAttachment[2]+"?width=350&height=247.91"} alt=""/>
							<div className="gallery-caption text-center">
								<i className="fa fa-heart-o"></i>
                    <p>{FirstHeader}</p>
                    <h3>{SecondHeader}</h3>
							</div>
						</a>
					</div>
				</div>
				
				<div className="col-sm-6 col-md-4">
					<div className="gallery-item wow fadeIn">
                <a href={ContentAttachment[3]+"?width=350&height=247.91"} className="venobox" data-gall="gallery">
							<img src={ContentAttachment[3]+"?width=350&height=247.91"} alt=""/>
							<div className="gallery-caption text-center">
								<i className="fa fa-heart-o"></i>
                    <p>{FirstHeader}</p>
                    <h3>{ShortDescription}</h3>
							</div>
						</a>
					</div>
				</div>
				
				<div className="col-sm-6 col-md-4">
					<div className="gallery-item wow fadeIn">
						<a href={ContentAttachment[4]+"?width=350&height=247.91"} className="venobox" data-gall="gallery">
							<img src={ContentAttachment[4]+"?width=350&height=247.91"} alt=""/>
							<div className="gallery-caption text-center">
								<i className="fa fa-heart-o"></i>
                    <p>{FirstHeader}</p>
                    <h3>{SecondHeader}</h3>
							</div>
						</a>
					</div>
				</div>
				
				<div className="col-sm-6 col-md-4">
					<div className="gallery-item wow fadeIn">
                <a href={ContentAttachment[5]+"?width=350&height=247.91"} className="venobox" data-gall="gallery">
							<img src={ContentAttachment[5]+"?width=350&height=247.91"} alt=""/>
							<div className="gallery-caption text-center">
								<i className="fa fa-heart-o"></i>
                    <p>{FirstHeader}</p>
                    <h3>{ShortDescription}</h3>
							</div>
						</a>
					</div>
				</div>
			</div>			
		</div>
	</section>

    </>
  );
};
