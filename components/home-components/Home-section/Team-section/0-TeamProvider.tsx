import { TeamSecionProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const TeamProvider: React.FunctionComponent<AppProps> = ({
  apiProps: { teamSection },
}) => (
  <>
    <TeamSecionProvider teamSection={teamSection} />
  </>
);
