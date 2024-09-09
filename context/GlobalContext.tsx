'use client';

import getUnreadMessageCount from '@/app/actions/getUnreadMessageCount';
import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react';
import { useSession } from 'next-auth/react';

// Create Context
interface GlobalContextValue {
	unreadCount: number;
	setUnreadCount: Dispatch<SetStateAction<number>>;
}

const GlobalContext = createContext<GlobalContextValue | undefined>(undefined);

// Create Provider
export function GlobalProvider({ children }: { children: ReactNode }) {
	const [unreadCount, setUnreadCount] = useState(0);

	const { data: session } = useSession();

	useEffect(() => {
		const getUnreadCount = async () => {
			if (session && session.user) {
				try {
					const res = await getUnreadMessageCount();
					if (res.count) {
						setUnreadCount(res.count);
					}
				} catch (error) {
					console.error(error);
				}
			}
		};
		getUnreadCount();
	}, [getUnreadMessageCount, session]);

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
