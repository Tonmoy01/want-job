import { Link } from 'react-router-dom';

const Services = () => {
  const serviceList = [
    {
      id: 1,
      title: 'Service',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 2,
      title: 'Service',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 3,
      title: 'Service',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];

  return (
    <div className='flex flex-col items-center w-full gap-8 px-5 mt-16 mb-24 md:px-0'>
      <div className='flex flex-col gap-1 text-center'>
        <span className='text-2xl font-semibold text-emerald-500'>
          Our Services
        </span>
        <div className='w-[150px] h-[2px] rounded-sm mx-auto bg-emerald-700'></div>
        <p className='text-[15px] text-gray-600 max-w-[500px] leading-7'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, alias
          dolor.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse,
          alias dolor.
        </p>
      </div>
      <div className='flex md:w-[65%] my-0 mx-auto w-full items-center gap-8 md:flex-row flex-col'>
        {serviceList?.map((list, idx) => (
          <div
            className='flex flex-col items-start w-full gap-3 p-5 transition-all duration-200 bg-white border border-gray-200 shadow-md hover:bg-emerald-50 rounded-2xl'
            key={list.id}
          >
            <span className='font-semibold text-emerald-500'>{list.title}</span>
            <p className='text-[15px] leading-7 text-gray-700'>{list.desc}</p>
            <Link
              to='/'
              className='text-emerald-500 text-[15px] border-b-2 border-emerald-400'
            >
              Learn more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Services;
