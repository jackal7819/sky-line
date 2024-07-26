'use client';

import Link from 'next/link';
import { FaBars, FaRegBell, FaRegUser } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
	const pathname = usePathname();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<nav className='border-b-2 border-b-white bg-amber-500'>
			<div className='px-2 mx-auto max-w-screen-2xl sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-20'>
					<div className='flex items-center md:hidden'>
						{/* MOBILE MENU BUTTON */}
						<FaBars
							size={32}
							className='duration-500 cursor-pointer hover:text-white'
							onClick={() => setIsMobileMenuOpen((prev) => !prev)}
						/>
					</div>
					<div className='flex items-center justify-center flex-1 md:items-stretch md:justify-start'>
						{/* LOGO */}
						<Link
							href='/'
							className='flex items-center justify-center p-1 text-xl font-semibold duration-300 bg-black rounded-md group hover:bg-white'
						>
							<span className='ml-1 mr-2 text-white duration-300 group-hover:text-amber-500'>
								Sky
							</span>
							<span className='flex items-center justify-center h-8 text-black duration-300 bg-white rounded w-14 group-hover:text-white group-hover:bg-amber-500'>
								Line
							</span>
						</Link>
						{/* DESKTOP MENU HIDDEN BELOW MD SCREENS */}
						<div className='hidden 2xl:text-xl md:ml-6 md:block 2xl:ml-20'>
							<div className='flex space-x-2 2xl:space-x-6'>
								<Link
									href='/'
									className={`hidden px-3 py-2 text-white duration-500 rounded-md hover:bg-white hover:text-amber-500 lg:block ${
										pathname === '/' && 'bg-black'
									}`}
								>
									Home
								</Link>
								<Link
									href='/properties'
									className={`px-3 py-2 text-white duration-500 rounded-md hover:bg-white hover:text-amber-500 ${
										pathname === '/properties' && 'bg-black'
									}`}
								>
									Properties
								</Link>
								{isLoggedIn && (
									<Link
										href='/properties/add'
										className={`px-3 py-2 text-white duration-500 rounded-md hover:bg-white hover:text-amber-500 ${
											pathname === '/properties/add' &&
											'bg-black'
										}`}
									>
										Add Property
									</Link>
								)}
							</div>
						</div>
					</div>

					{/* RIGHT SIDE MENU (LOGGED OUT) */}
					{!isLoggedIn && (
						<div className='items-center hidden md:flex md:ml-6 2xl:mr-6'>
							<button className='flex items-center gap-2 px-3 py-2 text-white duration-500 bg-black rounded-md hover:bg-white hover:text-amber-500'>
								<FcGoogle size={24} />
								<span>Login or Register</span>
							</button>
						</div>
					)}

					{/* RIGHT SIDE MENU (LOGGED IN) */}
					{isLoggedIn && (
						<div className='flex items-center pr-2 md:ml-6 md:pr-0'>
							<Link href='/messages' className='relative group'>
								<div className='duration-500 cursor-pointer hover:text-white'>
									<FaRegBell size={32} />
								</div>
								<span className='absolute top-0 right-0 inline-flex items-center justify-center text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full size-5'>
									2
								</span>
							</Link>
							{/* PROFILE DROPDOWN BUTTON */}
							<div className='relative ml-3 2xl:ml-6'>
								<div
									className='duration-500 cursor-pointer hover:text-white'
									onClick={() =>
										setIsProfileMenuOpen((prev) => !prev)
									}
								>
									<FaRegUser size={32} />
								</div>
								{/* PROFILE DROPDOWN */}
								{isProfileMenuOpen && (
									<div
										id='user-menu'
										className='absolute right-0 z-10 w-48 p-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
										role='menu'
										aria-orientation='vertical'
										aria-labelledby='user-menu-button'
										tabIndex={-1}
									>
										<Link
											href='/profile'
											className='block w-full px-4 py-2 text-sm text-left text-black duration-500 rounded-md hover:bg-amber-500 hover:text-white hover:px-6'
											role='menuitem'
											tabIndex={-1}
											id='user-menu-item-0'
											onClick={() =>
												setIsProfileMenuOpen(false)
											}
										>
											Your Profile
										</Link>
										<Link
											href='/properties/saved'
											className='block w-full px-4 py-2 text-sm text-left text-black duration-500 rounded-md hover:bg-amber-500 hover:text-white hover:px-6'
											role='menuitem'
											tabIndex={-1}
											id='user-menu-item-2'
										>
											Saved Properties
										</Link>
										<button
											className='block w-full px-4 py-2 text-sm text-left text-black duration-500 rounded-md hover:bg-amber-500 hover:text-white hover:px-6'
											role='menuitem'
											tabIndex={-1}
											id='user-menu-item-2'
										>
											Sign Out
										</button>
									</div>
								)}
							</div>
						</div>
					)}
				</div>
			</div>

			{/* MOBILE MENU, SHOW/HIDE ON MENU STATE */}
			{isMobileMenuOpen && (
				<div className='px-2 pt-2 pb-3 space-y-1' id='mobile-menu'>
					<Link
						href='/'
						className={`block px-3 py-2 text-base font-medium text-white duration-500 rounded-md hover:bg-white hover:text-amber-500 hover:px-6  ${
							pathname === '/' && 'bg-black'
						}`}
						onClick={() => setIsMobileMenuOpen(false)}
					>
						Home
					</Link>
					<Link
						href='/properties'
						className={`block px-3 py-2 text-base font-medium text-white duration-500 rounded-md hover:bg-white hover:text-amber-500 hover:px-6  ${
							pathname === '/properties' && 'bg-black'
						}`}
						onClick={() => setIsMobileMenuOpen(false)}
					>
						Properties
					</Link>
					{isLoggedIn && (
						<Link
							href='/properties/add'
							className={`block px-3 py-2 text-base font-medium text-white duration-500 rounded-md hover:bg-white hover:text-amber-500 hover:px-6  ${
								pathname === '/properties/add' && 'bg-black'
							}`}
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Add Property
						</Link>
					)}
					{!isLoggedIn && (
						<button
							className='block w-full px-3 py-2 text-base font-medium text-left text-white duration-500 rounded-md hover:bg-white hover:text-amber-500 hover:px-6'
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Login or Register
						</button>
					)}
				</div>
			)}
		</nav>
	);
}
