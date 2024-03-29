import Head from 'next/head'
import * as React from 'react'
import '@/lib/env'

import ComponentPage from '@/app/components'
import Hero from '@/app/components/Hero/Hero'
import Hotdeal from '@/app/components/Hotdeal/Hotdeal'
import Navbar from '@/app/components/Navbar/Navbar'
import { DealsFilter } from '@/app/components/OtherDeals'
import { BannerCarouselProps, Deal, MainShortcut } from '@/app/types'
import ErrorBoundary from '@/app/util/ErrorBoundary'
import {
  getBannerData,
  getHotDealsData,
  getShortcutData,
} from '@/app/util/store'
import { SearchProvider } from '@/context/SearchcontextProvide'

const HomePage = async () => {
  let Bannerdata: BannerCarouselProps | null
  let ShortcutData: MainShortcut[] | null
  let HotdealData: Deal[] | []

  try {
    Bannerdata = await getBannerData()
    ShortcutData = await getShortcutData()
    HotdealData = await getHotDealsData().then((res) => res.items)
  } catch (error) {
    Bannerdata = null
    ShortcutData = null
    HotdealData = []
  }

  return (
    <ErrorBoundary>
      <main>
        <Head>
          <title>TesValley</title>
        </Head>
        <SearchProvider>
          <div className="mx-1 my-6 md:mx-10">
            <Navbar />
          </div>
          <div className="my-6 ">
            <hr />
            {Bannerdata ? (
              <ComponentPage data={Bannerdata} />
            ) : (
              <div className="error-message flex justify-center">
                Error fetching data. Please try again later.
              </div>
            )}
          </div>
          <div className="mx-auto mt-3 flex w-11/12 flex-col justify-center lg:w-8/12">
            {ShortcutData && <Hero data={ShortcutData} />}
            {HotdealData && <Hotdeal data={HotdealData[0]} />}
            {HotdealData && <DealsFilter deals={HotdealData.slice(1)} />}
          </div>
        </SearchProvider>
      </main>
    </ErrorBoundary>
  )
}

export default HomePage
