'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { GalleryThumbnails, Heart, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductDetail(product: any) {
  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{product?.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {product?.image?.length > 0 ? (
                <Image
                  src={product?.image?.[0]?.image}
                  alt={product?.name}
                  width={500}
                  height={500}
                  quality={50}
                  property="1"
                  className="rounded-lg"
                />
              ) : (
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
                  No Image Avilable
                </div>
              )}
            </div>
            <div className='flex flex-col justify-between'>
              <p className='text-xl font-semibold '>
                {/* ${product?.price?.toFixed(2)} */}
                 ${Number(product?.price || 0).toFixed(2)}
              </p>
              <button className='my-4'>
                <ShoppingCart />
              </button>
              <Button variant="secondary" asChild>
                <Link href="./products">Back to Products</Link>
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Link href={`/products/${product.id}`}>More Detail</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
