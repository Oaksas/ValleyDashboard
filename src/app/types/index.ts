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
  trialPeriod: null | any; // Adjust the type accordingly
  installmentPrice: null | any; // Adjust the type accordingly
  installmentPeriod: null | any; // Adjust the type accordingly
  rating: number;
  startDate: null | string; // Adjust the type accordingly
  endDate: null | string; // Adjust the type accordingly
  viewType: null | any; // Adjust the type accordingly
  createdAt: string;
  items: any[]; // Adjust the type accordingly
  media: Media[];
  thumbnail: Media;
  taggings: any[]; // Adjust the type accordingly
  singleCollections: any[]; // Adjust the type accordingly
}

export interface Media {
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string; // Adjust the type accordingly
  uuid: string;
  mimeType: string;
  uri: string;
  fileName: string;
  objectKey: string;
  deviceType: null | any; // Adjust the type accordingly
  collectionId: number;
  seq: number;
  itemKey: null | any; // Adjust the type accordingly
  type: string;
}
