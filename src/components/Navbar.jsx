import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const navLinks = [
    { id: 1, title: 'Home', path: '/', active: true },
    { id: 2, title: 'About', path: '/', active: false },
    { id: 3, title: 'Listed Jobs', path: '/', active: false },
    { id: 4, title: 'Newsletter', path: '/', active: false },
    { id: 5, title: 'Contact', path: '/', active: false },
  ];

  return (
    <div className='w-full h-[60px] bg-white shadow-sm absolute top-0 flex z-10'>
      <div className='w-full md:px-[50px] px-[23px] flex items-center justify-between'>
        <div
          className='text-emerald-500 font-bold text-[28px] cursor-pointer md:ml-[12px]'
          onClick={() => navigate('/')}
        >
          Want <span className='text-emerald-300'>Job</span>
        </div>
        <div className='items-center hidden gap-6 md:flex'>
          {navLinks.map((navLink) => (
            <Link
              to={navLink.path}
              key={navLink.id}
              className={`font-medium text-[15px] ${navLink.active ? 'text-emerald-500' : 'text-[#828ea8]'
                } transition-all duration-200 hover:text-emerald-500`}
            >
              {navLink.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Navbar;

