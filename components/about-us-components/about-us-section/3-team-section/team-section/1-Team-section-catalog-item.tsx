import { OneCatalogData } from "./../../../../../types/OneCatalogData";
import { GetStaticProps } from "next";
import React from "react";
import{TeamCatalogHeader} from "./1-Team-section-catalog-header"
// ------------------------------ ---------------------- --------
interface AppProps {
    teamCatalogItem:OneCatalogData;
    teamCatalogHeader:OneCatalogData;
    teamCatalogSocial:OneCatalogData;
    teamCatalogSocialOne:OneCatalogData;
}
export const TeamCatalogItem: React.FunctionComponent<AppProps> = ({
    teamCatalogItem,
    teamCatalogHeader,
    teamCatalogSocial,
    teamCatalogSocialOne
}) => {
  
  return (
    <>
        <section className="section-spacing inverse-bg">
            <div className="container">
          <TeamCatalogHeader teamCatalogHeader={teamCatalogHeader}/>
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="team wow fadeIn">
                            <div className="thumb">
                                <img src={teamCatalogItem.ContentAttachment[3]+"?width=255&height=242.39"} alt=""/>
                            </div>
                            <div className="team-info text-center">
                                  <h3
                                              style={{ direction: "rtl", textAlign: "right" }}

                                  >{teamCatalogItem.FirstHeader}</h3>
                                  <h6
                                              style={{ direction: "rtl", textAlign: "right" }}

                                  >{teamCatalogItem.SecondHeader}</h6>
                            </div>
                            <div className="team-overlay text-center">
                                  <h3
                                              style={{ direction: "rtl", textAlign: "right" }}

                                  >{teamCatalogItem.FirstHeader}</h3>
                                  <h6
                                              style={{ direction: "rtl", textAlign: "right" }}

                                  >{teamCatalogItem.SecondHeader}</h6>
                                  <ul
                                                  style={{ direction: "rtl", textAlign: "right" }}

                                      className="social-icons">
                                    <li><a href={teamCatalogSocial.SecondHeader} target="_blank"><i className="fa fa-telegram"></i></a></li>
                                    <li><a href={teamCatalogSocial.FirstHeader} target="_blank"><i className="fa fa-whatsapp"></i></a></li>
                                    <li><a href={teamCatalogSocial.ShortDescription} target="_blank"><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="team wow fadeIn">
                            <div className="thumb">
                                <img src={teamCatalogItem.ContentAttachment[2]+"?width=255&height=242.39"} alt=""/>
                            </div>
                            <div className="team-info text-center">
                                  <h3
                                              style={{ direction: "rtl", textAlign: "right" }}

                                  >{teamCatalogItem.ShortDescription}</h3>
                                  <h6
                                              style={{ direction: "rtl", textAlign: "right" }}

                                  >{teamCatalogItem.LongDescription}</h6>
                            </div>
                            <div className="team-overlay text-center">
                                  <h3
                                              style={{ direction: "rtl", textAlign: "right" }}

                                  >{teamCatalogItem.ShortDescription}</h3>
                                  <h6
                                              style={{ direction: "rtl", textAlign: "right" }}

                                  >{teamCatalogItem.LongDescription}</h6>
                                  <ul
                                                  style={{ direction: "rtl", textAlign: "right" }}

                                      className="social-icons">
                                    <li><a href={teamCatalogSocial.LongDescription} target="_blank"><i className="fa fa-telegram"></i></a></li>
                                    <li><a href={teamCatalogSocial.ChildFirstHeader} target="_blank"><i className="fa fa-whatsapp"></i></a></li>
                                    <li><a href={teamCatalogSocial.ChildSecondHeader} target="_blank"><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="team wow fadeIn">
                            <div className="thumb">
                                <img src={teamCatalogItem.ContentAttachment[1]+"?width=255&height=242.39"} alt=""/>
                            </div>
                            <div className="team-info text-center">
                                  <h3
                                              style={{ direction: "rtl", textAlign: "right" }}

                                  >{teamCatalogItem.ChildFirstHeader}</h3>
                                  <h6
                                              style={{ direction: "rtl", textAlign: "right" }}

                                  >{teamCatalogItem.ChildSecondHeader}</h6>
                            </div>
                            <div className="team-overlay text-center">
                                <h3
                                            style={{ direction: "rtl", textAlign: "right" }}

                                  >{teamCatalogItem.ChildFirstHeader}</h3>
                                  <h6
                                              style={{ direction: "rtl", textAlign: "right" }}

                                  >{teamCatalogItem.ChildSecondHeader}</h6>
                                <ul 
                                            style={{ direction: "rtl", textAlign: "right" }}

                                      className="social-icons">
                                    <li><a href={teamCatalogSocialOne.FirstHeader} target="_blank"><i className="fa fa-telegram"></i></a></li>
                                    <li><a href={teamCatalogSocialOne.SecondHeader} target="_blank"><i className="fa fa-whatsapp"></i></a></li>
                                    <li><a href={teamCatalogSocialOne.ShortDescription} target="_blank"><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="team wow fadeIn">
                            <div className="thumb">
                                <img src={teamCatalogItem.ContentAttachment[0]+"?width=255&height=242.39"} alt=""/>
                            </div>
                            <div className="team-info text-center">
                                <h3
                                            style={{ direction: "rtl", textAlign: "right" }}

                                  >{teamCatalogItem.ChildShortDescription}</h3>
                                  <h6
                                              style={{ direction: "rtl", textAlign: "right" }}

                                  >{teamCatalogItem.ChildLongDescription}</h6>
                            </div>
                            <div className="team-overlay text-center">
                                  <h3
                                              style={{ direction: "rtl", textAlign: "right" }}

                                  >{teamCatalogItem.ChildShortDescription}</h3>
                                  <h6
                                              style={{ direction: "rtl", textAlign: "right" }}

                                  >{teamCatalogItem.ChildLongDescription}</h6>
                                  <ul
                                                  style={{ direction: "rtl", textAlign: "right" }}

                                      className="social-icons">
                                    <li><a href={teamCatalogSocialOne.LongDescription} target="_blank"><i className="fa fa-telegram"></i></a></li>
                                    <li><a href={teamCatalogSocialOne.ChildFirstHeader} target="_blank"><i className="fa fa-whatsapp"></i></a></li>
                                    <li><a href={teamCatalogSocialOne.ChildSecondHeader} target="_blank"><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <a href="/contact-us" className="btn btn-primary">{teamCatalogSocial.ChildShortDescription}</a>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};
