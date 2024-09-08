"use client";
import React, { useEffect } from 'react';
import AuthUser from '../auth/authUser';


export default function DashboardPage() {
    const authUser = new AuthUser();
    
    useEffect(() => {
        async function checkAuth() {
          const isLoggedIn = await authUser.isAuth();
          console.log("Autenticado no dashboard", isLoggedIn);
        }
    
        checkAuth();
      }, []);

    return (
        <div className="container p-4 mx-auto">
        <h1 className="mb-4 text-2xl font-bold">Dashboard</h1>
        <p>Esta é uma página de teste para o dashboard.</p>
        <p>Se você está vendo isso, significa que está funcionando!</p>
        </div>
    );
}
