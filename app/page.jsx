import Header from '../components/Header';
import Hero from '../components/Hero';
import Ethiopa from '../components/Ethiopa';
import InteractiveMap from '../components/InteractiveMap';
import TitlePara from '../components/TitlePara';
import Mortality from '../components/MortalitySlider';
import Sustainability from '../components/Sustainability';

const Page = () => {
	return (
		<div className='w-screen min-h-screen h-auto bg-white'>
			<Header />
			<main className='w-full px-2 flex flex-col gap-16 md:px-16'>
				<Hero />
				<Ethiopa />
				<InteractiveMap />
				<TitlePara
					key='future-challenges'
					title='Reflecting on Progress and Future Challenges'
					para="As Ethiopia continues to navigate the complexities of abortion laws and women's rights, the impact of these laws on health outcomes and societal attitudes remains profound. Despite progress since the 2005 law, challenges persist. Future efforts must focus on improving access, reducing stigma, and ensuring that women's reproductive rights are upheld and protected."
				/>
				<Mortality />
				<Sustainability />
			</main>
		</div>
	);
};
export default Page;
