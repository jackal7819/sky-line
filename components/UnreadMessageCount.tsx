import { useGlobalContext } from '@/context/GlobalContext';

export default function UnreadMessageCount() {
	const { unreadCount } = useGlobalContext();

	return (
		<span className='absolute top-0 right-0 inline-flex items-center justify-center pt-0.5 text-white transform translate-x-1/2 -translate-y-1/2 rounded-full font bg-rose-500 size-6'>
			{unreadCount}
		</span>
	);
}
