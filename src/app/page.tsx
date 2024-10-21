import React from "react";
import Link from "next/link";
import {
  Monitor,
  Film,
  Music,
  Trophy,
  Rocket,
  DollarSign,
  Stethoscope,
  Gamepad2,
  Shirt,
  Cog,
  LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { CategoryCard } from "@/components/CategoryCard";

interface Category {
  name: string;
  icon: LucideIcon;
  slug: string;
}

const categories: Category[] = [
  { name: "IT", icon: Monitor, slug: "it" },
  { name: "Media", icon: Film, slug: "media" },
  { name: "Entertainment", icon: Music, slug: "entertainment" },
  { name: "Sports", icon: Trophy, slug: "sports" }, // Changed from Football to Trophy
  { name: "Space", icon: Rocket, slug: "space" },
  { name: "Finance", icon: DollarSign, slug: "finance" },
  { name: "Medical", icon: Stethoscope, slug: "medical" },
  { name: "Esports", icon: Gamepad2, slug: "esports" },
  { name: "Fashion", icon: Shirt, slug: "fashion" },
  { name: "Engineering", icon: Cog, slug: "engineering" },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          Welcome to CareerCompass
        </h1>
        <p className="text-xl text-gray-600">
          Explore various career categories and find your path!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            name={category.name}
            icon={category.icon}
            slug={category.slug}
          />
        ))}
      </div>
    </div>
  );
}
