import { createContext, useState } from 'react';

export const AddUserContext = createContext();

export const AddUserProvider = (props) => {
	const [isAddUser, setIsAddUser] = useState(false);

	return (
		<AddUserContext.Provider value={isAddUser}>
			{props.children}
		</AddUserContext.Provider>
	)
}