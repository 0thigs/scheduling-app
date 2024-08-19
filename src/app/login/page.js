"use client";
import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Senha:', password);
  };

  return (
    <div className="flex flex-col h-screen lg:flex-row">
      <div className="flex flex-col items-center justify-center w-full p-8 bg-white lg:w-1/2">
        <h1 className="mb-8 text-3xl font-bold lg:mb-20 lg:text-4xl">Salon Appointment</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-md p-5 rounded-md border border-[#D9D9D9]">
          <h2 className="mb-6 text-xl font-semibold lg:text-2xl">Logar</h2>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="password">Senha</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="show-password"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="mr-2"
            />
            <label htmlFor="show-password">Mostrar senha</label>
          </div>
          <button
            type="submit"
            className="w-full p-2 text-white bg-black rounded"
          >
            Logar
          </button>
        </form>
      </div>
      <div
        className="hidden lg:flex lg:w-1/2 bg-center bg-cover bg-[url('../../public/images/login_background.png')]"
      >
        <div className="flex items-center justify-center w-full p-8 bg-black bg-opacity-50">
          <h3 className="text-lg text-center text-white lg:text-xl">Agilidade e beleza, uma combinação perfeita</h3>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
