import { Media } from '@/app/types'
import NextImage from '@/components/NextImage'
import React from 'react'
import { FaStar } from "react-icons/fa";


interface ItemCardProps {
  media: any;
  description: string;
  rating: number;
  otherprops?: any | null;
}

const ItemCard: React.FC<ItemCardProps> = ({ media, description, rating, otherprops }) => {
  if (otherprops?.data?.items && otherprops?.data?.items.length > 0) {
    console.log(otherprops?.data?.items.length);
  }
  return (

    <div className="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">

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
          <h5 className="mb-2 text-sm md:text-lg   tracking-tight text-gray-900 dark:text-white">{description}</h5>
        </a>
        {/* <p className="mb-3 font-bold text-orange-500 dark:text-gray-400">{otherprops?.items.?.priceInfo?.discountRate}%, <span className='text-black'>{publication?.title}</span> </p> */}

        <div className='flex items-center text-gray-400 dark:text-gray-300 text-[15px]'>
          <FaStar />

          {/* {rating > 0 && <span className="">{publication ? publication.rating : rating}</span>}   */}
        </div>

      </div>
    </div>
  )
}

export default ItemCard