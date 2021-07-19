import { AccountInfo } from "@azure/msal-browser";
import { useIsAuthenticated } from "@azure/msal-react";
import { msalInstance } from "../../services/msal/msalConfig";
import { SignInOutButton } from "../SignInOutButton"

const getUserName = (): string => {
    const myAccounts: AccountInfo[] = msalInstance.getAllAccounts();
    return 'Welcome ' + myAccounts[0].name!
}

export const UserArea: React.FC = () => {
    const isAuthenticated = useIsAuthenticated();

    return <div>{isAuthenticated ? getUserName() : <></>}<SignInOutButton /></div>
}