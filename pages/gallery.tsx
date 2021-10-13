import React from "react";
import Head from "next/head";
// ---------------------------------------------------------------------
import Layout from "../layout/Layout";
import { GalleryProvider } from "./../components/gallery-components/0-GalleryProvider";
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
const Gallery: React.FunctionComponent<AppProps> = ({
  tagsAndSeo: {
    galleryPage: { Name, Description, Keywords, PageTitle },
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
        <GalleryProvider apiProps={data} />
      </Layout>
    </>
  );
};

export default Gallery;

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
        galleryPage: await DataService.getCurrentPageForCatchSEOTags("gallery"),
      },
      data: {
        gallerySlideSection: {
          gallerySlideItem: await DataService.filterCatalogDataBySectionField(
            "1-Gallery-Gallery-slide-section-Catalog-Item"
          ),
        },
        galleryGallerySection: {
          galleryGalleryCatalogItem: await DataService.filterCatalogDataBySectionField(
            "1-Gallery-Gallery-section-catalog-item"
          ),
          galleryGalleryCatalogHeader: await DataService.filterCatalogDataBySectionField(
            "1-Gallerry-Gallery-section-catalog-header"
          ),
        },
      },
    },
  };
};
