import React from "react";
import { OneCatalogData } from "./../../../../../types/OneCatalogData";
import { TeamCatalogItem } from "./1-Team-section-catalog-item";
// ------------------------------ ---------------------- -------
interface AppProps {
  teamSection: any;
}

export const TeamSectionProvider: React.FunctionComponent<AppProps> = ({   teamSection: { teamCatalogItem,  teamCatalogHeader,teamCatalogSocial,teamCatalogSocialOne
  },
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
<TeamCatalogItem
    teamCatalogHeader={  teamCatalogHeader[0]}
    teamCatalogItem={ teamCatalogItem[0]}
    teamCatalogSocial={teamCatalogSocial[0]}
    teamCatalogSocialOne={teamCatalogSocialOne[0]}
/>
    </>
  );
};
