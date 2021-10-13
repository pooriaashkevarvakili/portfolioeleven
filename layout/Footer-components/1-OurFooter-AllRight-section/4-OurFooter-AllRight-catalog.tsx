import { GetStaticProps, InferGetStaticPropsType } from "next";
import { OneCatalogData } from "../../../types/OneCatalogData";
// ------------------------------ ---------------------- --------
import { FaTelegram } from "react-icons/fa";

import React from "react";
interface PassingProps {
  OurFooter: OneCatalogData;
}

type AppProps = PassingProps & InferGetStaticPropsType<typeof getStaticProps>;

// ------------------------------ ---------------------- --------

export const FooterSectionCatalogThree: React.FunctionComponent<AppProps> = ({
  OurFooter,
}) => {
  return (
    <>
      <div className="col-md-3">
        <div className="footer-widget">
          <h3 style={{ direction: "rtl", textAlign: "right" }}>
            {OurFooter.ShortDescription}
          </h3>
          <ul style={{ direction: "rtl", textAlign: "right" }}>
            <li>
              <i className="fa fa-send" aria-hidden="true"></i>
              {OurFooter.LongDescription}
            </li>
            <li>
              <i className="fa fa-phone" aria-hidden="true"></i>
              {OurFooter.ChildFirstHeader}
            </li>
            <li>
              <i className="fa fa-envelope-o" aria-hidden="true"></i>{" "}
              {OurFooter.ChildSecondHeader}
            </li>
            <li>
              <i className="fa fa-fax" aria-hidden="true"></i> Fax : 02
              {OurFooter.ChildShortDescription}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
