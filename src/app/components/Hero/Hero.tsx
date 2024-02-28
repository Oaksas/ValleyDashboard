import React from 'react';

import NextImage from '@/components/NextImage';

import { MainShortcut } from '@/app/types';

type MainShortcutProps = {
  data: MainShortcut[];
};

const Hero: React.FC<MainShortcutProps> = ({ data }) => {
  return (
    <div className="mt-2 flex flex-wrap justify-between">
      {data.map((item: MainShortcut, index: number) => {
        return (
          <div key={index} className="flex flex-col items-center">
            <NextImage
              useSkeleton
              className="w-12 cursor-pointer md:w-12"
              src={item.imageUrl}
              width="150"
              height="150"
              alt="Icon"
            />{' '}
            <p className="text-xs">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Hero;
