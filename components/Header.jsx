'use client';
import { League_Gothic } from 'next/font/google';
import header_logo from '../public/header_logo.svg';
import Image from 'next/image';
const league_gothic = League_Gothic({
	subsets: ['latin'],
});

const Page = () => {
	return (
		<header
			initial={{}}
			animate={{}}
			exit={{}}
			transition={{}}
			className={
				league_gothic.className +
				'bg-yellow w-screen h-24 items-center bg-[#dcf3f3] p-4 flex justify-between mb-8'
			}>
			<span className='bg-yellow-'>
				<Image
					src={header_logo}
					alt='New International logo'
					className='size-36'
				/>
			</span>
			<button className='size-14  grid place-items-center'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='size-10 text-red-600'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
					/>
				</svg>
			</button>
		</header>
	);
};
export default Page;
