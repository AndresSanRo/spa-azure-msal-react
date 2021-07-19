import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { loginRequest } from "../../services/msal/msalConfig";
import { IPublicClientApplication } from "@azure/msal-browser";
import { PrimaryButton } from "@fluentui/react";
import './SignInOutButton.css'

const handleLogin = (instance: IPublicClientApplication, isAuthenticated: boolean) => {
    if (isAuthenticated) {
        instance.logoutRedirect().catch(e => {
            console.error(e);
        });
    }
    else {
        instance.loginRedirect(loginRequest).catch(e => {
            console.error(e);
        });
    }    
}

export const SignInOutButton: React.FC = () => {
    const { instance } = useMsal();
    const isAuthenticated = useIsAuthenticated();

    return (
        <PrimaryButton className="SignInOutButton" onClick={() => handleLogin(instance, isAuthenticated)}> {isAuthenticated ? 'Sign out' : 'Sign in'} </PrimaryButton>
    );
}