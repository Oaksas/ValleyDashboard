'use client';
import React from 'react';
import { FaStar } from 'react-icons/fa';

import NextImage from '@/components/NextImage';

import { Publication } from '@/app/types';

interface ItemCardProps {
  media: any;
  publication?: Publication;
  rating: number;
  description?: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
  media,
  publication,
  rating,
  description,
}) => {
  return (
    <div className="m-2 max-w-sm rounded-lg bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <NextImage
        useSkeleton={true}
        src={media?.uri}
        width="800"
        height="100"
        alt="Icon"
        className="w-full rounded-lg "
      />
      <div className="p-1">
        <a href="#">
          <h5 className="mb-2 flex items-center text-sm tracking-tight text-gray-900 dark:text-white md:text-lg">
            {description}
          </h5>
        </a>
        <p className="mb-3 flex items-center font-bold text-orange-500 dark:text-gray-400">
          {100}%, <span className="text-black">{100.0}</span>{' '}
        </p>

        <div className="flex items-center text-sm text-orange-400 dark:text-gray-300">
          {publication?.priceInfo.price}
        </div>
        <div className="flex items-center text-[15px] text-gray-400 dark:text-gray-300">
          <FaStar />

          <span className="">{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
