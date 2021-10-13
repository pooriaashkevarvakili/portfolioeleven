import {OneCatalogData} from "./../../../../../types/OneCatalogData";
import {GetStaticProps} from "next";
import React from "react";
import {ServiceServiceCatalogHeader} from "./1-Service-service-section-catalog-Header"

// ------------------------------ ---------------------- --------
interface AppProps {
    serviceServiceCatalogItem: OneCatalogData;
    serviceServiceCatalogHeader: OneCatalogData;

}

export const ServiceServiceCatalogItem: React.FunctionComponent<AppProps> = ({
    serviceServiceCatalogItem, serviceServiceCatalogHeader }) => {

    const { FirstHeader, SecondHeader, ShortDescription, LongDescription, ChildFirstHeader, ChildSecondHeader, ChildShortDescription, ContentAttachment } = serviceServiceCatalogItem
 
    return (
        <>
            <section className="section-spacing">
                <div className="container">
                    <ServiceServiceCatalogHeader serviceServiceCatalogHeader={serviceServiceCatalogHeader}/>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="service-item wow fadeIn">
                                <div className="thumb">
                                    <a><img src={ContentAttachment[2]+"?width=350&height=227.5"} alt="service"/></a>
                                </div>
                                <div className="service-info text-center">
                                    <h3
                                                style={{ direction: "rtl", textAlign: "right" }}

                                    ><a>{FirstHeader}</a></h3>
                                    <p
                                                style={{ direction: "rtl", textAlign: "right" }}

                                    >{SecondHeader}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-item wow fadeIn">
                                <div className="thumb">
                                    <a><img src={ContentAttachment[1]+"?width=350&height=227.5"} alt="service"/></a>
                                </div>
                                <div className="service-info text-center">
                                    <h3
                                                style={{ direction: "rtl", textAlign: "right" }}

                                    ><a>{ShortDescription}</a></h3>
                                    <p
                                                style={{ direction: "rtl", textAlign: "right" }}

                                    >{LongDescription}</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-item wow fadeIn">
                                <div className="thumb">
                                    <a><img src={ContentAttachment[0]+"?width=350&height=227.5"} alt="service"/></a>
                                </div>
                                <div className="service-info text-center">
                                    <h3
                                                style={{ direction: "rtl", textAlign: "right" }}

                                    ><a>{ChildFirstHeader}</a></h3>
                                    <p
                                                style={{ direction: "rtl", textAlign: "right" }}

                                    
                                    >{ChildSecondHeader}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <a href="/contact-us" className="btn btn-primary">{ChildShortDescription}</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
