import Image from 'next/image';
import sustainability_other from '../public/sustainability-other.jpg';
import { Playfair_Display } from 'next/font/google';

const playfair_display = Playfair_Display({
	subsets: ['latin'],
	weight: ['400', '500', '700', '900'],
	// style: 'italic',
});
const Page = () => {
	return (
		<div className='flex flex-col w-full gap-4 mx-auto border-2 md:w-10/12'>
			{/* //? sustainibility image */}
			<div className='w-full aspect-4/3  relative '>
				{/* //? image */}
				<div className='absolute inset-0 w-full h-full'>
					<Image
						src={sustainability_other}
						alt='maternal-mortality'
						fill='true'
					/>
				</div>
				{/* //? overlay */}
				<div className='absolute inset-0 z-30 bg-gray-950/20 '>
					<h2
						className={`${playfair_display.className} text-white text-balance indent-2 w-2/3 max-w-5xl mx-auto absolute bottom-4 left-0 right-0 text-lg `}>
						But it&apos;s not just about the materials - the way clothing is
						produced also plays a crucial role in sustainability.
					</h2>
				</div>
			</div>
		</div>
	);
};
export default Page;
