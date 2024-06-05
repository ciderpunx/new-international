'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Header_hero from '../public/hero-shaky.png';
import { Roboto, Playfair_Display } from 'next/font/google';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700', '900'],
});
const playfair_display = Playfair_Display({
	subsets: ['latin'],
	weight: ['400', '500', '700', '900'],
	style: 'italic',
});
const Index = () => {
	return (
		<div className='flex flex-col w-full gap-4 mx-auto border-2 md:w-10/12'>
			{/* //? image */}
			<div className=' w-full aspect-video mx-auto relative '>
				<div className='absolute w-full h-full inset-0'>
					<Image
						src={Header_hero}
						fill='true'
						// width={200}
						// height={500}
						alt='header-hero'
					/>
					<div className='absolute z-40 bottom-2 left-0 right-0 m-auto flex flex-col  px-4'>
						<h1 className='text-2xl font-bold text-white'>ON SHAKY GROUND</h1>
						<div
							className={
								roboto.className +
								' text-xs text-[#c8c8c8] flex justify-start gap-1'
							}>
							<span className='text-xs'>By Maxine Beteridge Moes</span>
							<span className='text-xs'>.</span>
							<span className='text-xs'>14 June 2024</span>
						</div>
					</div>
				</div>
			</div>
			{/* //? quote */}
			<div className='container border-2 flex flex-col gap-2 text-left w-full max-w-5xl mx-auto'>
				<blockquote
					className={`${playfair_display.className} text-balance text-center text-base indent-5 relative  
					`}>
					&ldquo; We don&apos;t need a handful of people doing zero waste
					perfectly. We need millions of people doing it imperfectly.&rdquo;
				</blockquote>
				<cite
					className={`${roboto.className} text-[#666666] block text-xs text-center indent-5`}>
					- Anne Marie Bonneau, Zero Waste Chef
				</cite>
			</div>
		</div>
	);
};
export default Index;
