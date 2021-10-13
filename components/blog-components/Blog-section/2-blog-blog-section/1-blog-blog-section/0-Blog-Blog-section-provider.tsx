import React from "react";
import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { BlogBlogCatalogItem } from "./1-Blog-Blog-section-catalog-item";
import {BlogBlogCatalogHeader} from "./1-Blog-Blog-section-catalog-Header"
// ------------------------------ ---------------------- -------
interface AppProps {
  blogblogSection: any;
}

export const BlogBlogSectionProvider: React.FunctionComponent<AppProps> = ({
  blogblogSection: {                                                                                     
    blogBlogCatalogItem,
    blogBlogCatalogItemOne,
    blogblogCatalogHeader
  },
}) => {
  const renderItems = () => {
    return blogBlogCatalogItem
      .slice()
      .map((item: OneCatalogData) => (
        <BlogBlogCatalogItem
        blogBlogCatalogItemOne={blogBlogCatalogItemOne}
          blogBlogCatalogItem={item}
          key={item.Id}
        />
      ));
  };
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
      	<section className="section-spacing">
		<div className="container">
      <BlogBlogCatalogHeader
       blogblogCatalogHeader={ blogblogCatalogHeader[0]}
      /> 
          <BlogBlogCatalogItem
            blogBlogCatalogItemOne={blogBlogCatalogItemOne[0]}
       blogBlogCatalogItem={ blogBlogCatalogItem[0]}
          >
              {renderItems()}
        </BlogBlogCatalogItem>
         
        </div>
        </section>
    </>
  );
};
