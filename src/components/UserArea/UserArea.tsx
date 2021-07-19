import { AccountInfo, InteractionRequiredAuthError } from '@azure/msal-browser';
import { useIsAuthenticated } from '@azure/msal-react';
import { useEffect } from 'react';
import { loginRequest, msalInstance } from '../../services/msal/msalConfig';
import { SignInOutButton } from '../SignInOutButton';
import './UserArea.css';

interface UserAreaProps {
	setToken: (token: string) => void;
}

export const UserArea: React.FC<UserAreaProps> = (props) => {
	const isAuthenticated = useIsAuthenticated();

	useEffect(() => {
		if (isAuthenticated) {
			msalInstance
				.acquireTokenSilent({
					account: msalInstance.getAllAccounts()[0],
					scopes: loginRequest.scopes,
				})
				.then((token) => {
					props.setToken(token.accessToken);
				})
				.catch((error) => {
					if (error instanceof InteractionRequiredAuthError) {
						msalInstance
							.acquireTokenPopup(loginRequest)
							.then((token) => {
								props.setToken(token.accessToken);
							})
							.catch((error) => {
								console.log(error);
							});
					} else {
						console.log(error);
					}
				});
		}
		return () => {
			('');
		};
	}, [isAuthenticated]);

	const getUserName = (): string => {
		const myAccounts: AccountInfo[] = msalInstance.getAllAccounts();
		return 'Welcome ' + myAccounts[0].name!;
	};

	return (
		<div className="userArea">
			<div>
				{isAuthenticated ? <span>{getUserName()}</span> : <></>}
				<SignInOutButton />
			</div>
		</div>
	);
};
