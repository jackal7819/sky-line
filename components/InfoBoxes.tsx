import InfoBox from './InfoBox';

export default function InfoBoxes() {
	return (
		<section className='px-2 mx-auto max-w-screen-2xl sm:px-6 lg:px-8'>
			<div className='grid grid-cols-1 gap-4 py-4 rounded-lg md:grid-cols-2'>
				<InfoBox
					title='For Renters'
					text='Find your dream rental property. Bookmark properties and contact owners.'
					backgroundColor='gray-100'
					buttonInfo={{
						text: 'Browse Properties',
						link: '/properties',
						backgroundColor: 'black',
						backgroundHoverColor: 'amber-500',
					}}
				/>
				<InfoBox
					title='For Property Owners'
					text='List your properties and reach potential tenants. Rent
						as an airbnb or long term.'
					backgroundColor='blue-100'
					buttonInfo={{
						text: 'Add Property',
						link: '/properties/add',
						backgroundColor: 'amber-500',
						backgroundHoverColor: 'black',
					}}
				/>
			</div>
		</section>
	);
}
