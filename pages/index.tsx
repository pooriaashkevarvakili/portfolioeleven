import React from "react";
import Head from "next/head";
// ---------------------------------------------------------------------
import Layout from "../layout/Layout";
import { HomeProvider } from "./../components/home-components/0-HomeProvider";
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
const Index: React.FunctionComponent<AppProps> = ({
  tagsAndSeo: {
    homePage: { Name, Description, Keywords, PageTitle },
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
        <HomeProvider apiProps={data} />
      </Layout>
    </>
  );
};

export default Index;

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
        homePage: await DataService.getCurrentPageForCatchSEOTags("home"),
      },
      data: {
        carouselSlideSection: {
          carouselSlideItemOne: await DataService.filterCatalogDataBySectionField(
            "2-carousel-slide-section-Catalog-Item"
          ),
          carouselSlideItemTwo: await DataService.filterCatalogDataBySectionField(
            "3-carousel-slide-section-Catalog-Item"
          ),
          carouselSlideItemThree: await DataService.filterCatalogDataBySectionField(
            "4-carousel-slide-section-Catalog-Item"
          ),
        },
        ourServiceSection: {
          ourServiceCatalogItem: await DataService.filterCatalogDataBySectionField(
            "1-OurService-section-catalog-item"
          ),
          ourServiceSectionCatalogHeader: await DataService.filterCatalogDataBySectionField(
            "1-ourService-section-catalog-header"
          ),
          ourServiceCatalogItemOne: await DataService.filterCatalogDataBySectionField(
            "2-ourService-section-catalog-itemOne"
          ),
          ourServiceCatalogItemTwo: await DataService.filterCatalogDataBySectionField(
            "3-ourService-section-catalog-itemTwo"
          ),
          ourServiceCatalogItemThree: await DataService.filterCatalogDataBySectionField(
            "4-ourService-section-catalog-item-Three"
          ),
        },
        chooseUSSection: {
          chooseUSCatalogItem: await DataService.filterCatalogDataBySectionField(
            "1-ChooseUs-section-catalog-item"
          ),
        },
        ourPriceingSection: {
          ourPriceingCatalogItem: await DataService.filterCatalogDataBySectionField(
            "1-ChooseUs-section-catalog-item"
          ),
          priceingCatalogHeader: await DataService.filterCatalogDataBySectionField(
            "1-priceing-section-catalog-header"
          ),
          priceingCatalogItemOne: await DataService.filterCatalogDataBySectionField(
            "2-priceing-section-catalog-item-One"
          ),
          priceingCatalogItemTwo: await DataService.filterCatalogDataBySectionField(
            "3-priceing-section-catalog-item-Two"
          ),
          priceingCatalogItemThree: await DataService.filterCatalogDataBySectionField(
            "4-priceing-section-catalog-item-Three"
          ),
        },
        ourGallerySection: {
          ourGalleryCatalogItem: await DataService.filterCatalogDataBySectionField(
            "1-OurGallery-section-catalog-item"
          ),
          ourGalleryCatalogHeader: await DataService.filterCatalogDataBySectionField(
            "1-OurGallerry-section-catalog-header"
          ),
        },
        teamSection: {
          teamCatalogHeader: await DataService.filterCatalogDataBySectionField(
            "1-Team-section-catalog-header"
          ),
          teamCatalogItem: await DataService.filterCatalogDataBySectionField(
            "1-Team-section-catalog-item"
          ),
          teamCatalogSocial: await DataService.filterCatalogDataBySectionField(
            "1-Team-section-catalog-social"
          ),
          teamCatalogSocialOne: await DataService.filterCatalogDataBySectionField(
            "2-Team-section-catalog-social"
          ),
        },
      },
    },
  };
};
