import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { GetStaticProps } from "next";
import React from "react";

// ------------------------------ ---------------------- --------
interface AppProps {
  chooseUSCatalogItem: OneCatalogData;
}
export const ChooseUSCatalogItem: React.FunctionComponent<AppProps> = ({
  chooseUSCatalogItem,
}) => {
  const {
    ContentAttachment,
    FirstHeader,
    SecondHeader,
    ShortDescription,
    LongDescription,
    ChildFirstHeader,
    ChildSecondHeader,
    ChildShortDescription,
    ChildLongDescription,
  } = chooseUSCatalogItem;

  return (
    <>
      <section className="section-spacing inverse-bg">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="img-block wow fadeIn">
                <img
                  src={ContentAttachment[0] + "?width=540&height=398.31"}
                  alt=""
                />
                <div className="play-button">
                  <a
                    href={ChildLongDescription}
                    data-toggle="modal"
                    data-target="#video-modal"
                  >
                    <i className="fa fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="text-block wow fadeIn">
                <h2 style={{ direction: "rtl", textAlign: "right" }}>
                  {FirstHeader}
                </h2>
                <p style={{ direction: "rtl", textAlign: "right" }}>
                  {SecondHeader}
                </p>
                <ul style={{ direction: "rtl", textAlign: "right" }}>
                  <li>{ShortDescription}</li>
                  <li>{LongDescription}</li>
                  <li>{ChildFirstHeader}</li>
                  <li>{ChildSecondHeader}</li>
                  <li>{ChildShortDescription}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
