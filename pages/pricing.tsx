import React from "react";
import Head from "next/head";
// ---------------------------------------------------------------------
import Layout from "../layout/Layout";
import { PricingProvider } from "./../components/pricing-components/0-pricingProvider";
import { DataService } from "../service/data.service";
import { OneSEOTagData } from "../types/OneSEOTagData";
import { InferGetStaticPropsType, GetStaticProps, NextPage } from "next";
import { PageNames } from "../constants/PageNames.enum";
import { OneCatalogData } from "../types/OneCatalogData";

// ---------------------------------------------------------------------

// export const config = { amp: true };
// ------------------------------ ---------------------- --------

interface PassingProps {}

type AppProps = NextPage &
  PassingProps &
  InferGetStaticPropsType<typeof getStaticProps>;

// ---------------------------------------------------------------------
const Pricing: React.FunctionComponent<AppProps> = ({
  tagsAndSeo: {
    pricingPage: { Name, Description, Keywords, PageTitle },
  },
  OurFooter,
  navbarStrings: { navbarStrings },
  data,
}) => {
  return (
    <>
      <Head>
        <head>
          <meta name="text" content={Name} />
          <meta name="description" content={Description} />
          <meta name="keywords" content={Keywords} />
        </head>
      </Head>
      <Layout
        OurFooter={OurFooter}
        navbarStrings={navbarStrings}
        titleName={PageTitle}
      >
        <PricingProvider apiProps={data} />
      </Layout>
    </>
  );
};

export default Pricing;

// ------------------------------ ---------------------- --------

export const getStaticProps: GetStaticProps = async () => {
  // for make sure data is available
  await DataService.getCatalogData();
  return {
    props: {
      navbarStrings: {
        navbarStrings: await DataService.filterCatalogDataBySectionField(
          "1-OurSidebar-Menu-section-catalog"
        ),
      },
      OurFooter: {
        OurFooter: await DataService.filterCatalogDataBySectionField(
          "1-OurFooter-AllRight-catalog"
        ),
        OurFooterAllRigtCatalog: await DataService.filterCatalogDataBySectionField(
          "2-OurFooter-AllRight-catalog"
        ),
        OurFooterSocialAllRightCatalog: await DataService.filterCatalogDataBySectionField(
          "1-OurFooter-Social-AllRightCatalog"
        ),
        OurFooterAllRigtCatalogOne: await DataService.filterCatalogDataBySectionField(
          "3-OurFooter-AllRight-catalog"
        ),
      },
      tagsAndSeo: {
        pricingPage: await DataService.getCurrentPageForCatchSEOTags("pricing"),
      },
      data: {
        pricingBannerSection: {
          pricingserviceCatalogItem: await DataService.filterCatalogDataBySectionField(
            "1-Pricing-Banner-section-catalog-item"
          ),
        },
        pricingpricingSection: {
          priceingPriceingCatalogHeader: await DataService.filterCatalogDataBySectionField(
            "1-Pricing-pricing-section-catalog-Header"
          ),
          priceingPriceingCatalogItem: await DataService.filterCatalogDataBySectionField(
            "1-Pricing-Banner-section-catalog-item"
          ),
          priceingPriceingCatalogItemOne: await DataService.filterCatalogDataBySectionField(
            "2-Pricing-pricing-section-catalog-itemOne"
          ),
          priceingPriceingCatalogItemTwo: await DataService.filterCatalogDataBySectionField(
            "3-Pricing-pricing-section-catalog-itemTwo"
          ),
          priceingPriceingCatalogItemThree: await DataService.filterCatalogDataBySectionField(
            "4-Pricing-pricing-section-catalog-itemThree"
          ),
        },
      },
    },
  };
};
