import Link from 'next/link';
import { FaBars, FaRegBell, FaRegUser } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export default function Navbar() {
	return (
		<nav className='bg-amber-500'>
			<div className='px-2 mx-auto max-w-7xl sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-20'>
					<div className='flex items-center md:hidden'>
						{/* MOBILE MENU BUTTON */}
						<FaBars
							className='duration-500 cursor-pointer hover:text-white'
							size={32}
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
						<div className='hidden md:ml-6 md:block'>
							<div className='flex space-x-2'>
								<Link
									href='/'
									className='hidden px-3 py-2 text-white duration-500 bg-black rounded-md hover:bg-white hover:text-amber-500 lg:block'
								>
									Home
								</Link>
								<Link
									href='/properties'
									className='px-3 py-2 text-white duration-500 rounded-md hover:bg-white hover:text-amber-500'
								>
									Properties
								</Link>
								<Link
									href='/properties/add'
									className='px-3 py-2 text-white duration-500 rounded-md hover:bg-white hover:text-amber-500'
								>
									Add Property
								</Link>
							</div>
						</div>
					</div>

					{/* RIGHT SIDE MENU (LOGGED OUT) */}
					<div className='hidden md:block md:ml-6'>
						<div className='flex items-center'>
							<button className='flex items-center gap-2 px-3 py-2 text-white duration-500 bg-black rounded-md hover:bg-white hover:text-amber-500'>
								<FcGoogle size={24} />
								<span>Login or Register</span>
							</button>
						</div>
					</div>

					{/* RIGHT SIDE MENU (LOGGED IN) */}
					<div className='inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0'>
						<Link href='/messages' className='relative group'>
							<div className='duration-500 cursor-pointer hover:text-white'>
								<FaRegBell size={32} />
							</div>
							<span className='absolute top-0 right-0 inline-flex items-center justify-center text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full size-5'>
								2
							</span>
						</Link>
						{/* PROFILE DROPDOWN BUTTON */}
						<div className='relative ml-3'>
							<div className='duration-500 cursor-pointer hover:text-white'>
								<FaRegUser size={32} />
							</div>
							{/* PROFILE DROPDOWN */}
							<div
								id='user-menu'
								className='absolute right-0 z-10 hidden w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
								role='menu'
								aria-orientation='vertical'
								aria-labelledby='user-menu-button'
								tabIndex={-1}
							>
								<Link
									href='/profile'
									className='block px-4 py-2 text-sm text-gray-700'
									role='menuitem'
									tabIndex={-1}
									id='user-menu-item-0'
								>
									Your Profile
								</Link>
								<Link
									href='/properties/saved'
									className='block px-4 py-2 text-sm text-gray-700'
									role='menuitem'
									tabIndex={-1}
									id='user-menu-item-2'
								>
									Saved Properties
								</Link>
								<button
									className='block px-4 py-2 text-sm text-gray-700'
									role='menuitem'
									tabIndex={-1}
									id='user-menu-item-2'
								>
									Sign Out
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* MOBILE MENU, SHOW/HIDE ON MENU STATE */}
			<div id='mobile-menu'>
				<div className='px-2 pt-2 pb-3 space-y-1'>
					<Link
						href='/'
						className='block px-3 py-2 text-base font-medium text-white duration-500 bg-black rounded-md hover:bg-white hover:text-amber-500'
					>
						Home
					</Link>
					<Link
						href='/properties'
						className='block px-3 py-2 text-base font-medium text-white duration-500 rounded-md hover:bg-white hover:text-amber-500'
					>
						Properties
					</Link>
					<Link
						href='/properties/add'
						className='block px-3 py-2 text-base font-medium text-white duration-500 rounded-md hover:bg-white hover:text-amber-500'
					>
						Add Property
					</Link>
					<button className='block w-full px-3 py-2 text-base font-medium text-left text-white duration-500 rounded-md hover:bg-white hover:text-amber-500'>
						Login or Register
					</button>
				</div>
			</div>
		</nav>
	);
}
