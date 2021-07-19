import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../services/msal/msalConfig";
import { IPublicClientApplication } from "@azure/msal-browser";
import { PrimaryButton } from "@fluentui/react";

function handleLogin(instance: IPublicClientApplication) {
    instance.loginRedirect(loginRequest).catch(e => {
        console.error(e);
    });
}

export const SignInButton = () => {
    const { instance } = useMsal();

    return (
        <PrimaryButton onClick={() => handleLogin(instance)}> Sign in </PrimaryButton>
    );
}