import { Link } from "react-router-dom";

import { Category } from "@/types";
import categories from "@/services/categories";

import { CategoryItem } from "./categoryItem";

export function Categories() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* <h2 className="mb-8 text-2xl font-bold">Categorias</h2> */}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {categories.map((category: Category, index) => (
            <Link
              key={category.id}
              to={category.imageUrl}
              className={`group relative overflow-hidden rounded-lg ${
                index === 2 ? "aspect-[21/9] md:col-span-2" : "aspect-[4/3]"
              }`}
            >
              <CategoryItem category={category} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
