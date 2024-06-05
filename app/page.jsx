import Header from '../components/Header';
import Hero from '../components/Hero';
import Ethiopa from '../components/Ethiopa';

const Page = () => {
	return (
		<div className='w-screen min-h-screen h-auto bg-white'>
			<Header />
			<main className='w-full px-4 flex flex-col gap-16 md:px-16'>
				<Hero />
				<Ethiopa />
			</main>
		</div>
	);
};
export default Page;
