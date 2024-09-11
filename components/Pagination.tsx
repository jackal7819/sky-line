import Link from 'next/link';

interface PaginationProps {
	page: number;
	pageSize: number;
	totalItems: number;
}
export default function Pagination({
	page,
	pageSize,
	totalItems,
}: PaginationProps) {
	const totalPages = Math.ceil(totalItems / pageSize);
	return (
		<section className='flex items-center justify-center mx-auto mt-8 mb-2 max-w-screen-2xl'>
			{page > 1 && (
				<Link
					href={`/properties?page=${page - 1}`}
					className='w-24 px-2 py-1 mr-2 text-center duration-500 border-2 border-gray-300 rounded hover:border-amber-500'
				>
					Previous
				</Link>
			)}
			<span className='mx-2'>
				Page {page} of {totalPages}
			</span>
			{page < totalPages && (
				<Link
					href={`/properties?page=${page + 1}`}
					className='w-24 px-2 py-1 ml-2 text-center duration-500 border-2 border-gray-300 rounded hover:border-amber-500'
				>
					Next
				</Link>
			)}
		</section>
	);
}
