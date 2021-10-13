import {
  BlogBannerSectionProvider,BlogBlogSectionProvider
} from ".";
import React from "react";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const BlogProvider: React.FunctionComponent<AppProps> = ({
  apiProps: {
    blogBannerSection, blogblogSection
  },
}) => (
    <>
      <BlogBannerSectionProvider
      blogBannerSection={blogBannerSection}
      />
      <BlogBlogSectionProvider
      blogblogSection={blogblogSection}
      />
  </>
);
