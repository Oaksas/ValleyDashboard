'use client';

import React from 'react';

import Hamburger from '@/components/buttons/Hamburger';
import TextButton from '@/components/buttons/TextButton';
import NextImage from '@/components/NextImage';
import SearchNav from '@/components/SearchNav';

const Navbar: React.FC = () => {
  return (
    <nav className="my-4 flex items-center justify-between  md:gap-x-24 pb-2 md:justify-center ">
      <div className="flex items-center justify-between md:justify-center gap-x-2">
        <NextImage
          useSkeleton
          className="w-28 md:w-36"
          src="/svg/logo-mobile-new.svg"
          width="150"
          height="150"
          alt="Icon"
        />
        <div className="hidden md:block">
          <Hamburger />
        </div>
        <div className="hidden md:block">
          <TextButton className="cursor-pointer font-normal text-black hover:text-black">
            카테고리
          </TextButton>{' '}
        </div>
      </div>
      <div className="hidden md:block">
        <SearchNav />
      </div>
      <div>
        <div className=" hidden items-center justify-center gap-x-2 md:flex">
          <NextImage
            useSkeleton
            className="w-7 md:w-7"
            src="/svg/home-event.svg"
            width="50"
            height="50"
            alt="Icon"
          />
          <TextButton className="cursor-pointer font-normal text-black hover:text-black">
            Login / Sign up
          </TextButton>
        </div>
        <div className="flex gap-x-2 md:hidden">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.7049 16.0496L19.663 17.8001H5.06253L6.02069 16.0496C6.31075 15.5196 6.46278 14.9252 6.46278 14.3211V9.50013C6.46278 6.24165 9.1043 3.60012 12.3628 3.60012C15.6213 3.60012 18.2628 6.24164 18.2628 9.50012V14.3211C18.2628 14.9252 18.4148 15.5196 18.7049 16.0496ZM4.86278 9.50013C4.86278 5.35799 8.22065 2.00012 12.3628 2.00012C16.5049 2.00012 19.8628 5.35799 19.8628 9.50012V14.3211C19.8628 14.6567 19.9472 14.9869 20.1084 15.2813L21.5526 17.92C21.9174 18.5864 21.4351 19.4001 20.6754 19.4001H16.6058C16.5939 19.4335 16.5817 19.4669 16.5691 19.5C16.5535 19.5409 16.5374 19.5816 16.5206 19.6221C16.2945 20.1681 15.963 20.6641 15.5451 21.082C15.1273 21.4999 14.6312 21.8313 14.0852 22.0575C13.5393 22.2836 12.9541 22.4 12.3632 22.4C11.7722 22.4 11.187 22.2836 10.6411 22.0575C10.0951 21.8313 9.59904 21.4999 9.18118 21.082C8.76331 20.6641 8.43185 20.1681 8.2057 19.6221C8.18893 19.5816 8.17277 19.5409 8.15721 19.5C8.14459 19.4669 8.13237 19.4335 8.12055 19.4001H4.05012C3.29042 19.4001 2.80817 18.5864 3.17293 17.92L4.61718 15.2813C4.77832 14.9869 4.86278 14.6567 4.86278 14.3211V9.50013ZM14.7818 19.5C14.6748 19.6618 14.5516 19.8128 14.4138 19.9506C14.1445 20.2199 13.8248 20.4335 13.4729 20.5793C13.1211 20.725 12.744 20.8 12.3632 20.8C11.9823 20.8 11.6052 20.725 11.2534 20.5793C10.9015 20.4335 10.5818 20.2199 10.3125 19.9506C10.1747 19.8128 10.0515 19.6618 9.94448 19.5H14.7818Z"
                fill="#666666"
              />
            </svg>
          </div>{' '}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 18 20"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.4 8.5C14.4 12.0346 11.5346 14.9 8 14.9C4.46538 14.9 1.6 12.0346 1.6 8.5C1.6 4.96538 4.46538 2.1 8 2.1C11.5346 2.1 14.4 4.96538 14.4 8.5ZM12.49 15.1221C11.2098 15.9918 9.66426 16.5 8 16.5C3.58172 16.5 0 12.9183 0 8.5C0 4.08172 3.58172 0.5 8 0.5C12.4183 0.5 16 4.08172 16 8.5C16 10.6759 15.1313 12.649 13.7218 14.0912L17.5649 17.9343C17.8773 18.2467 17.8773 18.7533 17.5649 19.0657C17.2525 19.3781 16.746 19.3781 16.4335 19.0657L12.49 15.1221Z"
                fill="#666666"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
