import Image from 'next/image';
import TitlePara from './TitlePara';
import mortalitySlider from '../public/maternal-slider.svg';

const Page = () => {
	return (
		<div className='w-full max-w-7xl flex flex-col gap-4 mx-auto'>
			{/* //? title */}
			<TitlePara key='maternal-mortality' title='Drop in Maternal Mortality' />
			{/* //? past future svg */}
			<div className='w-full aspect-video relative '>
				<div className='absolute inset-0 w-full h-full'>
					<Image src={mortalitySlider} alt='maternal-mortality' fill='true' />
				</div>
			</div>
		</div>
	);
};
export default Page;
