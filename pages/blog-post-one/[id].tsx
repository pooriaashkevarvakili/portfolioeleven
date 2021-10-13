import Head from "next/head";
import { InferGetStaticPropsType, GetStaticProps } from "next";
import { NextPage } from "next";
import { GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import slugify from "slugify";
import Layout from "./../../layout/Layout";
import { DataService } from "./../../service/data.service";
import { OneCatalogData } from "./../../types/OneCatalogData";
// ------------------------------ ---------------------- --------

// ------------------------------ ---------------------- --------

interface PassingProps {
  apiProps: any;
}

type AppProps = NextPage &
  PassingProps &
  InferGetStaticPropsType<typeof getStaticProps>;

// ---------------------------------------------------------------------
const sl: React.FunctionComponent<AppProps> = ({
  tagsAndSeo: {
    blogPost: { Name, Description, Keywords, PageTitle },
  },
  OurFooter,

  data,
  navbarStrings: { navbarStrings },
}) => {
  if (!data) {
    return (
      <>
        <div>loading ...</div>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <head>
            <meta name="text" content={Name} />
            <meta name="description" content={Description} />
            <meta name="keywords" content={Keywords} />
            <meta name="viewport" content="sfsdfsdl" />
          </head>
        </Head>
        <Layout
          OurFooter={OurFooter}
          navbarStrings={navbarStrings}
          titleName={PageTitle}
        >
          <div className="Div">
            <img
              src={data.ContentAttachment[0] + "?width=730&height=401.5"}
              alt=""
              className="imgOne"
            />

            <p className="titleOne">{data.ChildFirstHeader}</p>
            <p className="titleTwo" style={{}}>
              {data.ChildSecondHeader}
            </p>
          </div>
          <style jsx>
            {`
              .Div {
                display: flex;
                justify-content: flex-end;
                align-items: flex-end;
                flex-direction: column;
              }
              .imgOne {
                position: relative;
                left: -50px;
              }
              .titleOne {
                color: black;
                direction: rtl;
                text-align: right;
                position: relative;
                left: -50px;
              }
              .titleTwo {
                color: black;
                direction: rtl;
                text-align: right;
                position: relative;
                left: -50px;
              }

              @media screen and (max-width: 700px) {
                .imgOne {
                  position: relative;
                  left: 0px;
                }
                .titleOne {
                  position: relative;
                  top: 20px;
                }
              }
              @media screen and (max-width: 300px) {
                .titleOne {
                  position: relative;
                  left: -10px;
                }
                .titleTwo {
                  position: relative;
                  left: -10px;
                }
              }
            `}
          </style>
        </Layout>
      </>
    );
  }
};

export const getStaticPaths: GetStaticPaths<ParsedUrlQuery> = async () => {
  // ...
  const data = await DataService.filterCatalogDataBySectionField(
    "1-Blog-Blog-section-catalog-item"
  );

  const paths = data.map(
    (item: OneCatalogData) =>
      `/blog-post-one/${item.ChildLongDescription.split(" ").join("-")}`
  );

  return {
    paths,
    fallback: false,
  };
};
// ------------------------------ ---------------------- --------

export const getStaticProps: GetStaticProps = async ({ params }) => {
  await DataService.getCatalogData();

  const blogBlogCatalogWithPicture = await DataService.filterCatalogDataBySectionField(
    "1-Blog-Blog-section-catalog-item"
  );

  let infoForUseInThisPageBaseOnId = blogBlogCatalogWithPicture.filter(
    (item: OneCatalogData) =>
      item.ChildLongDescription.split(" ").join("-") === params!.id
  );

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
        blogPost: await DataService.getCurrentPageForCatchSEOTags(
          "blog-post-one"
        ),
      },
      data: infoForUseInThisPageBaseOnId[0],
    },
  };
};

// ------------------------------ ---------------------- --------

export default sl;
