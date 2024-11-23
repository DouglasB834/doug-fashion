import {
  decreaseProductCard,
  increseProductCart,
  removeProductCart,
} from "@/redux/cart/actions";
import { ArrowLeftIcon, ArrowRightIcon, Trash2Icon } from "lucide-react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Product } from "@/types";

import { Button } from "../ui/button";
import { SheetClose } from "../ui/sheet";

export const CartItem = ({ product }: { product: Product }) => {
  // const { decreseProductCart, increseProductCart, removeProductCart } =
  //   useContext(CartContext);

  const dispatch = useDispatch();

  const handleDescreseProductCart = () => {
    dispatch(decreaseProductCard(product));
  };
  const handleIncreseProductCart = () => {
    dispatch(increseProductCart(product));
  };
  const handleRemoveProductCart = () => {
    dispatch(removeProductCart(product));
  };

  return (
    <li className="flex justify-between border-b-2 border-primary pb-2 sm:items-center">
      <div className="flex gap-4">
        <SheetClose asChild>
          <Link to={`/product/${product}`}>
            <figure className="flex h-[91px] w-[91px] items-center justify-center rounded-xl bg-accent">
              <img
                alt={product.name}
                src={product.imageUrl}
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto max-h-[70%] w-full max-w-[80%] object-contain"
              />
            </figure>
          </Link>
        </SheetClose>

        <div className="flex flex-col gap-2">
          <SheetClose asChild>
            <Link to={`/product/${product.id}`}>
              <figcaption className="text-xs">{product.name}</figcaption>
            </Link>
          </SheetClose>
          {/* <div className="flex flex-wrap items-center gap-2">
            <p className="text-sm font-bold">
              R${Number(product.totalPrice).toFixed(2)}
            </p>
            {product.discountPercentage > 0 && (
              <span className="text-xs line-through opacity-75">
                R$ {Number(product.basePrice).toFixed(2)}
              </span>
            )}
          </div> */}

          <div className="flex items-center gap-1">
            <Button
              size={"icon"}
              variant={"outline"}
              className="h-7"
              onClick={handleIncreseProductCart}
            >
              <ArrowLeftIcon size={14} />
            </Button>

            <p className="text-xs">{product.quantity}</p>

            <Button
              className="h-7"
              size={"icon"}
              variant={"outline"}
              onClick={handleDescreseProductCart}
            >
              <ArrowRightIcon size={14} />
            </Button>
          </div>
        </div>
      </div>

      <Button
        size={"icon"}
        variant={"outline"}
        className="flex h-full rounded-[5px] border-2 border-accent p-[3px] text-red-300"
        onClick={handleRemoveProductCart}
      >
        <Trash2Icon size={20} />
      </Button>
    </li>
  );
};
