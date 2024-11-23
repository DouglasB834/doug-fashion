// import { GoalIcon } from "lucide-react";
import { ArrowBigLeft, Circle, GoalIcon, LaughIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";

import { loginSchema } from "./schema";

type loginForm = z.infer<typeof loginSchema>;

export const LoginPage = () => {
  const [loadingLogin, setLoadingLogin] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<loginForm>({
    resolver: zodResolver(loginSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (data: loginForm) => {
    setLoadingLogin((prev) => prev!);
    try {
      console.log("Login data:", data);

      setTimeout(() => {
        navigate("/");
      }, 2000);

      // Simular um erro de login para demonstração
      throw new Error("Credenciais inválidas");
    } catch (error) {
      console.log(
        "Falha no login. Por favor, verifique suas credenciais.:",
        error,
      );
    } finally {
      setLoadingLogin((prev) => !prev!);
    }
  };

  useEffect(() => {
    console.log("isSubmitting:", isSubmitting, loadingLogin);
  }, [isSubmitting, loadingLogin]);

  const imgUrl: string =
    "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    // <main className="bg-red flex h-screen items-center justify-center">
    <main className="grid h-screen md:grid-cols-2">
      <div className="m-auto flex w-[350px] max-w-[500px] flex-col justify-center gap-6">
        <form
          aria-label="Formulario de login"
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 rounded-2xl bg-slate-800 p-8 text-white"
        >
          <h2 className="flex items-center justify-center gap-5 text-2xl">
            Login <GoalIcon className="h-4 w-5" />
          </h2>
          <div>
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              className={`${errors.email && "border-red-400"}`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="password">Senha</label>
            <Input
              id="password"
              type="password"
              {...register("password")}
              className={`${errors.password && "border-red-400"}`}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>
          <Link to={"/"} className="flex items-center gap-2 text-xs">
            <ArrowBigLeft size={16} /> Voltar a explorar
          </Link>
          <Button
            aria-label="botao de login"
            type="submit"
            variant={"secondary"}
            className="w-full"
          >
            {isSubmitting || loadingLogin ? (
              <Circle size={24} className="animate-spin text-primary" />
            ) : (
              "Entrar"
            )}
          </Button>
          <Button
            aria-label="Botao de login com google em breve"
            title="Em breve"
            className="w-full text-sm hover:text-primary-foreground hover:underline"
            disabled
          >
            <LaughIcon size={24} className="mr-2" />
            Login com google
          </Button>
        </form>
      </div>
      <div className="relative hidden md:block">
        <img
          alt="faça login"
          src={imgUrl}
          sizes="100vw"
          className="h-full w-full object-cover"
        />
      </div>
    </main>
  );
};
