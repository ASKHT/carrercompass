import { CategoryCard } from "@/components/CategoryCard";
import { ItRoles } from "@/constants/It/itroadmap";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-3 p-4">
      {ItRoles.map((role) => (
        <CategoryCard
          key={role.slug}
          name={role.name}
          image={role}
          slug={role.slug}
        />
      ))}
    </div>
  );
};

export default page;
