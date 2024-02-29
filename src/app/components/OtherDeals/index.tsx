'use client'
import React from 'react'

import OtherDeals from '@/app/components/OtherDeals/OtherDeals'
import { Deal } from '@/app/types'
import { useSearch } from '@/context/SearchcontextProvide'

type DealsFilterProps = {
  deals: Deal[]
}
export const DealsFilter: React.FC<DealsFilterProps> = ({ deals }) => {
  let filteredData: Deal[] = []
  const { searchTerm } = useSearch()
  if (searchTerm === '') {
    filteredData = deals
  } else {
    filteredData = deals.filter(
      (item) =>
        item?.type?.toLowerCase() === searchTerm.toLowerCase() ||
        item?.viewType?.toLowerCase() === searchTerm.toLowerCase(),
    )
  }
  console.log('filteredData', filteredData)

  return (
    <>
      {filteredData.map((item: any, index: number) => (
        <OtherDeals key={index} data={item} />
      ))}
    </>
  )
}
