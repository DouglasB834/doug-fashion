import { ReactNode } from "react";

import { Header } from "@/components/header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default Layout;
