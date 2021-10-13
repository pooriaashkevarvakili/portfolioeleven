import { GetStaticProps, InferGetStaticPropsType } from "next";
import { OneCatalogData } from "../../../types/OneCatalogData";
// ------------------------------ ---------------------- --------
import { FaTelegram } from "react-icons/fa";
import { FooterSectionCatalogOne } from "./2-OurFooter-AllRight-catalog";
import { FooterSectionCatalogTwo } from "./3-OurFooter-AllRight-catalog";
import { FooterSectionCatalogThree } from "./4-OurFooter-AllRight-catalog";
import { FooterSectionCatalogFour } from "./5-OurFooter-AllRight-catalog";
import React from "react";
interface PassingProps {
  OurFooter: OneCatalogData;
  OurFooterAllRigtCatalog: OneCatalogData;
  OurFooterSocialAllRightCatalog: OneCatalogData;
  OurFooterAllRigtCatalogOne: OneCatalogData;
}

type AppProps = PassingProps & InferGetStaticPropsType<typeof getStaticProps>;

// ------------------------------ ---------------------- --------

export const FooterSectionCatalog: React.FunctionComponent<AppProps> = ({
  OurFooter,
  OurFooterAllRigtCatalog,
  OurFooterSocialAllRightCatalog,
  OurFooterAllRigtCatalogOne,
}) => {
  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="footer-widget">
                  <h3 style={{ direction: "rtl", textAlign: "right" }}>
                    {OurFooter.FirstHeader}
                  </h3>
                  <p style={{ direction: "rtl", textAlign: "right" }}>
                    {OurFooter.SecondHeader}
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-widget">
                  <h3 style={{ direction: "rtl", textAlign: "right" }}>
                    {OurFooterSocialAllRightCatalog.LongDescription}
                  </h3>
                  <FooterSectionCatalogFour
                    OurFooterSocialAllRightCatalog={
                      OurFooterSocialAllRightCatalog
                    }
                  />
                </div>
              </div>
              <FooterSectionCatalogThree OurFooter={OurFooter} />
              <div className="col-md-3">
                <div className="footer-widget">
                  <h3 style={{ direction: "rtl", textAlign: "right" }}>
                    {OurFooter.ChildLongDescription}
                  </h3>
                  <FooterSectionCatalogTwo
                    OurFooterAllRigtCatalog={OurFooterAllRigtCatalog}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="copyright">
                  <p style={{ direction: "rtl", textAlign: "right" }}>
                    {OurFooterAllRigtCatalog.ChildShortDescription}
                  </p>
                </div>
              </div>
              <FooterSectionCatalogOne
                OurFooterSocialAllRightCatalog={OurFooterSocialAllRightCatalog}
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

// ---------------- -------------- ---------------- ------ --------

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
