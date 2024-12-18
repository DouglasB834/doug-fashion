import { ArrowUpToLine, CheckCircle, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Product } from "@/types";
import { addProduct } from "@/redux/cart/slice";
import { formattedPrice } from "@/helps/formatPrice";

import { Button } from "../ui/button";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch();
  const [isDisabled, setisDisabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleAddProduct = () => {
    setisDisabled(true);
    setTimeout(() => {
      setisDisabled(false);
    }, 1500);
    dispatch(addProduct(product));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-50 rounded-full bg-primary p-2 transition-all hover:animate-bounce"
        >
          <ArrowUpToLine />
        </Button>
      )}
      <div className="">
        <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 group relative h-[360px] w-full overflow-hidden rounded-lg rounded-b-none bg-gray-200">
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
            className={`absolute bottom-1 left-1/2 z-50 -translate-x-1/2 transform border-secondary ${!isDisabled ? "opacity-70" : "border opacity-100"} hover:border hover:opacity-100`}
          >
            {isDisabled ? (
              <p className="animate-bounce text-green-500">Adicionando...</p>
            ) : (
              " Adicionar ao carrinho"
            )}
          </Button>
        </div>

        <div className="mt-2 flex -translate-y-2 items-center justify-between rounded-b-sm border border-t-0 px-2">
          <div>
            <h3 className="mt-4 text-lg text-gray-700">{product?.name}</h3>
            <p className="mt-1 text-base font-medium text-gray-900">
              {formattedPrice(product?.price)}
            </p>
          </div>
          <Button
            size={"icon"}
            disabled={isDisabled}
            onClick={handleAddProduct}
            variant={"outline"}
            className={`transform border-secondary hover:border hover:opacity-100`}
          >
            {isDisabled ? (
              <p className="animate-bounce text-green-500">
                <CheckCircle />
              </p>
            ) : (
              <ShoppingCart className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
    </>
  );
}
