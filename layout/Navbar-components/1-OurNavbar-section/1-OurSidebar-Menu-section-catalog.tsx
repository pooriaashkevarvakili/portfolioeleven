import { DataService } from "../../../service/data.service";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { OneCatalogData } from "../../../types/OneCatalogData";
// ------------------------------ ---------------------- --------

interface PassingProps {
  navbarStrings: OneCatalogData;
}

type AppProps = PassingProps & InferGetStaticPropsType<typeof getStaticProps>;

// ------------------------------ ---------------------- --------

export const OurNavbarCatalog: React.FunctionComponent<AppProps> = ({
  navbarStrings,
}) => {
  const {
    FirstHeader,
    SecondHeader,
    ShortDescription,
    LongDescription,
    ChildFirstHeader,
    ChildSecondHeader,
ChildShortDescription,
    ContentAttachment,
  } = navbarStrings;
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={ContentAttachment[0]+"?width=134&height=32"} alt="Logo" />
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="main-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a
                  style={{direction:"rtl",textAlign:"right"}}
                  className="nav-link" href="/">
                  {FirstHeader}
                </a>
              </li>
              <li className="nav-item">
                <a
                    style={{direction:"rtl",textAlign:"right"}}
                  className="nav-link" href="/about-us">
                  {SecondHeader}
                </a>
              </li>
              <li className="nav-item">
                <a
                    style={{direction:"rtl",textAlign:"right"}}
                  className="nav-link" href="/services">
                  {ShortDescription}
                </a>
              </li>
              <li className="nav-item">
                <a
                    style={{direction:"rtl",textAlign:"right"}}
                  className="nav-link" href="/pricing">
                  {LongDescription}
                </a>
              </li>
              <li className="nav-item">
                <a
                    style={{direction:"rtl",textAlign:"right"}}
                  className="nav-link" href="/gallery">
                  {ChildFirstHeader}
                </a>
              </li>
              <li className="nav-item">
                <a
                    style={{direction:"rtl",textAlign:"right"}}
                  className="nav-link" href="/blog">
                  {ChildSecondHeader}
                </a>
              </li>
              <li className="nav-item">
                <a
                    style={{direction:"rtl",textAlign:"right"}}
                  className="nav-link" href="/contact-us">
                  {ChildShortDescription}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

// ---------------- -------------- ---------------- ------ --------

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
