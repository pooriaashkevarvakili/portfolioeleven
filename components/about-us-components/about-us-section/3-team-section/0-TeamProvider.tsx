import { TeamSectionProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const TeamProvider: React.FunctionComponent<AppProps> = ({
  apiProps: {    teamSection },
}) => (
  <>
    <TeamSectionProvider  teamSection={   teamSection} />
  </>
);
