import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Card } from "./ui/card";
import Image from "next/image";
type ImageType = {
  name: string;
  icon: string;
  slug: string;
};
interface CategoryCardProps {
  name: string;
  icon?: LucideIcon;
  slug: string;
  image?: ImageType;
}
export const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  icon: Icon,
  slug,
  image,
}) => (
  <Link href={image ? `/it/${image.slug}` : `/${slug}`} className="block group">
    <Card
      className="
        relative
        flex flex-col items-center justify-center p-6 
        bg-white rounded-lg shadow-md 
        transition-all duration-300 ease-in-out
        hover:shadow-lg 
      "
    >
      {Icon && (
        <Icon
          className="
            w-12 h-12 text-blue-500 mb-4
            transition-transform duration-300 ease-in-out
            group-hover:scale-110
          "
        />
      )}
      {image && (
        <Image
          src={image.icon}
          alt={`${name} icon`}
          width={48}
          height={48}
          className="
          mb-4
          transition-transform duration-300 ease-in-out
          group-hover:scale-110
        "
        />
      )}
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>

      <div
        className="
          absolute bottom-0 left-0 right-0 h-1 bg-blue-500
          transform origin-left scale-x-0 transition-transform duration-300 ease-in-out
          group-hover:scale-x-100
        "
      ></div>
      <div
        className="
          absolute top-0 bottom-0 right-0 w-1 bg-blue-500
          transform origin-top scale-y-0 transition-transform duration-300 ease-in-out
          group-hover:scale-y-100
        "
      ></div>
    </Card>
  </Link>
);
