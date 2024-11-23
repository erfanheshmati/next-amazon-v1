import Link from "next/link";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { SignOut } from "@/lib/actions/user-actions";
import { LogOut, UserRound, MonitorCog } from "lucide-react";

export default async function UserButton() {
  const session = await auth();

  if (!session)
    return (
      <Link href="/api/auth/signin">
        <Button>Sign in</Button>
      </Link>
    );

  const userInitials = (fullname: string | null | undefined): string => {
    if (!fullname) return "";
    // Split the full name into an array of names
    const nameParts = fullname.trim().split(" ");
    // Get the first letter of the first name and last name
    const firstNameInitial = nameParts[0] ? nameParts[0][0] : "";
    const lastNameInitial =
      nameParts.length > 1 ? nameParts[nameParts.length - 1][0] : "";
    // Combine the initials
    const initials = `${firstNameInitial}${lastNameInitial}`;
    return initials.toUpperCase();
  };

  return (
    <div className="flex gap-2 items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center">
            <Button
              variant="ghost"
              className="relative w-8 h-8 rounded-full bg-gray-100 p-5 hover:bg-gray-200"
            >
              {userInitials(session.user.name)}
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-44 sm:w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {session.user.name}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {session.user.email}
              </p>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <Link className="w-full" href="/user/profile">
              <span className="flex items-center gap-1">
                <UserRound size={16} />
                User profile
              </span>
            </Link>
          </DropdownMenuItem>

          {session.user.role === "admin" && (
            <DropdownMenuItem>
              <Link className="w-full" href="/admin/overview">
                <span className="flex items-center gap-1">
                  <MonitorCog size={16} />
                  Admin panel
                </span>
              </Link>
            </DropdownMenuItem>
          )}

          <DropdownMenuItem className="p-0 mb-1">
            <form action={SignOut} className="w-full">
              <Button
                className="w-full py-4 px-2 h-4 justify-start"
                variant="ghost"
              >
                <span className="flex items-center gap-1">
                  <LogOut size={16} />
                  Sign out
                </span>
              </Button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
