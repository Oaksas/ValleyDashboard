import { Banner } from '@/app/types'

export const getImageUrl = (item: Banner) => {
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return item.mobileImageUrl
  } else {
    return item.pcImageUrl
  }
}
