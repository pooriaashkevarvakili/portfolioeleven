import React from "react";
import Head from "next/head";
// ---------------------------------------------------------------------
import Layout from "../layout/Layout";
import { AboutProvider } from "./../components/about-us-components/0-about-us-Provider";
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
const About: React.FunctionComponent<AppProps> = ({tagsAndSeo: {
    aboutPage: { Name, Description, Keywords, PageTitle },
}, OurFooter, navbarStrings: { navbarStrings }, data,}) => {
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
                <AboutProvider apiProps={data} />
            </Layout>
        </>
    );
};

export default About;

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
                aboutPage: await DataService.getCurrentPageForCatchSEOTags("about-us"),
            },
            data: {
                bannerSection:{
                    bannerCatalogItem: await DataService.filterCatalogDataBySectionField(
                        "1-about-Banner-section-catalog-item")
                },
                historySection:{
                    historyCatalogItem: await DataService.filterCatalogDataBySectionField(
                        "1-about-History-section-catalog-item")
                },
                teamSection:{
                    teamCatalogItem:await DataService.filterCatalogDataBySectionField(
                        "1-about-Team-section-catalog-item"
                    ),
                    teamCatalogHeader:await DataService.filterCatalogDataBySectionField(
                        "1-about-Team-section-catalog-header"),
                    teamCatalogSocial:await DataService.filterCatalogDataBySectionField(
                        "1-about-Team-section-catalog-Social"),
                    teamCatalogSocialOne:await DataService.filterCatalogDataBySectionField(
                        "2-about-Team-section-catalog-Social"),
                }

            },
        },
    };
};
