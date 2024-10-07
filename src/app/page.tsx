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

interface CategoryCardProps {
  name: string;
  icon: LucideIcon;
  slug: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  icon: Icon,
  slug,
}) => (
  <Link href={`/category/${slug}`} className="block">
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      {Icon && <Icon className="w-12 h-12 text-blue-500 mb-4" />}
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
    </div>
  </Link>
);

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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
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
