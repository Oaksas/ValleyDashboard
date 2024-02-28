'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '@/styles/globals.css';

import ItemCard from '@/components/cards/ItemCard';

import { Deal } from '@/app/types';

type HotdealProps = {
  data: Deal;
};
const Hotdeal: React.FC<HotdealProps> = ({ data }) => {
  console.log('hot', data.media);
  return (
    <div className="mt-4 grid grid-cols-3 gap-6">
      <div className=" col-span-1 flex flex-col justify-between p-3">
        <div className="">
          <div className="mb-2 text-2xl">Hot Deal</div>
          <div className="text-sm text-gray-500">HAPPY HOUR</div>
        </div>

        <div className="flex gap-x-2">
          <ChevronLeft />
          <ChevronRight />
        </div>
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <Swiper
          slidesPerView={2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          loop={true}
          modules={[Navigation, Autoplay]}
          className="hotdealswiper"
        >
          {data.media.map((item: any, index: number) => (
            <SwiperSlide key={index}>
              <ItemCard
                media={item}
                description={data.description}
                rating={item.rating}
                publication={data.items[0]?.publication}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hotdeal;
