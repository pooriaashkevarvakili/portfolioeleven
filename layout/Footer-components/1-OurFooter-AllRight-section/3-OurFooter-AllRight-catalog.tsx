import { GetStaticProps, InferGetStaticPropsType } from "next";
import { OneCatalogData } from "../../../types/OneCatalogData";
// ------------------------------ ---------------------- --------
import { FaTelegram } from "react-icons/fa";

import React from "react";
interface PassingProps {
  OurFooterAllRigtCatalog: OneCatalogData;
}

type AppProps = PassingProps & InferGetStaticPropsType<typeof getStaticProps>;

// ------------------------------ ---------------------- --------

export const FooterSectionCatalogTwo: React.FunctionComponent<AppProps> = ({
  OurFooterAllRigtCatalog,
}) => {
  return (
    <>
      <ul style={{ direction: "rtl" }} className="bussiness-hour">
        <li>
          {OurFooterAllRigtCatalog.FirstHeader}{" "}
          <span className="pull-right">
            {OurFooterAllRigtCatalog.SecondHeader}
          </span>
        </li>
        <li>
          {OurFooterAllRigtCatalog.ShortDescription}{" "}
          <span className="pull-right">
            {OurFooterAllRigtCatalog.LongDescription}
          </span>
        </li>
        <li>
          {OurFooterAllRigtCatalog.ChildFirstHeader}{" "}
          <span className="pull-right">
            {OurFooterAllRigtCatalog.ChildSecondHeader}
          </span>
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
