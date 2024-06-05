import { League_Gothic, Baskervville } from 'next/font/google';
const league_gothic = League_Gothic({
	subsets: ['latin'],
});
const baskerville = Baskervville({
	subsets: ['latin'],
	weight: ['400'],
});

const Page = ({ title, para }) => {
	return (
		<div className='flex flex-col gap-1 w-full max-w-6xl mx-auto'>
			<h2
				className={`${league_gothic.className} tracking-wide uppercase font-bold text-xl first-letter:text-4xl`}>
				{title}
			</h2>
			<p
				className={`${baskerville.className} text-[#555555] indent-5  text-base md:text-xl `}>
				{para}
			</p>
		</div>
	);
};
export default Page;
