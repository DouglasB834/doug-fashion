import { Link } from "react-router-dom";

import categories from "@/data/categories";

interface Category {
  id: string;
  title: string;
  image: string;
  imageUrl: string;
}

export function Categories() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-2xl font-bold">Categorias</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {categories.map((category: Category, index) => (
            <Link
              key={category.id}
              to={category.imageUrl}
              className={`group relative overflow-hidden rounded-lg ${
                index === 2 ? "aspect-[21/9] md:col-span-2" : "aspect-[4/3]"
              }`}
            >
              <img
                src={category.image}
                alt=""
                sizes="100vw"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="mb-2 text-2xl font-bold">{category.title}</h3>
                <span className="inline-flex items-center justify-center rounded-md border border-white px-4 py-2 text-sm font-medium transition-colors group-hover:bg-white group-hover:text-black">
                  Explorar
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
