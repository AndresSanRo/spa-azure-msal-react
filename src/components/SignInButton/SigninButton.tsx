import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../services/msal/msalConfig";
import { PrimaryButton } from "@fluentui/react";
import { IPublicClientApplication } from "@azure/msal-browser";

function handleLogin(instance: IPublicClientApplication) {
    instance.loginPopup(loginRequest).catch(e => {
        console.error(e);
    });
}

export const SignInButton = () => {
    const { instance } = useMsal();

    return (
        <PrimaryButton onClick={() => handleLogin(instance)}> Sign in using Popup </PrimaryButton>
    );
}