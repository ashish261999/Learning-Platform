import { School } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/Dark";

import { Button } from "./button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import { FaBars } from "react-icons/fa";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";

export default function NavBar() {
  const user = true;

  return (
    <div className="h-16  bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10">
      <div className=" max-w-7xl mx-auto hidden md:flex  justify-between items-center gap-10 h-full">
        <div className=" flex items-center gap-2">
          <School size={30} />
          <h1 className="hidden md:block font-extrabold text-2xl">
            E-Learning
          </h1>
        </div>
        <div className="flex items-center gap-8">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                {/* Avatar trigger */}
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white dark:bg-gray-800 text-black dark:text-white">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem><Link to="/myLearning">My Learning</Link></DropdownMenuItem>
                <DropdownMenuItem> <Link to="/profile" >Edit Profile</Link></DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
                <DropdownMenuItem>Dashboard</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className=" flex items-center gap-2">
              <Button variant="outline">Login</Button>
              <Button variant="outline">Signup</Button>
            </div>
          )}
          <ModeToggle />
        </div>
      </div>
      <div className="flex md:hidden items-center justify-between h-full px-4">
        <h1 className="font-extrabold text-2xl">E-Learning</h1>
        <MobileNavBar />
      </div>
    </div>
  );
}

const MobileNavBar = () => {
  const role = "instructor";

  return (
    <Sheet>
      <SheetTrigger
        size="icon"
        className="rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
      >
        <FaBars />
      </SheetTrigger>

      <SheetContent className="flex flex-col bg-white dark:bg-gray-800 text-black dark:text-white p-6 space-y-5 rounded-lg shadow-lg w-full max-w-xs mx-auto">
        {/* Header: Logo + Theme Toggle with top margin */}
        <div className="flex items-center justify-between mb-4 mt-6">
          <SheetTitle className="text-2xl font-bold text-black dark:text-white">
            E-Learning
          </SheetTitle>
          <ModeToggle />
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col space-y-4">
          <span className="text-base cursor-pointer hover:underline text-black dark:text-white">
            My Learning
          </span>
          <span className="text-base cursor-pointer hover:underline text-black dark:text-white">
            Edit Profile
          </span>
          <span className="text-base cursor-pointer hover:underline text-black dark:text-white">
            Log Out
          </span>

          {/* Instructor Save Button */}
          {role === "instructor" && (
            <Button
              className="w-full mt-4 bg-black text-white hover:bg-gray-900 dark:hover:bg-gray-600 rounded-lg py-2"
              type="submit"
            >
              Dashboard
            </Button>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
