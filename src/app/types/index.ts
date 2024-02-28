export type Banner = {
  mainBannerId: number;
  title: string;
  sort: number;
  pcImageUrl: string;
  mobileImageUrl: string;
  linkUrl: string;
  startDate: string;
  endDate: string;
  creator: string;
  updater: string;
  deleter: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

export interface BannerCarouselProps {
  data: Banner[];
}

export interface MainShortcut {
  mainShortcutId: number;
  title: string;
  sort: number;
  imageUrl: string;
  linkUrl: string;
  creator: string;
  updater: string;
  deleter: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface Deal {
  id: number;
  type: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  trialPeriod: null | any;
  installmentPrice: null | any;
  installmentPeriod: null | any;
  rating: number;
  startDate: null | string;
  endDate: null | string;
  viewType: null | any;
  createdAt: string;
  items: Item[] | [];
  media: Media[];

  thumbnail: Media;
  taggings: any[];
  singleCollections: any[];
}


export interface Item {
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  uuid: string;
  name: string;
  body: null | string;
  collectionId: number;
  key: string;
  seq: number;
  entityType: string;
  entityId: number;
  optionKey: null | string;
  publication: Publication;
}

export interface Publication {
  id: number;
  title: string;
  code: string;
  productId: number;
  prdType: number;
  detailEntity: string;
  content: string;
  offeringType: string;
  rating: number;
  isExistResidual: boolean;
  isAdult: number;
  preface: string;
  prefaceIconUrl: string;
  productName: string;
  brandName: string;
  media: Media[];
  isTrial: boolean;
  tagsOnImage: string[];
  tagsOnDesc: string[];
  priceInfo: PriceInfo;
  discounts: any[];
  applyCoupon: boolean;
}

export interface PriceInfo {
  price: number;
  couponDiscountPrice: number;
  couponDiscountRate: number;
}
export interface Media {
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  uuid: string;
  mimeType: string;
  uri: string;
  fileName: string;
  objectKey: string;
  deviceType: null | any;
  collectionId: number;
  seq: number;
  itemKey: null | any;
  type: string;
}
