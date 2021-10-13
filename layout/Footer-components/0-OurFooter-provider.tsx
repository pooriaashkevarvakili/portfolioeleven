import { OurFooterAllRightSectionProvider } from "./1-OurFooter-AllRight-section/0-Footer-section-provider";
// -------------------------------------------
interface AppProps {
  OurFooter: any;
}
// -------------------------------------------
export const OurFooterProvider: React.FunctionComponent<AppProps> = ({
  OurFooter: {
    OurFooter,
    OurFooterAllRigtCatalog,
    OurFooterSocialAllRightCatalog,
    OurFooterAllRigtCatalogOne,
  },
}) => (
  <>
    <OurFooterAllRightSectionProvider
      OurFooterAllRigtCatalogOne={OurFooterAllRigtCatalogOne}
      OurFooterAllRigtCatalog={OurFooterAllRigtCatalog}
      OurFooter={OurFooter}
      OurFooterSocialAllRightCatalog={OurFooterSocialAllRightCatalog}
    />
  </>
);
