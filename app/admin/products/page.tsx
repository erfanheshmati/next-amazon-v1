import DeleteDialog from "@/components/shared/delete-dialog";
import Pagination from "@/components/shared/pagination";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteProduct, getAllProducts } from "@/lib/actions/product-actions";
import { APP_NAME } from "@/lib/constants";
import { formatCurrency, formatId } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Admin Products - ${APP_NAME}`,
};

export default async function AdminProductsPage({
  searchParams,
}: {
  searchParams: {
    page: string;
    query: string;
    category: string;
  };
}) {
  const page = Number(searchParams.page) || 1;

  const searchText = searchParams.query || "";

  const category = searchParams.category || "";

  const products = await getAllProducts({
    query: searchText,
    category,
    page,
  });

  return (
    <div className="space-y-2">
      <div className="flex-between">
        <h1 className="h2-bold">Products</h1>
        <Button asChild variant="default">
          <Link href="/admin/products/create">Create Product</Link>
        </Button>
      </div>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>NAME</TableHead>
              <TableHead>PRICE</TableHead>
              <TableHead>CATEGORY</TableHead>
              <TableHead>STOCK</TableHead>
              <TableHead>RATING</TableHead>
              <TableHead className="text-center">ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products?.data.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{formatId(product.id)}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{formatCurrency(product.price)}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{Number(product.rating).toFixed(1)}</TableCell>
                <TableCell>
                  <div className="flex justify-center gap-1">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/admin/products/${product.id}`}>Edit</Link>
                    </Button>
                    <DeleteDialog id={product.id} action={deleteProduct} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {products?.totalPages! > 1 && (
          <Pagination page={page} totalPages={products?.totalPages!} />
        )}
      </div>
    </div>
  );
}
