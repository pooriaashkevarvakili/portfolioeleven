import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { GetStaticProps } from "next";
import React from "react";
import Link from "next/link";
import slugify from "slugify";
// ------------------------------ ---------------------- --------
interface AppProps {
  blogBlogCatalogItem: OneCatalogData;
  blogBlogCatalogItemOne: OneCatalogData;
}

export const BlogBlogCatalogItem: React.FunctionComponent<AppProps> = ({
  blogBlogCatalogItem,
  blogBlogCatalogItemOne,
}) => {
  return (
    <>
      <div className="row">
        <div className="col-md-8">
          <div className="news-block">
            <div className="news-thumb">
              <img
                src={
                  blogBlogCatalogItem.ContentAttachment[1] +
                  "?width=730&height=401.5"
                }
                alt=""
              />
              <div className="overlay">
                <Link
                  href="/blog-post/[id]"
                  as={`/blog-post/${blogBlogCatalogItem.LongDescription.split(
                    " "
                  ).join("-")}`}
                >
                  <a href="#">
                    <i className="fa fa-link"></i>
                  </a>
                </Link>
              </div>
            </div>
            <div className="news-bottom">
              <ul
                style={{ direction: "rtl", textAlign: "right" }}
                className="post-meta list-inline"
              >
                <li className="list-inline-item">
                  <i className="fa fa-calendar"></i>{" "}
                  {blogBlogCatalogItem.FirstHeader}
                </li>
              </ul>
              <h3 style={{ direction: "rtl", textAlign: "right" }}>
                <Link
                  href="/blog-post/[id]"
                  as={`/blog-post/${blogBlogCatalogItem.LongDescription.split(
                    " "
                  ).join("-")}`}
                >
                  <a href="#">{blogBlogCatalogItem.SecondHeader}</a>
                </Link>
              </h3>
              <p style={{ direction: "rtl", textAlign: "right" }}>
                {blogBlogCatalogItem.ShortDescription}
              </p>
            </div>
          </div>

          <div className="news-block">
            <div className="news-thumb">
              <img
                src={
                  blogBlogCatalogItem.ContentAttachment[0] +
                  "?width=730&height=401.5"
                }
                alt=""
              />
              <div className="overlay">
                <Link
                  href="/blog-post-one/[id]"
                  as={`/blog-post-one/${blogBlogCatalogItem.ChildLongDescription.split(
                    " "
                  ).join("-")}`}
                >
                  <a href="#">
                    <i className="fa fa-link"></i>
                  </a>
                </Link>
              </div>
            </div>
            <div className="news-bottom">
              <ul
                style={{ direction: "rtl", textAlign: "right" }}
                className="post-meta list-inline"
              >
                <li className="list-inline-item">
                  <i className="fa fa-calendar"></i>{" "}
                  {blogBlogCatalogItem.ChildShortDescription}
                </li>
              </ul>
              <h3 style={{ direction: "rtl", textAlign: "right" }}>
                <Link
                  href="/blog-post-one/[id]"
                  as={`/blog-post-one/${blogBlogCatalogItem.ChildLongDescription.split(
                    " "
                  ).join("-")}`}
                >
                  <a href="#">{blogBlogCatalogItem.ChildFirstHeader}</a>
                </Link>
              </h3>
              <p style={{ direction: "rtl", textAlign: "right" }}>
                {blogBlogCatalogItem.ChildSecondHeader}
              </p>
            </div>
          </div>
          <div className="news-block">
            <div className="news-thumb">
              <img
                src={
                  blogBlogCatalogItemOne.ContentAttachment[0] +
                  "?width=730&height=401.5"
                }
                alt=""
              />
              <div className="overlay">
                <Link
                  href="/blog-post-two/[id]"
                  as={`/blog-post-two/${blogBlogCatalogItemOne.LongDescription.split(
                    " "
                  ).join("-")}`}
                >
                  <a href="#">
                    <i className="fa fa-link"></i>
                  </a>
                </Link>
              </div>
            </div>
            <div className="news-bottom">
              <ul
                style={{ direction: "rtl", textAlign: "right" }}
                className="post-meta list-inline"
              >
                <li className="list-inline-item">
                  <i className="fa fa-calendar"></i>{" "}
                  {blogBlogCatalogItemOne.FirstHeader}
                </li>
              </ul>
              <h3 style={{ direction: "rtl", textAlign: "right" }}>
                <Link
                  href="/blog-post-two/[id]"
                  as={`/blog-post-two/${blogBlogCatalogItemOne.LongDescription.split(
                    " "
                  ).join("-")}`}
                >
                  <a href="#">{blogBlogCatalogItemOne.SecondHeader}</a>
                </Link>
              </h3>
              <p style={{ direction: "rtl", textAlign: "right" }}>
                {blogBlogCatalogItemOne.ShortDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
