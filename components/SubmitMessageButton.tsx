import { FaPaperPlane } from 'react-icons/fa6';
import { useFormStatus } from 'react-dom';

export default function SubmitMessageButton() {
	const { pending } = useFormStatus();

	return (
		<button
			className='flex items-center justify-center w-full gap-2 px-4 py-2 font-bold text-white duration-500 border-4 rounded-md bg-amber-500 hover:bg-white focus:outline-none focus:shadow-outline border-amber-500 hover:text-amber-500'
			type='submit'
			disabled={pending}
		>
			<FaPaperPlane /> {pending ? 'Sending...' : 'Send Message'}
		</button>
	);
}
