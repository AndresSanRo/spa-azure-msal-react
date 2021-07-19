export const msalConfig = {
  auth: {
    clientId: "950b996b-61ce-4ad3-942d-148765ba7f3f",
    authority: "0d661cb7-86bb-4456-aa93-dae4f732d40b",
    redirectUri: "http://localhost:3000",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: true,
  }
};

export const loginRequest = {
 scopes: ["User.Read"]
};

export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};