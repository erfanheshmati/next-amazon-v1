"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function ProductCarousel({ data }: { data: Product[] }) {
  return (
    <Carousel
      className="relative w-full"
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: true,
          // stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent>
        {data.map((product: Product) => (
          <CarouselItem key={product.id} className="relative pl-0.5">
            <Link href={`/product/${product.slug}`}>
              <Image
                src={product.banner!}
                alt={product.name}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex items-end justify-center">
                <h2 className="w-full text-center bg-gray-900 bg-opacity-20 backdrop-blur-sm text-sm sm:text-xl md:text-2xl font-bold px-3 py-1 text-white">
                  {product.name}
                </h2>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-1 text-gray-600" />
      <CarouselNext className="absolute right-1 text-gray-600" />
    </Carousel>
  );
}
