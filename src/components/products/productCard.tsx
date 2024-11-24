import { useState } from "react";
import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";

import { Product } from "@/types";
import { addProductCart } from "@/redux/cart/actions";

import { Button } from "../ui/button";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch();
  const [isDisabled, setisDisabled] = useState(false);

  const handleAddProduct = () => {
    setisDisabled(true);
    setTimeout(() => {
      setisDisabled(false);
    }, 1500);

    dispatch(addProductCart(product));
  };

  return (
    <div className=" ">
      <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 group relative h-[360px] w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src={product?.imageUrl}
          alt={product?.name}
          sizes="100vw"
          className="max-w-300 h-full w-full object-cover object-center group-hover:opacity-75"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-70">
          <p
            className="p-4 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            aria-label={product.description}
          >
            {product?.description}
          </p>
        </div>
        <Button
          disabled={isDisabled}
          onClick={handleAddProduct}
          variant={"default"}
          className="hover: absolute bottom-0 left-1/2 z-50 -translate-x-1/2 transform opacity-70 hover:opacity-100"
        >
          {isDisabled ? (
            <p className="animate-bounce text-green-300">Adicionando...</p>
          ) : (
            " Adicioanr ao carrinho"
          )}
        </Button>
      </div>

      <div className="flex items-center justify-between px-2">
        <h3 className="mt-4 text-sm text-gray-700">{product?.name}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">
          ${product?.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
