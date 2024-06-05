import { League_Gothic, Baskervville } from 'next/font/google';
// import loop_video from '../public/Map Loop Animation.mp4';
const league_gothic = League_Gothic({
	subsets: ['latin'],
});
const baskerville = Baskervville({
	subsets: ['latin'],
	weight: ['400'],
});

const Page = () => {
	return (
		<div className='w-full max-w-6xl border-2 flex flex-col gap-4 mx-auto'>
			<div className='flex flex-col gap-2'>
				<h2
					className={`${league_gothic.className} uppercase font-bold text-xl first-letter:text-4xl`}>
					The Struggle for safe abortion in Ethiopa
				</h2>
				<p
					className={`${baskerville.className} text-[#555555] indent-5  text-base md:text-xl `}>
					In Ethiopia, the fight for women&apos;s reproductive rights has been
					fraught with challenges, despite significant legal advancements. This
					article delves into the multifaceted issues surrounding abortion laws
					in Ethiopia, exploring the legal, social, and personal dimensions of
					this critical issue.
				</p>
			</div>
			<div className='relative w-full aspect-video bg-gray-500'>
				<div className='absolute inset-0 '>
					<video
						autoPlay
						loop
						// poster='/'
						// controls
						// contloop='true'
						mutedrols='true'
						muted
						width='100%'
						height='100%'>
						<source src='Map Loop Animation.mp4' type='video/mp4' />
					</video>
					{/* {/* <video src={loop_video} controls='false'></video> */}
				</div>
			</div>
		</div>
	);
};
export default Page;
