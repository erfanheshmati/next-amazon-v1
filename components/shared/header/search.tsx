import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { getAllCategories } from "@/lib/actions/product-actions";
import { SearchIcon } from "lucide-react";

export default async function Search() {
  //   const categories = await getAllCategories();

  return (
    <form action="/search" method="GET">
      <div
      //   className="flex w-full max-w-sm items-center space-x-2"
      >
        {/* <Select name="category">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem key={'All'} value={'all'}>
              All
            </SelectItem>
            {categories.map((category: { name: string }) => (
              <SelectItem key={category.name} value={category.name}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select> */}
        <div className="flex items-center relative">
          <Input
            name="q"
            type="text"
            color="none"
            placeholder="Search..."
            className="w-full"
          />
          <Button className="absolute right-0 rounded-l-none rounded-r-md">
            <SearchIcon />
          </Button>
        </div>
      </div>
    </form>
  );
}
