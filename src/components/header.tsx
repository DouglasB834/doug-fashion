import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RootState } from "@/redux/rootReducer";
import { LogoutAction } from "@/redux/user/actions";

import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { currentUser } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(LogoutAction());
  };

  return (
    <header className="p- flex w-full justify-between bg-primary text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="text-2xl font-bold">
          doug - fashion
        </Link>
        <nav className="flex items-center space-x-4">
          <Link to="/" className="text-sm font-medium">
            Explorar
          </Link>

          {currentUser ? (
            <Button onClick={handleLogout} className="text-sm font-medium">
              Sair
            </Button>
          ) : (
            <Link to="/login" className="text-sm font-medium">
              Login
            </Link>
          )}

          <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" /> 5
                <span className="sr-only">Carrinho</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex h-full flex-col">
                <h2 className="mb-4 text-lg font-semibold">Seu Carrinho</h2>
                {/* Aqui você pode adicionar a lógica para mostrar os itens do carrinho */}
                <p>Itens do carrinho aparecerão aqui.</p>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};
