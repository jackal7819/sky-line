import FeaturedProperties from '@/components/FeaturedProperties';
import Hero from '@/components/Hero';
import HomeProperties from '@/components/HomeProperties';
import InfoBoxes from '@/components/InfoBoxes';

export default function Home() {
	return (
		<>
			<Hero />
			<InfoBoxes />
			<FeaturedProperties />
			<HomeProperties />
		</>
	);
}
