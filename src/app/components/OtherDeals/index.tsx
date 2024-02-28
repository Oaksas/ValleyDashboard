'use client'
import OtherDeals from '@/app/components/OtherDeals/OtherDeals'
import { Deal } from '@/app/types'
import { useSearch } from '@/context/SearchcontextProvide'
import React from 'react'

export const DealsFilter: React.FC<Deal[]> = (deals) => {
  let filteredData: any;
  const { searchTerm } = useSearch();
  if (searchTerm === '') {
    filteredData = deals.deals
  }

  filteredData = deals.deals.filter((item) => item.type === searchTerm || item.viewType === searchTerm);
  console.log(filteredData)

  return (
    <>
      {
        filteredData.map((item: any, index: number) => (
          <OtherDeals key={index} data={item}
          />
        ))

      }
    </>

  )
}

