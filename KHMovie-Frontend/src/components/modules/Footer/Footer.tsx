import React from 'react';
import Button from '~/components/common/Button/Button';
import Title from '~/components/common/Title/Title';

const Footer = () => {
  return (
    <div className="container-footer">
      <Title>Get the Best Experience on the APP</Title>
      <div className="flex justify-between w-[65%] mt-8 lg:flex-wrap lg:gap-4 md:gap-2 sm:gap-1">
        <Button className="text-white text-sm font-normal w-[160px] px-2 py-3 justify-center items-center rounded bg-[#23252B] lg:w-[100%]">
          <img src="./icons/phone.svg" alt="phone" />
          Phone
        </Button>
        <Button className="text-white text-sm font-normal w-[160px] px-2 py-3 justify-center items-center rounded bg-[#23252B] lg:w-[48%] md:w-[46%]">
          <img src="./icons/tv.svg" alt="tv" />
          TV
        </Button>
        <Button className="text-white text-sm font-normal w-[160px] px-2 py-3 justify-center items-center rounded bg-[#23252B] lg:w-[48%] md:w-[46%]">
          <img src="./icons/laptop.svg" alt="web" />
          Web
        </Button>
      </div>
      <div
        className="flex w-[65%] flex-col
       border-t border-[#9B9B9B] mt-8 pt-8"
      >
        <div className="hidden lg:flex lg:justify-between lg:mb-5 md:flex-col md:justify-center md:items-center md:gap-4">
          <div className="flex text-white items-center h-8 gap-x-2 px-[13px] rounded border border-[#9B9B9B]">
            <img src="./icons/language.svg" alt="language" />
            <p>English</p>
            <img src="./icons/down_arrow.svg" alt="down" />
          </div>
          <div className="flex gap-x-4">
            <img src="./icons/facebook_icon.svg" alt="facebook" />
            <img src="./icons/instagram.svg" alt="instagram" />
            <img src="./icons/twtter.svg" alt="twtter" />
          </div>
        </div>
        <div className="flex justify-between w-full md:hidden">
          <div className="flex flex-col gap-y-4">
            <p className="text-[#DDD] text-sm font-normal  mb-1">About iQIYI</p>
            <p className="text-[#999] text-xs font-normal">About us</p>
            <p className="text-[#999] text-xs font-normal">
              Products and Services
            </p>
            <p className="text-[#999] text-xs font-normal">Ways to Watch</p>
          </div>
          <div className="flex flex-col gap-y-4">
            <p className="text-[#DDD] text-sm font-normal  mb-1">Cooperation</p>
            <p className="text-[#999] text-xs font-normal">Advertise</p>
            <p className="text-[#999] text-xs font-normal">
              Corporate relations
            </p>
            <p className="text-[#999] text-xs font-normal">
              Preinstall Cooperation
            </p>
          </div>
          <div className="flex flex-col gap-y-4">
            <p className="text-[#DDD] text-sm font-normal  mb-1">
              Help and support
            </p>
            <p className="text-[#999] text-xs font-normal">Feedback</p>
            <p className="text-[#999] text-xs font-normal">
              Security Response Center
            </p>
            <p className="text-[#999] text-xs font-normal">FAQ</p>
          </div>
          <div className="flex flex-col gap-y-4">
            <p className="text-[#DDD] text-sm font-normal  mb-1">
              Terms of Service
            </p>
            <p className="text-[#999] text-xs font-normal">Privacy Policy</p>
            <p className="text-[#999] text-xs font-normal">Terms of Service</p>
          </div>
          <div className="flex text-white items-center h-8 gap-x-2 px-[13px] rounded border border-[#9B9B9B] lg:hidden">
            <img src="./icons/language.svg" alt="language" />
            <p>English</p>
            <img src="./icons/down_arrow.svg" alt="down" />
          </div>
        </div>
      </div>
      <div className="flex w-[65%] justify-between mt-5">
        <div className="w-[70%] lg:w-full">
          <p className="text-[#9B9B9B] text-xs font-normal mb-[10px]">
            Copyright © 2021 iQiyi All Rights Reserved
          </p>
          <p className="text-[#9B9B9B] text-xs font-normal">
            We use cookies to improve your experience on this site. By
            continuing to use our website, you agree to our use of cookies.
            Learn more iQIYI Privacy Policy
          </p>
        </div>
        <div className="flex gap-x-4 lg:hidden">
          <img src="./icons/facebook_icon.svg" alt="facebook" />
          <img src="./icons/instagram.svg" alt="instagram" />
          <img src="./icons/twtter.svg" alt="twtter" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
