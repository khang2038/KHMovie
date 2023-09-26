import Button from '~/components/common/Button/Button';
import Input from '~/components/common/Input/Input';
import Title from '~/components/common/Title/Title';

const Header = () => {
  return (
    <div className="container flex justify-between fixed h-[72px] md:h-[44px] md:px-4">
      <nav className="flex gap-x-[42px] items-center md:gap-x-[16px]">
        <label className="hidden md:inline" htmlFor="navbar-mobile__input">
          <img src="./icons/menu1.svg" alt="menu" />
        </label>
        <figure className="cursor-pointer md:w-[57px] md:h-[18px]">
          <img src="./icons/logo_movie.svg" alt="logo" />
        </figure>
        <Title level={1} className="text-base inline xl:hidden cursor-pointer ">
          For you
        </Title>
        <div className="itemNavLeft 2xl:hidden">
          <text className="textNavLeft">Drama</text>
        </div>
        <div className="itemNavLeft xl:hidden">
          <text className="textNavLeft">Love You Seven Times</text>
        </div>
        <div className="itemNavLeft 2xl:hidden">
          <text className="textNavLeft">Movie</text>
        </div>
        <div className="itemNavLeft 2xl:hidden">
          <text className="textNavLeft">Variety Show</text>
        </div>
        <div className="itemNavLeft gap-x-[5px] md:hidden">
          <text className="textNavLeft">More</text>
          <div className="w-[10px] h-[5px] border-[5px] text-white opacity-60"></div>
        </div>
      </nav>
      <nav className="flex items-center gap-x-[30px] md:w-full md:gap-x-[16px]">
        <div className="relative h-[36px] flex items-center md:w-[90%] md:ml-4">
          <Input
            className="bg-[#FFFFFF33] placeholder-[#FFFFFF66] py-2.5 pl-3 pr-[48px] text-sm border-none rounded caret-[#FFFFFF66] text-[#FFFFFF77] md:h-[28px] w-full"
            placeholder="Bảy Kiếp May Mắn"
          />
          <div className="iconSearch absolute right-[10px] top-[7px] cursor-pointer">
            <img src="./icons/search.svg" alt="search" />
          </div>
          <div className="absolute right-[40px] top-0 bottom-0 w-[1px] my-2 bg-[#FFFFFF66]"></div>
        </div>
        <figure className="itemNavRight md:hidden">
          <img src="./icons/history_logo.svg" alt="history" />
          <text className="textNavRight lg:hidden">History</text>
        </figure>
        <figure className="itemNavRight md:hidden">
          <img src="./icons/language_logo.svg" alt="language" />
          <text className="textNavRight lg:hidden">Language</text>
        </figure>
        <figure className="itemNavRight md:hidden">
          <img className="max-w-none" src="./icons/user.svg" alt="user" />
          <text className="textNavRight lg:hidden">Me</text>
        </figure>
        <Button className="btnNav text-white text-sm flex items-center justify-center gap-x-[4px] border-white border-[1px] hover:text-[#1CC749] hover:border-[#1CC749] lg:hidden md:flex md:h-[28px] md:text-[13px] md:bg-[#1CC749] md:border-none">
          <img
            className="filter-green"
            src="./icons/download.svg"
            alt="download"
          />
          APP
        </Button>
        <Button className="btnNav bg-[#F2BF83] text-sm gap-x-[6px] hover:bg-[#f3d0a9dc] md:hidden">
          <img src="./icons/vip.svg" alt="vip" />
          VIP
        </Button>
      </nav>
      <input
        type="checkbox"
        name=""
        id="navbar-mobile__input"
        className="hidden nav__input"
      />
      <label htmlFor="navbar-mobile__input" className="nav-overlay"></label>
      <div className="nav-mobile overflow-auto h-full">
        <div className="bg-[url('./images/bg_nav_mobile.png')] w-full h-[88px] bg-cover bg-no-repeat bg-center relative text-white ">
          <text className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            User
          </text>
        </div>
        <div className="bg-[#23252B] w-full px-5 py-3">
          <Button className="bg-[#F2BF83] h-[44px] text-[#23252B] flex items-center justify-center w-full text-sm font-bold">
            Join VIP
          </Button>
          <div className="flex flex-col gap-y-7 mt-7 text-white">
            <text>My Account</text>
            <text>Englist</text>
            <div className="w-full h-[1px] bg-white opacity-30"></div>
            <text>History</text>
            <text>Watch Later</text>
            <text>Reservation</text>
            <text>Subtitle Translation</text>
            <div className="w-full h-[1px] bg-white opacity-30"></div>
            <text>About iQIYI</text>
            <text>Cooperation</text>
            <text>Help and support</text>
            <text>Terms of Service</text>
            <text>Logout</text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
