'use client';
import clsx from 'clsx';
import React from 'react';

import BannerCarousel from '@/app/components/Carousel/Carousel';

import { BannerCarouselProps } from '../types';

type Color = (typeof colorList)[number];

const ComponentPage: React.FC<BannerCarouselProps | any> = ({ data }) => {
  const [mode, setMode] = React.useState<'dark' | 'light'>('light');

  return (
    <main>
      <section className={clsx(mode === 'dark' ? 'bg-dark' : 'bg-white')}>
        <BannerCarousel data={data} />
      </section>
    </main>
  );
};

const colorList = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
] as const;

export default ComponentPage;
