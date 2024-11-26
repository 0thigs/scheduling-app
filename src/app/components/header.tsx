import React, { useState } from "react";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export default function Header({ sidebarOpen, setSidebarOpen }: HeaderProps) {
  function handleSidebar() {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <header className="flex items-center justify-between py-1 text-white bg-[#161617]">
      <div className="flex items-center space-x-4">
        <button
          className="flex flex-col items-center justify-center p-1 px-2 border-r-2 border-[#707070]"
          onClick={() => {
            handleSidebar();
          }}
        >
          <i className="text-4xl rounded-full ph ph-list"></i>
        </button>
      </div>
      <div className="flex space-x-8">
        <button className="px-4 py-2 text-white rounded-full">
          Agendamentos
        </button>
        <button className="px-4 py-2 text-white rounded-full">Agendar</button>
        <button className="px-4 py-2 text-white rounded-full">Serviços</button>
      </div>
      <div className="flex items-center space-x-4">
        <button className="flex flex-col items-center justify-center p-1 px-2 border-l-2 border-[#707070]">
          <i className="text-4xl rounded-full ph ph-user-circle"></i>
        </button>
      </div>
    </header>
  );
}
