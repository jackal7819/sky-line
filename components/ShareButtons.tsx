'use client';

import {
	EmailIcon,
	EmailShareButton,
	FacebookIcon,
	FacebookShareButton,
	TwitterIcon,
	TwitterShareButton,
	WhatsappIcon,
	WhatsappShareButton,
} from 'react-share';
import { IProperty } from '@/models/Property';

export default function ShareButtons({ property }: { property: IProperty }) {
	const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/properties/${property._id}`;

	return (
		<>
			<h3 className='pt-2 text-xl font-bold text-center'>
				Share This Property:
			</h3>
			<div className='flex justify-center gap-3 pb-2'>
				<FacebookShareButton
					url={shareUrl}
					hashtag={`${property.type.replace(/\s/g, '')}ForRent`}
				>
					<FacebookIcon size={40} round />
				</FacebookShareButton>
				<TwitterShareButton
					url={shareUrl}
					title={property.name}
					hashtags={[`${property.type.replace(/\s/g, '')}ForRent`]}
				>
					<TwitterIcon size={40} round />
				</TwitterShareButton>
				<WhatsappShareButton
					url={shareUrl}
					title={property.name}
					separator='::'
				>
					<WhatsappIcon size={40} round />
				</WhatsappShareButton>
				<EmailShareButton
					url={shareUrl}
					subject={property.name}
					body={`Check out this property listing: ${shareUrl}`}
				>
					<EmailIcon size={40} round />
				</EmailShareButton>
			</div>
		</>
	);
}
