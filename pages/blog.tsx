import React from "react";
import Head from "next/head";
// ---------------------------------------------------------------------
import Layout from "../layout/Layout";
import { BlogProvider } from "./../components/blog-components/0-BlogProvider";
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
const Blog: React.FunctionComponent<AppProps> = ({
  tagsAndSeo: {
    blogPage: { Name, Description, Keywords, PageTitle },
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
        <BlogProvider apiProps={data} />
      </Layout>
    </>
  );
};

export default Blog;

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
        blogPage: await DataService.getCurrentPageForCatchSEOTags("blog"),
      },
      data: {
        blogBannerSection: {
          blogCatalogItem: await DataService.filterCatalogDataBySectionField(
            "1-Blog-Blog-Banner-section-catalog-item"
          ),
        },

        blogblogSection: {
          blogBlogCatalogItem: await DataService.filterCatalogDataBySectionField(
            "1-Blog-Blog-section-catalog-item"
          ),
          blogBlogCatalogItemOne: await DataService.filterCatalogDataBySectionField(
            "2-Blog-Blog-section-catalog-item"
          ),
          blogblogCatalogHeader: await DataService.filterCatalogDataBySectionField(
            "1-Blog-Blog-section-catalog-Header"
          ),
        },
      },
    },
  };
};
