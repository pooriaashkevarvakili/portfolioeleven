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
              className="imgOne"
              src={data.ContentAttachment[1] + "?width=730&height=401.5"}
              alt=""
            />
            <h3 className="titleOne">
              <p className="titleTwo">{data.SecondHeader}</p>
            </h3>
            <p className="titleThree" style={{}}>
              {data.ShortDescription}
            </p>
          </div>
          <style jsx>
            {`
              .imgOne {
                position: relative;
                left: -30px;
              }
              .Div {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: flex-end;
              }
              .titleOne {
                direction: rtl;
                text-align: right;
                position: relative;
                left: -30px;
                font-family: "IRANSansWeb";
              }
              .titleTwo {
                margin-top: 20px;
                margin-left: -30px;
                color: black;
                font-family: IRANSansWeb;
              }
              .titleThree {
                direction: rtl;
                text-align: right;
                color: black;
                position: relative;
                left: -30px;
                margin-top: -20px;
                font-family: IRANSansWeb;
              }
              @media screen and (max-width: 700px) {
                .imgOne {
                  position: relative;
                  left: 0;
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
      `/blog-post/${item.LongDescription.split(" ").join("-")}`
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
        blogPost: await DataService.getCurrentPageForCatchSEOTags("blog-post"),
      },
      data: infoForUseInThisPageBaseOnId[0],
    },
  };
};

// ------------------------------ ---------------------- --------

export default sl;
