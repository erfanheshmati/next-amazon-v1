import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";
import { getAllCategories } from "@/lib/actions/product-actions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Header = async () => {
  const categories = await getAllCategories();

  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start gap-6">
          <Link href="/" className="flex-start">
            <Image
              src="/assets/icons/logo.svg"
              width={48}
              height={48}
              alt={`${APP_NAME} logo`}
            />
            <span className="font-bold ml-1">{APP_NAME}</span>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <span className="flex items-center cursor-pointer">
                Categories
                <ChevronDown size={16} />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {categories.map((category: { name: string }) => (
                <DropdownMenuItem key={category.name}>
                  <Link href={`/search?category=${category.name}`}>
                    {category.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Menu />
      </div>
    </header>
  );
};

export default Header;
