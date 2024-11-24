import { Category } from "@/types";

interface CategoryItemProps {
  category: Category;
}
export const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <>
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
    </>
  );
};
