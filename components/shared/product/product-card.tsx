import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Product } from "@/types";
import ProductPrice from "./product-price";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="flex flex-row sm:flex-col">
      <CardHeader className="p-0 items-center w-2/5 sm:w-full">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images![0]}
            alt={product.name}
            width={300}
            height={300}
            className="w-full object-cover rounded-l sm:rounded-t"
          />
        </Link>
      </CardHeader>
      <CardContent className="p-3 grid gap-3 w-3/5 sm:w-full">
        <div>
          <p className="text-xs bg-gray-100 w-fit rounded px-2 py-1">
            {product.brand}
          </p>
        </div>
        <div>
          <Link href={`/product/${product.slug}`}>
            <h2 className="text-sm text-muted-foreground line-clamp-1">
              {product.name}
            </h2>
          </Link>
        </div>
        <div className="flex-between gap-4">
          <p className="flex items-center gap-1">
            <span className="text-yellow-500 text-xl font-bold">★</span>
            <span className="text-sm">{Number(product.rating).toFixed(1)}</span>
          </p>
          {product.stock > 0 ? (
            <ProductPrice value={Number(product.price)} />
          ) : (
            <p className="text-destructive text-sm">Out of stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
