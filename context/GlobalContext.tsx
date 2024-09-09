'use client';

import { ReactNode, createContext, useContext, useState } from 'react';

// Create Context
interface GlobalContextValue {
	unreadCount: number;
	setUnreadCount: (count: number) => void;
}

const GlobalContext = createContext<GlobalContextValue | undefined>(undefined);

// Create Provider
export function GlobalProvider({ children }: { children: ReactNode }) {
	const [unreadCount, setUnreadCount] = useState(0);

	return (
		<GlobalContext.Provider value={{ unreadCount, setUnreadCount }}>
			{children}
		</GlobalContext.Provider>
	);
}

export function useGlobalContext() {
	const context = useContext(GlobalContext);
	if (context === undefined) {
		throw new Error(
			'useGlobalContext must be used within a GlobalProvider'
		);
	}
	return context;
}
