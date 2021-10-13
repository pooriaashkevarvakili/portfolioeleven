import { FooterSectionCatalog } from "./1-OurFooter-AllRight-catalog";

// ------------------------------ - --------------------- --------

interface AppProps {
  OurFooter: any;
  OurFooterAllRigtCatalog: any;
  OurFooterSocialAllRightCatalog: any;
  OurFooterAllRigtCatalogOne: any;
}

// ------------------------------ - --------------------- --------

export const OurFooterAllRightSectionProvider: React.FunctionComponent<AppProps> = ({
  OurFooter,
  OurFooterAllRigtCatalog,
  OurFooterSocialAllRightCatalog,
  OurFooterAllRigtCatalogOne,
}) => (
  <>
    <FooterSectionCatalog
      OurFooterAllRigtCatalogOne={OurFooterAllRigtCatalogOne[0]}
      OurFooter={OurFooter[0]}
      OurFooterAllRigtCatalog={OurFooterAllRigtCatalog[0]}
      OurFooterSocialAllRightCatalog={OurFooterSocialAllRightCatalog[0]}
    />
  </>
);
