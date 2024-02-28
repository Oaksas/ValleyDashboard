import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import ComponentPage from '@/app/components';
import Hero from '@/app/components/Hero/Hero';
import Hotdeal from '@/app/components/Hotdeal/Hotdeal';
import Navbar from '@/app/components/Navbar/Navbar';
import OtherDeals from '@/app/components/OtherDeals/OtherDeals';
import { BannerCarouselProps, Deal, MainShortcut } from '@/app/types';
import {
  getBannerData,
  getHotDealsData,
  getShortcutData,
} from '@/app/util/store';

const HomePage = async () => {
  let Bannerdata: BannerCarouselProps | null;
  let ShortcutData: MainShortcut[] | null;
  let HotdealData: Deal | null;

  try {
    Bannerdata = await getBannerData();
    ShortcutData = await getShortcutData();
    HotdealData = await getHotDealsData();
  } catch (error) {
    Bannerdata = null;
    ShortcutData = null;
    HotdealData = null;
  }

  return (
    <main>
      <Head>
        <title>TesValley</title>
      </Head>
      <div className="mx-1 md:mx-10 my-6">
        <Navbar />
        <hr />
        {Bannerdata ? (
          <ComponentPage data={Bannerdata} />
        ) : (
          <div className="error-message">
            Error fetching data. Please try again later.
          </div>
        )}
      </div>
      <div className="mx-auto mt-3 flex w-11/12 flex-col justify-center lg:w-8/12">
        {ShortcutData && <Hero data={ShortcutData} />}
        {HotdealData && <Hotdeal data={HotdealData.items[0]} />}
        {HotdealData?.items &&
          HotdealData.items.length > 0 &&
          HotdealData.items
            .slice(1)
            .map((item: any, index: number) => (
              <OtherDeals key={index} data={item} />
            ))}
      </div>
    </main>
  );
};

export default HomePage;
