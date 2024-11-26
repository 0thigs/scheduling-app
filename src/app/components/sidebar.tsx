"use client";

import React from "react";
import Link from "next/link";

interface BeautySalonSidebarProps {
  isOpen: boolean;
}

export function BeautySalonSidebar({ isOpen }: BeautySalonSidebarProps) {
  const menuItems = [
    { icon: "ph-bold ph-house", label: "Dashboard", href: "/dashboard" },
    {
      icon: "ph-bold ph-calendar",
      label: "Agendamentos",
      href: "/appointments",
    },
    { icon: "ph-bold ph-users", label: "Clientes", href: "/clients" },
    { icon: "ph-bold ph-gear", label: "Configurações", href: "/settings" },
  ];

  return (
    <aside
      className={`
        fixed top-[64px] left-0 h-[calc(100vh-64px)] w-64 bg-white shadow-lg
        transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex gap-3 items-center px-4 py-2 text-gray-700 rounded-lg transition-colors hover:bg-gray-100"
              >
                <i className={`${item.icon} text-xl`}></i>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
