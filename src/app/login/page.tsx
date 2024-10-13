"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Input from "../components/input";
import { Login_Register_Background } from "../components/login_register_background";
import { toast } from "react-toastify";
import { Button } from "@nextui-org/button";
import AuthUser from "../../server/auth/authUser";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const authUser = new AuthUser();

  useEffect(() => {
    async function checkAuth() {
      try {
        const isLoggedIn = await authUser.isAuth();
        console.log("USUÁRIO AUTENTICADO NA ROTA DE LOGIN", isLoggedIn);
        if (isLoggedIn) {
          window.location.href = "/dashboard";
        }
      } catch (error) {
        console.error("Erro ao verificar autenticação:", error);
      }
    }
    checkAuth();
  }, [authUser]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSending(true);
    try {
      const result = await authUser.handleLogin(email, password);
      if (result.user) {
        toast.success("Login realizado com sucesso!");
        window.location.href = "/dashboard";
      }
    } catch (error: any) {
      console.error("Erro ao fazer login:", error.message);
      toast.error(`Falha no login: ${error.message}`);
    } finally {
      setIsSending(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((isOpen) => !isOpen);
  };

  return (
    <div className="flex flex-col h-screen lg:flex-row">
      <div className="flex flex-col items-center justify-center w-full p-8 bg-white lg:w-1/2">
        <h1 className="mb-8 text-3xl font-bold lg:mb-20 lg:text-4xl">
          Salon Appointment
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-5 rounded-md border border-[#D9D9D9]"
        >
          <h2 className="mb-6 text-xl font-semibold lg:text-2xl">Logar</h2>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">
              Email
            </label>
            <Input
              type={"email"}
              id={"email"}
              placeholder={"Insira seu email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              classname={"w-full p-2 border border-gray-300 rounded"}
            />
          </div>
          <div className="relative mb-4">
            <label className="block mb-2" htmlFor="password">
              Senha
            </label>
            <div className="flex items-center justify-between w-full p-2 border border-gray-300 rounded">
              <Input
                type={showPassword ? "text" : "password"}
                id={"password"}
                placeholder={"Insira sua senha"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                classname={"outline-none w-full"}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="ml-2 text-gray-600 focus:outline-none"
              >
                {showPassword ? "Ocultar" : "Mostrar"}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <Link
              className="transition-all duration-150 text-zinc-500 hover:text-zinc-700"
              href={"/register"}
            >
              Registrar-se
            </Link>
          </div>
          {isSending && (
            <p className="p-4 mb-4 text-blue-600 bg-blue-100 border border-blue-300 rounded-md">
              Processando login...
            </p>
          )}
          <Button
            type="submit"
            className="w-full p-2 text-white bg-black rounded"
            disabled={isSending}
          >
            {isSending ? "Conectando..." : "Login"}
          </Button>
        </form>
      </div>
      <Login_Register_Background />
    </div>
  );
};

export default LoginPage;
