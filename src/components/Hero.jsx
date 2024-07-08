import bgImg from '../assets/bg-img.jpg';

const Hero = () => {
  return (
    <div
      className='w-full h-[80vh] flex items-center md:justify-between justify-center md:px-24 px-5 bg-cover bg-no-repeat bg-top relative mt-14'
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className='w-full h-[calc(80vh-7px)] z-10 bg-gray-900 opacity-60 absolute top-[7px] left-0'></div>
      <div className='z-50 flex flex-col gap-8'>
        <span className='text-5xl font-semibold text-gray-100'>
          Welcome To Job Finder
        </span>
        <p className='text-gray-200 max-w-[600px] leading-7'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit optio
          hic doloribus repudiandae assumenda inventore veritatis illum
          cupiditate quo quis!
        </p>
        <button className='w-40 p-3 text-white transition-all duration-200 rounded-full bg-emerald-500 hover:bg-emerald-700'>
          Find Jobs New
        </button>
      </div>
    </div>
  );
};

export default Hero;
