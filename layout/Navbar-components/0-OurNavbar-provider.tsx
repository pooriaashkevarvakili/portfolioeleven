import { OurNavbarSectionProvider } from "./1-OurNavbar-section/0-OurNavbar-section-provider";
// -------------------------------------------
interface AppProps {
  navbarStrings: any;
}
// -------------------------------------------
export const OurNavbarProvider: React.FunctionComponent<AppProps> = ({
  navbarStrings,
}) => {
  return (
    <>
      <OurNavbarSectionProvider navbarStrings={navbarStrings} />
    </>
  );
};
