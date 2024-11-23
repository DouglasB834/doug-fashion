import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
// import imgNotFound from "@/assets/notFound.jpg";

import "@/global.css";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">
          404 - Página não encontrada
        </h1>
        <p className="mb-8 text-xl text-gray-600">Você deve estar perdido!</p>
        {/* <img
          src={imgNotFound || ""}
          alt="Pessoa perdida, page not Found"
          width={300}
          height={300}
          className="mx-auto mb-8"
        /> */}
        <Link to="/">
          <Button
            aria-label="back home page"
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
          >
            Clique aqui para voltar
          </Button>
        </Link>
      </div>
    </div>
  );
}
