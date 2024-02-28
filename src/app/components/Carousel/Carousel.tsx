import React from 'react';
import { Autoplay, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '@/styles/globals.css';

import Loading from '@/components/Loading';
import NextImage from '@/components/NextImage';

import { Banner, BannerCarouselProps } from '@/app/types/index';

const BannerCarousel: React.FC<BannerCarouselProps> = ({ data }) => {
  if (!data) {
    return <Loading />;
  }
  return (
    <div className="h-3/4">
      <Swiper
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        modules={[Navigation, Pagination, Mousewheel, Autoplay]}
        navigation={true}
        className="mySwiper"
      >
        {data.map((item: Banner, index: number) => (
          <SwiperSlide key={index}>
            <NextImage
              useSkeleton={true}
              src={
                window.innerWidth < 768 ? item.mobileImageUrl : item.pcImageUrl
              }
              width="800"
              height="100"
              alt="Icon"
              className="w-screen object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerCarousel;
