import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RootState } from "@/redux/rootReducer";
import { LogoutAction } from "@/redux/user/actions";

import { Cart } from "./cart/cart";
import { Button } from "./ui/button";

export const Header = () => {
  const { currentUser } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(LogoutAction());
  };

  return (
    <header className="p- flex w-full justify-between bg-primary text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="text-2xl font-bold">
          Fashion Close
        </Link>
        <nav className="flex items-center space-x-4">
          <Link to="/" className="text-sm font-medium">
            Explorar
          </Link>

          {currentUser?.email ? (
            <Button onClick={handleLogout} className="text-sm font-medium">
              Sair
            </Button>
          ) : (
            <Link to="/login" className="text-sm font-medium">
              Login
            </Link>
          )}
          <div>
            <Cart />
          </div>
        </nav>
      </div>
    </header>
  );
};
