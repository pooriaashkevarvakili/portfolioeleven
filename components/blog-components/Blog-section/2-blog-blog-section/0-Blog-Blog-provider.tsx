import { BlogBlogSectionProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const BlogProvider: React.FunctionComponent<AppProps> = ({
  apiProps: {     blogblogSection },
}) => (
  <>
    <BlogBlogSectionProvider
         blogblogSection={     blogblogSection}
    />
  </>
);
