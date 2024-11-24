import { useState } from "react";

import products from "@/services/products";

import { ProductCard } from "./productCard";

export function ProductList() {
  const productsdata = products;

  const [filteredProducts, setFilteredProducts] = useState(productsdata);

  const handleSort = (order: "asc" | "desc") => {
    const sortedProducts = [...filteredProducts].sort((a, b) =>
      order === "asc" ? a.price - b.price : b.price - a.price,
    );
    setFilteredProducts(sortedProducts);
  };

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as "asc" | "desc";
    if (value) {
      handleSort(value);
    }
  };

  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="mb-8 text-2xl font-semibold underline decoration-primary">
          Fashion Galeria
        </h2>
        <div className="flex justify-end">
          <select
            id="sort"
            className="mb-1 rounded-lg border p-1"
            onChange={handleSelectionChange}
            defaultValue=""
          >
            <option value="" disabled>
              order
            </option>
            <option value="asc">crescente</option>
            <option value="desc">decresente</option>
          </select>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
