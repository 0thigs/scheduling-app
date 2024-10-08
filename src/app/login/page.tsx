"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Input from '../components/input';
import { Login_Register_Background } from '../components/login_register_background';
import { toast } from 'react-toastify';
import { Button } from '@nextui-org/button';
import AuthUser from '../../server/auth/authUser';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSent, setIsSent] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const authUser = new AuthUser();

  useEffect(() => {
    async function checkAuth() {
      const isLoggedIn = await authUser.isAuth();
      setIsAuthenticated(isLoggedIn);
      console.log("USUARIO AUTENTICADO NA ROTA DE LOGIN", isLoggedIn)
      if (isLoggedIn) {
        window.location.href = '/dashboard';
        return;
      }
    }
    checkAuth();
  }, []);
  
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const result = await authUser.handleLogin(email, password);
      if (result !== null && result !== undefined) {
        setIsSent("true");
        toast.success("Link de login enviado para o seu email!");
      } else {
        setIsSent("false");
        toast.error("Falha ao enviar o link de login. Por favor, tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setIsSent("false");
      toast.error("Ocorreu um erro ao tentar fazer login. Por favor, tente novamente.");
    }
  };

  return (
    <div className="flex flex-col h-screen lg:flex-row">
      <div className="flex flex-col items-center justify-center w-full p-8 bg-white lg:w-1/2">
        <h1 className="mb-8 text-3xl font-bold lg:mb-20 lg:text-4xl">Salon Appointment</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-md p-5 rounded-md border border-[#D9D9D9]">
          <h2 className="mb-6 text-xl font-semibold lg:text-2xl">Logar</h2>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">Email</label>
            <Input
              type={"email"}
              id={"email"}
              placeholder={"Insira seu email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              classname={"w-full p-2 border border-gray-300 rounded"}
            >
            </Input>
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">Senha</label>
            <Input
              type={"password"}
              id={"password"}
              placeholder={"Insira sua senha"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              classname={"w-full p-2 border border-gray-300 rounded"}
            >
            </Input>
          </div>
          <div className="flex items-center justify-between mb-4">
            <Link
              className='transition-all duration-150 text-zinc-500 hover:text-zinc-700'
              href={"/register"}
            >
              Registrar-se
            </Link>
          </div>
          {
          isSent === "true" && 
          <p className="p-4 mb-4 text-green-600 bg-green-100 border border-green-300 rounded-md">
                Link de login enviado para o seu email!
          </p>
          }
          {
          isSent === "false" &&
          <p className="p-4 mb-4 text-red-600 bg-red-100 border border-red-300 rounded-md">
                Algo deu errado!
          </p>
          }
          <Button type='submit' className='w-full p-2 text-white bg-black rounded'>Login</Button>
        </form>
      </div>
      <Login_Register_Background/>
    </div>
  );
};

export default LoginPage;
