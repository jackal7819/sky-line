'use client';

import 'mapbox-gl/dist/mapbox-gl.css';

import Map, { Marker } from 'react-map-gl';
import { FaLocationDot } from 'react-icons/fa6';
import { IProperty } from '@/models/Property';
import { OutputFormat, fromAddress, setDefaults } from 'react-geocode';
import { useEffect, useState } from 'react';

import Spinner from './Spinner';

export default function PropertyMap({ property }: { property: IProperty }) {
	const [loading, setLoading] = useState(true);
	const [geocodeError, setGeocodeError] = useState(false);
	const [lat, setLat] = useState(0);
	const [lng, setLng] = useState(0);
	const [viewport, setViewport] = useState({
		latitude: 0,
		longitude: 0,
		zoom: 12,
		width: '100%',
		height: '500px',
	});

	setDefaults({
		key: process.env.NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY,
		language: 'en',
		region: 'us',
		outputFormat: OutputFormat.JSON,
	});

	useEffect(() => {
		const fetchCoords = async () => {
			try {
				const res = await fromAddress(
					`${property.location.street} ${property.location.city}, ${property.location.state} ${property.location.zipcode}`
				);

				// Check if there are any results
				if (res.results.length === 0) {
					setGeocodeError(true);
					console.log('No results found');
					return;
				}

				const { lat, lng } = res.results[0].geometry.location;
				setLat(lat);
				setLng(lng);
				setViewport({
					...viewport,
					latitude: lat,
					longitude: lng,
				});
			} catch (error) {
				console.log(error);
				setGeocodeError(true);
			} finally {
				setLoading(false);
			}
		};

		fetchCoords();
	}, []);

	if (loading) {
		return <Spinner />;
	}

	if (geocodeError) {
		return <div>No location data found</div>;
	}

	return (
		!loading && (
			<Map
				mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
				initialViewState={{
					longitude: lng,
					latitude: lat,
					zoom: 15,
				}}
				style={{ width: '100%', height: 500 }}
				mapStyle='mapbox://styles/mapbox/streets-v9'
			>
				<Marker longitude={lng} latitude={lat} anchor='bottom'>
					<FaLocationDot size={40} className='text-rose-500' />
				</Marker>
			</Map>
		)
	);
}
