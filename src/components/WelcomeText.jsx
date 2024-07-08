const WelcomeText = () => {
  return (
    <div className='flex flex-col w-full gap-3 px-5 mb-10 text-center md:px-16 md:gap-1'>
      <span className='text-xl font-bold md:text-3xl text-emerald-500'>
        Let's find you the perfect job!
      </span>
      <div className='md:w-[440px] w-[300px] h-[2px] rounded-sm mx-auto bg-emerald-700'></div>
      <span className='text-[15px] text-gray-600 font-medium'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, eius.
      </span>
    </div>
  );
};
export default WelcomeText;
