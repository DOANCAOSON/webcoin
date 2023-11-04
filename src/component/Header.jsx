import { Link } from 'react-router-dom';
import myImage from '../assets/img/logo.png';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const handleSidebarToggles = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="flex w-[100%] justify-center">
        <div className="w-[100%] flex justify-center bg-bgcontainer">
          <div className='lg:w-[1400px] flex items-center justify-end py-[4px] px-[4px]'>
            <Link className='text-text text-[12px] sm:text-[13px] lg:text-[14px] font-medium'>
              Đăng nhập
            </Link>
            <div className='text-text text-[12px] sm:text-[13px] lg:text-[14px] mx-[16px]'>/</div>
            <Link className='text-text text-[12px] sm:text-[13px] lg:text-[14px] font-medium'>
              Đăng xuất
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-[100%] lg:justify-center mt-[10px] px-[20px]">
        <div className="w-[100%] h-[80px] sm:h-[100px] lg:h-[100px] lg:w-[1400px] flex items-center justify-between  px-[4px]">
          <div className=' lg:w-[500px]'>
            <div className='lg:w-[150px] lg:flex justify-center'>
              <Link to="/" className="logo block h-[60px] w-[60px] sm:h-[80px] sm:w-[80px]  lg:h-[80px] lg:w-[80px] ">
                <img src={myImage} alt="logo" />
              </Link>
            </div>
            <span className='text-[9px] hidden lg:inline-block'>
              Mua bán USDT nhanh chống và an toàn
            </span>
          </div>
          <div className='hidden flex-1 lg:flex items-center  justify-end  '>
            <Link to="/" className="px-[20px] py-[4px] mr-[4px] font-bold text-black rounded-md border-transparent border-[1px] hover:text-bgcontainer hover:border-boderhex transition duration-300 ease-in-out">
              Mua bán USDT
            </Link>
            <Link className="px-[20px] py-[4px] mr-[4px] font-bold text-black rounded-md border-transparent border-[1px] hover:text-bgcontainer hover:border-boderhex transition duration-300 ease-in-out">
              Hướng dẫn mua USDT
            </Link>
            <Link className="px-[20px] py-[4px] mr-[4px] font-bold text-black rounded-md border-transparent border-[1px] hover:text-bgcontainer hover:border-boderhex transition duration-300 ease-in-out">
              Tra cứu giao dịch
            </Link>
            <Link className="px-[20px] py-[4px] mr-[4px] font-bold text-black rounded-md border-transparent border-[1px] hover:text-bgcontainer hover:border-boderhex transition duration-300 ease-in-out">
              Tin tài Chính
            </Link>
          </div>
          <div className={`block lg:hidden`}>
            <div onClick={handleSidebarToggle}>
              <FaBars className='text-[26px] sm:text-[32px]' />
            </div>
          </div>

          {/* mobile */}
          <div className={`fixed top-0 left-0 bottom-0 right-0  ${isSidebarOpen ? '' : 'hidden'}`}>
            <div onClick={handleSidebarToggles} className='absolute top-0 left-0 bottom-0 right-0 z-20 bg-bgrba '></div>

            {/* Nội dung của sidebar */}
            <div className="absolute z-30 bg-white h-screen w-3/4 px-[20px] py-[60px] sm:px-[40px] sm:py-[80px]">
              <div className='mb-[16px]'>
                <Link className='font-bold text-[12px] sm:text-[16px]  hover:text-bgcontainer transition duration-200 ease-in-out'>
                  Mua bán USDT
                </Link>
              </div>
              <div className='mb-[16px]'>
                <Link className='font-bold text-[12px] sm:text-[16px]  hover:text-bgcontainer transition duration-200 ease-in-out'>
                  Hướng dẫn mua USDT
                </Link>
              </div>
              <div className='mb-[16px]'>
                <Link className='font-bold text-[12px] sm:text-[16px]  hover:text-bgcontainer transition duration-200 ease-in-out'>
                  Tra cứu giao dịch
                </Link>
              </div>
              <div className='mb-[16px]'>
                <Link className='font-bold text-[12px] sm:text-[16px]  hover:text-bgcontainer transition duration-200 ease-in-out'>
                  Tin tài Chính
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
