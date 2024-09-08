"use client";
import { useState } from 'react';
import Link from 'next/link';
import Input from '../components/input';
import { Login_Register_Background } from '../components/login_register_background';
import AuthUser from '../auth/authUser';
import { toast } from 'react-toastify';
import { Button } from '@nextui-org/react';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const authUser = new AuthUser();

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
          const isUserAdded = await authUser.handleSignUp(email, name);
          if (isUserAdded) {
            toast.success("Registro realizado com sucesso!");
          } else {
            toast.error("Falha ao registrar. Por favor, tente novamente.");
          }
        } catch (error) {
          console.error("Erro ao registrar:", error);
          toast.error("Ocorreu um erro ao tentar registrar. Por favor, tente novamente.");
        }
      };

    return (
        <div className="flex flex-col h-screen lg:flex-row">
            <div className="flex flex-col items-center justify-center w-full p-8 bg-white lg:w-1/2">
                <h1 className="mb-8 text-3xl font-bold lg:mb-10 lg:text-4xl">Salon Appointment</h1>
                <form onSubmit={handleSubmit} className="w-full max-w-md p-5 rounded-md border border-[#D9D9D9]">
                    <h2 className="mb-6 text-xl font-semibold lg:text-2xl">Registrar</h2>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="password">Nome</label>
                        <Input
                            type={"text"}
                            id={"nome"}
                            placeholder={"Insira seu nome"}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            classname={"w-full p-2 border border-gray-300 rounded"}
                        >
                        </Input>
                    </div>
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
                    <div className="flex items-center justify-between mb-4">
                        <Link
                            className='transition-all duration-150 text-zinc-500 hover:text-zinc-700'
                            href={"/login"}
                        >
                            Logar-se
                        </Link>
                    </div>
                    <Button type='submit' className='w-full p-2 text-white bg-black rounded'>Registrar</Button>
                </form>
            </div>
            <Login_Register_Background />
        </div>
    );
};

export default RegisterPage;