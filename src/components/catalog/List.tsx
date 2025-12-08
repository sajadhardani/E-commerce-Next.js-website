'use client';
import { DATA } from '@/modules/products/mock/products';
import React from 'react';
import { Card, CardContent } from '../ui';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

export default function CatalogList() {
  const params = useSearchParams();
  const id = params.get('id');
  //    getImageByProduct(id)  for next time
  console.log(id);
  const images = DATA[0].image;
  return (
    <div className="flex flex-wrap justify-center mb-4">
      {images?.map((_image: any, index) => {
        return (
          <div className="p-1" key={index}>
            <Card>
              <CardContent className="flex w-[400px] h-[400px] items-center justify-center p-6">
                <Image
                  src={_image?.image}
                  alt="gallery"
                  width={400}
                  height={400}
                  className="hover:scale-105 transform transition-transform duration-300"
                />
              </CardContent>
            </Card>{' '}
          </div>
        );
      })}
    </div>
  );
}
