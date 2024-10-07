"use client";
import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Compass, User, Bell, Search } from "lucide-react";
import { redirect, useRouter } from "next/navigation";

const categories = [
  "IT",
  "Media",
  "Entertainment",
  "Sports",
  "Space",
  "Finance",
  "Medical",
  "Esports",
  "Fashion",
  "Engineering",
];

const Navbar = () => {
  const handleClick = () => {
    router.push("/"); // Use router.push for client-side navigation
  };
  const router = useRouter();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Compass className="h-8 w-8 text-blue-500" />
              <span
                className="ml-2 text-xl font-bold text-gray-800 cursor-pointer"
                onClick={handleClick}
              >
                CareerCompass
              </span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="ml-4 flex items-center md:ml-6">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
