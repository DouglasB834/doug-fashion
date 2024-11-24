import {
  SelectProductCount,
  SelectTotalPriceProduct,
} from "@/redux/cart/someSelector";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { RootState } from "@/redux/rootReducer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { resetCart } from "@/redux/cart/actions";

import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { CheckoutButton } from "./_components/checkoutButton";
import { CartItem } from "./cartProduct";

export const Cart = () => {
  const { products } = useSelector((state: RootState) => state.cart);
  const { currentUser } = useSelector((state: RootState) => state.user);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false); // Estado para o diálogo de login
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false); // Estado para a mensagem de sucesso

  const productsCount = useSelector(SelectProductCount);
  const TotalPriceProducts = useSelector(SelectTotalPriceProduct);
  const dispatch = useDispatch();
  const formattedPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });
  };

  const handleCheckout = async () => {
    if (!currentUser) {
      setIsLoginDialogOpen(true);
      return;
    }
    setIsSuccessMessageVisible((prev) => !prev);
    dispatch(resetCart());
    setIsCartOpen(false);
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <ShoppingCart className="h-5 w-5" />
          {products.length > 0 && (
            <span className="bg- w rounded-full text-sm font-medium">
              {productsCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex h-full flex-col">
          <DialogTitle className="sr-only text-lg font-medium">
            Seu Carrinho
          </DialogTitle>

          <h2 className="mb-4 text-lg font-semibold">Seu Carrinho</h2>
          <ul className="flex h-full flex-col overflow-hidden">
            <ScrollArea className="h-full">
              <div className="flex flex-col gap-5">
                {products.length > 0 ? (
                  products.map((product) => (
                    <div key={product.id}>
                      <CartItem product={product} />
                    </div>
                  ))
                ) : (
                  <div>
                    <h2>Carinho vazio, vamos fazer compras? </h2>
                  </div>
                )}
              </div>
            </ScrollArea>
          </ul>
          {products.length > 0 && (
            <>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between border-b-[3px] py-1 text-sm opacity-75">
                  <p>Subtotal</p>
                  <p> {formattedPrice(TotalPriceProducts)}</p>
                </div>

                <div className="flex justify-between border-b-[3px] py-1 text-sm opacity-75">
                  <p>Entrega</p>
                  <p>GRÁTIS</p>
                </div>

                <div className="items flex justify-between border-b-[3px] py-1 text-base font-semibold">
                  <p>Total</p>
                  <p>{formattedPrice(TotalPriceProducts)}</p>
                </div>
              </div>
              {currentUser ? (
                <Button
                  className="border- text-sm font-semibold uppercase"
                  onClick={handleCheckout}
                >
                  Finalizar compra
                </Button>
              ) : (
                <Link
                  to={"/"}
                  className="border-b-2 text-sm hover:text-blue-900"
                >
                  Faça Login para finalizar a compra
                </Link>
              )}
            </>
          )}
        </div>
      </SheetContent>
      {isLoginDialogOpen && (
        <Dialog open={isLoginDialogOpen} onOpenChange={setIsLoginDialogOpen}>
          <DialogContent>
            <DialogTitle className="flex items-center gap-2">
              Faça login para continuar
            </DialogTitle>
            <div className="flex justify-end">
              <Button onClick={() => setIsLoginDialogOpen(false)}>
                Fechar
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
      <CheckoutButton
        isSuccessMessageVisible={isSuccessMessageVisible}
        setIsSuccessMessageVisible={setIsSuccessMessageVisible}
      />
    </Sheet>
  );
};
