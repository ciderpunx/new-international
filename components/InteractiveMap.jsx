import Image from 'next/image';
import ParaTitle from './TitlePara';
const Page = () => {
	return (
		<div className='w-full flex flex-col gap-4 max-w-7xl border-2 mx-auto'>
			{/* //? svg */}
			<div className='relative w-full aspect-video border- border-violet-500'>
				<div className='absolute inset-0 w-full h-full'>
					<Image src='interactive-map.svg' fill='true' alt='interactive-map' />
				</div>
			</div>
			{/* //? hover elements */}
			<div className=' w-full min-h-24 h-auto gap-2 grid grid-cols-2 auto-rows-[60px]'>
				{mapData.map((x, index) => (
					<div
						key={index}
						className={`w-full capitalize text-sm last:col-span-2 px-1 font-semibold py-2  flex items-center h-full rounded-sm bg-[#ebf7f7] relative `}>
						{x.title}
						<div
							style={{
								background: x.accent,
							}}
							className={`absolute bottom-0 left-0 right-0 h-2 w-full z-40`}></div>
					</div>
				))}
			</div>
			{/* //? title and para */}
		</div>
	);
};
export default Page;

let mapData = [
	{
		id: 'map-one',
		title: 'on request',
		accent: '#7fbc6e',
	},
	{
		id: 'map-two',
		title: 'prohibited altogether',
		accent: '#000000',
	},
	{
		id: 'map-three',
		title: 'to preserve health',
		accent: '#1D357D',
	},
	{
		id: 'map-four',
		title: "to save a person's life",
		accent: '#b61f26',
	},

	{
		id: 'map-five',
		title: 'broad social or economic grounds',
		accent: '#6CDCDD',
	},
];
