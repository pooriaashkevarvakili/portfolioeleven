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
              className="styleImg"
              src={data.ContentAttachment[0] + "?width=730&height=401.5"}
              alt=""
            />
            <h3
              className="titleOne"
              style={{ direction: "rtl", textAlign: "right" }}
            >
              {data.SecondHeader}
            </h3>
            <p className="titleTwo" style={{}}>
              {data.ShortDescription}
            </p>
          </div>
        </Layout>
        <style jsx>
          {`
            .Div {
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              align-items: flex-end;
            }
            .styleImg {
              position: relative;
              left: -30px;
            }
            .titleOne {
              margin-top: 40px;
              color: black;
              position: relative;
              left: -30px;
            }
            .titleTwo {
              direction: rtl;
              text-align: right;
              color: black;
              margin-top: 10px;
              position: relative;
              left: -30px;
            }
            @media screen and (max-width: 700px) {
              .styleImg {
                position: relative;
                left: -5px;
              }
            }
          `}
        </style>
      </>
    );
  }
};

export const getStaticPaths: GetStaticPaths<ParsedUrlQuery> = async () => {
  // ...
  const data = await DataService.filterCatalogDataBySectionField(
    "2-Blog-Blog-section-catalog-item"
  );

  const paths = data.map(
    (item: OneCatalogData) =>
      `/blog-post-two/${item.LongDescription.split(" ").join("-")}`
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
    "2-Blog-Blog-section-catalog-item"
  );

  let infoForUseInThisPageBaseOnId = blogBlogCatalogWithPicture.filter(
    (item: OneCatalogData) =>
      item.LongDescription.split(" ").join("-") === params!.id
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
          "blog-post-two"
        ),
      },
      data: infoForUseInThisPageBaseOnId[0],
    },
  };
};

// ------------------------------ ---------------------- --------

export default sl;
