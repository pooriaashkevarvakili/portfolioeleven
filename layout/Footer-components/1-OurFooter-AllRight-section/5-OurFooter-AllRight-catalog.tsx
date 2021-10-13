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

export const FooterSectionCatalogFour: React.FunctionComponent<AppProps> = ({
  OurFooterSocialAllRightCatalog,
}) => {
  return (
    <>
      <ul style={{ direction: "rtl", textAlign: "right" }}>
        <li>
          <a href="/about-us">
            {OurFooterSocialAllRightCatalog.ChildFirstHeader}
          </a>
        </li>
        <li>
          <a href="/services">
            {OurFooterSocialAllRightCatalog.ChildSecondHeader}
          </a>
        </li>
        <li>
          <a href="/gallery">
            {OurFooterSocialAllRightCatalog.ChildShortDescription}
          </a>
        </li>
        <li>
          <a href="/contact-us">
            {OurFooterSocialAllRightCatalog.ChildLongDescription}
          </a>
        </li>
      </ul>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
