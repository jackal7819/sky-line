import Link from 'next/link';

type ButtonInfo = {
	text: string;
	link: string;
};

type InfoBoxProps = {
	title: string;
	text: string;
	backgroundColor: string;
	buttonInfo: ButtonInfo;
};

export default function InfoBox({
	title,
	text,
	backgroundColor,
	buttonInfo,
}: InfoBoxProps) {
	return (
		<div
			className='p-6 rounded-lg shadow-md'
			style={{ backgroundColor: backgroundColor }}
		>
			<h2 className='text-2xl font-bold'>{title}</h2>
			<p className='mt-2 mb-4'>{text}</p>
			<Link
				href={buttonInfo.link}
				className='inline-block px-4 py-2 text-white duration-500 bg-black rounded-lg hover:bg-amber-500'
			>
				{buttonInfo.text}
			</Link>
		</div>
	);
}
