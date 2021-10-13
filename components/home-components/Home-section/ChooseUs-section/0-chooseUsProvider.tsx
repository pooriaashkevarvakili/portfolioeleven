import { ChooseUSSectionProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const ChooseUSProvider: React.FunctionComponent<AppProps> = ({
  apiProps: { chooseUSSection },
}) => (
  <>
    <ChooseUSSectionProvider chooseUSSection={chooseUSSection} />
  </>
);
