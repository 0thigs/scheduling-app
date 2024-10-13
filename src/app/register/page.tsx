"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Input from "../components/input";
import { Login_Register_Background } from "../components/login_register_background";
import AuthUser from "../../server/auth/authUser";
import { toast } from "react-toastify";
import { Button } from "@nextui-org/react";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const authUser = new AuthUser();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const isLoggedIn = await authUser.isAuth();
        if (isLoggedIn) {
          window.location.href = "/dashboard";
        }
      } catch (error) {
        console.error("Erro ao verificar autenticação:", error);
      }
    };
    checkAuth();
  }, [authUser]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSending(true);
    try {
      await authUser.handleSignUp(name, email, password);
      setIsSubmitted(true);
      toast.success("Registro realizado com sucesso!");
      window.location.href = "/login";
    } catch (error: any) {
      console.error("Erro ao registrar:", error.message);
      toast.error(`Falha no registro: ${error.message}`);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="flex flex-col h-screen lg:flex-row">
      <div className="flex flex-col items-center justify-center w-full p-8 bg-white lg:w-1/2">
        <h1 className="mb-8 text-3xl font-bold lg:mb-10 lg:text-4xl">
          Salon Appointment
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-5 rounded-md border border-[#D9D9D9]"
        >
          <h2 className="mb-6 text-xl font-semibold lg:text-2xl">Registrar</h2>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="nome">
              Nome
            </label>
            <Input
              type={"text"}
              id={"nome"}
              placeholder={"Insira seu nome"}
              value={name}
              onChange={(e) => setName(e.target.value)}
              classname={"w-full p-2 border border-gray-300 rounded"}
            />
          </div>
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
          <div className="mb-4">
            <label className="block mb-2" htmlFor="password">
              Senha
            </label>
            <Input
              type={"password"}
              id={"password"}
              placeholder={"Insira sua senha"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              classname={"w-full p-2 border border-gray-300 rounded"}
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <Link
              className="transition-all duration-150 text-zinc-500 hover:text-zinc-700"
              href={"/login"}
            >
              Logar-se
            </Link>
          </div>

          {isSending && (
            <p className="p-4 mb-4 text-blue-600 bg-blue-100 border border-blue-300 rounded-md">
              Processando registro...
            </p>
          )}

          {isSubmitted && (
            <p className="p-4 mb-4 text-green-600 bg-green-100 border border-green-300 rounded-md">
              Cadastro realizado com sucesso!
            </p>
          )}

          <Button
            type="submit"
            className="w-full p-2 text-white bg-black rounded"
            disabled={isSending}
          >
            {isSending ? "Registrando..." : "Registrar"}
          </Button>
        </form>
      </div>
      <Login_Register_Background />
    </div>
  );
};

export default RegisterPage;
