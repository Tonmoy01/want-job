import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const footerLinks = [
    { id: 1, title: 'About', path: '/' },
    { id: 2, title: 'Terms and Conditions', path: '/' },
    { id: 3, title: 'Newsletter', path: '/' },
    { id: 4, title: 'Services', path: '/' },
    { id: 5, title: 'Contact', path: '/' },
  ];

  return (
    <div className='w-full md:h-[60px] h-auto py-5 md:py-0 bg-white shadow-sm flex'>
      <div className='flex md:flex-row flex-col md:h-[60px] h-full w-full md:gap-0 gap-5 md:px-[65px] px-[23px] md:items-center justify-between items-start'>
        <div
          className='text-emerald-500 font-bold text-[28px] cursor-pointer md:ml-[12px]'
          onClick={() => navigate('/')}
        >
          Want <span className='text-emerald-300'>Job</span>
        </div>
        <div className='flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6'>
          {footerLinks.map((link) => (
            <Link
              to={link.path}
              key={link.id}
              className='font-medium text-[15px] text-[#828ea8] transition-all duration-200 hover:text-emerald-500'
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
