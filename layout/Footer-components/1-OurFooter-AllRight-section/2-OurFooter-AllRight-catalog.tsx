import { GetStaticProps, InferGetStaticPropsType } from "next";
import { OneCatalogData } from "../../../types/OneCatalogData";
// ------------------------------ ---------------------- --------
import { FaTelegram } from "react-icons/fa";

import React from "react";
interface PassingProps {
  OurFooterSocialAllRightCatalog: OneCatalogData;
}

type AppProps = PassingProps & InferGetStaticPropsType<typeof getStaticProps>;

// ------------------------------ ---------------------- --------

export const FooterSectionCatalogOne: React.FunctionComponent<AppProps> = ({
  OurFooterSocialAllRightCatalog,
}) => {
  return (
    <div className="col-sm-12 col-md-6">
      <ul className="social-icons pull-right">
        <li>
          <a href={OurFooterSocialAllRightCatalog.SecondHeader} target="_blank">
            <i className="fa fa-telegram"></i>
          </a>
        </li>
        <li>
          <a
            href={OurFooterSocialAllRightCatalog.ShortDescription}
            target="_blank"
          >
            <i className="fa fa-whatsapp"></i>
          </a>
        </li>

        <li>
          <a href={OurFooterSocialAllRightCatalog.FirstHeader} target="_blank">
            <i className="fa fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
