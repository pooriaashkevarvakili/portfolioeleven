// ------------------------------ ---------------------- --------

import { OneCatalogData } from "./../../../../../types/OneCatalogData";
import { GetStaticProps } from "next";
import {TeamCatalogItem} from "./1-Team-section-catalog-item"
// ------------------------------ ---------------------- --------
interface AppProps {
  teamSection: any;
}
export const TeamSecionProvider: React.FunctionComponent<AppProps> = ({
   teamSection: {  teamCatalogItem,teamCatalogHeader, teamCatalogSocial, teamCatalogSocialOne },
}) => {
  // ------------------------------ ---------------------- --------

  // ------------------------------ ---------------------- --------
  return (
    <TeamCatalogItem
        teamCatalogSocialOne={ teamCatalogSocialOne[0]}
        teamCatalogSocial={teamCatalogSocial[0]}
      teamCatalogItem={teamCatalogItem[0]}
      teamCatalogHeader={teamCatalogHeader[0]}
    />
  );
};


