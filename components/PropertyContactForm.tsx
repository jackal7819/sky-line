'use client';

import addMessage, { AddMessageResult } from '@/app/actions/addMessage';
import { IProperty } from '@/models/Property';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { useSession } from 'next-auth/react';

import SubmitMessageButton from './SubmitMessageButton'

export default function PropertyContactForm({
	property,
}: {
	property: IProperty;
}) {
	const { data: session } = useSession();

	const initialState: AddMessageResult = {
		submitted: false,
		error: undefined,
	};
	const [state, formAction] = useFormState(addMessage, initialState);

	useEffect(() => {
		if (state.error) {
			toast.error(state.error);
		}
		if (state.submitted) {
			toast.success('Message sent successfully');
		}
	}, [state]);

	if (state.submitted) {
		return (
			<p className='mb-4 text-center text-green-500'>
				Thank you for contacting us!
			</p>
		);
	}
	return (
		session && (
			<div className='p-6 bg-white rounded-lg shadow-md'>
				<h3 className='mb-6 text-xl font-bold'>
					Contact Property Manager
				</h3>
				<form action={formAction}>
					<input
						type='hidden'
						id='property'
						name='property'
						defaultValue={String(property._id)}
					/>
					<input
						type='hidden'
						id='recipient'
						name='recipient'
						defaultValue={String(property.owner)}
					/>
					<div className='mb-4'>
						<label
							className='block mb-2 text-sm font-bold text-gray-700'
							htmlFor='name'
						>
							Name:
						</label>
						<input
							className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
							id='name'
							name='name'
							type='text'
							placeholder='Enter your name'
							required
						/>
					</div>
					<div className='mb-4'>
						<label
							className='block mb-2 text-sm font-bold text-gray-700'
							htmlFor='email'
						>
							Email:
						</label>
						<input
							className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
							id='email'
							name='email'
							type='email'
							placeholder='Enter your email'
							required
						/>
					</div>
					<div className='mb-4'>
						<label
							className='block mb-2 text-sm font-bold text-gray-700'
							htmlFor='phone'
						>
							Phone:
						</label>
						<input
							className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
							id='phone'
							name='phone'
							type='text'
							placeholder='Enter your phone number'
						/>
					</div>
					<div className='mb-4'>
						<label
							className='block mb-2 text-sm font-bold text-gray-700'
							htmlFor='body'
						>
							Message:
						</label>
						<textarea
							className='w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none h-44 focus:outline-none focus:shadow-outline'
							id='body'
							name='body'
							placeholder='Enter your message'
						></textarea>
					</div>
					<div>
						<SubmitMessageButton />
					</div>
				</form>
			</div>
		)
	);
}
