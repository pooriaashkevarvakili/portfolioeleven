import React from "react";
import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { BlogBannerCatalogItem } from "./1-Blog-Blog-Banner-section-catalog-item";
// ------------------------------ ---------------------- -------
interface AppProps {
  blogBannerSection: any;
}

export const BlogBannerSectionProvider: React.FunctionComponent<AppProps> = ({
  blogBannerSection: {
    blogCatalogItem,


  },
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
      <BlogBannerCatalogItem

blogCatalogItem={ blogCatalogItem[0]}

      />
    </>
  );
};
