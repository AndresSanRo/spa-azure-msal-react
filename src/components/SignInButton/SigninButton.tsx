import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../services/msal/msalConfig";
import { IPublicClientApplication } from "@azure/msal-browser";
import { PrimaryButton } from "@fluentui/react";
import './SigninButton.css'

const handleLogin = (instance: IPublicClientApplication) => {
    instance.loginRedirect(loginRequest).catch(e => {
        console.error(e);
    });
}

export const SignInButton: React.FC = () => {
    const { instance } = useMsal();

    return (
        <PrimaryButton className="SigninButton" onClick={() => handleLogin(instance)}> Sign in </PrimaryButton>
    );
}