"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  Button,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableColumn,
} from "@nextui-org/react";
import AuthUser from "../auth/authUser";

export default function DashboardPage() {
  const authUser = new AuthUser();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [rows, setRows] = useState([{}]);
  const [columns, setColumns] = useState([
    { key: "service", label: "Serviço" },
    { key: "date", label: "Data" },
    { key: "value", label: "Valor" },
    { key: "address", label: "Endereço" },
  ]);

  useEffect(() => {
    async function checkAuth() {
      const status = await authUser.isAuth();
      console.log("Autenticado no dashboard", status);
      setIsLoggedIn(status);
    }
    checkAuth();

    const generatedRows = Array.from({ length: 10 }, (_, index) => ({
      key: index + 1,
      service: `Serviço ${index + 1}`,
      date: `2023-09-${10 + index}`,
      value: `R$ ${100 + 10 * index}`,
      address: `Endereço ${index + 1}`,
    }));
    setRows(generatedRows);
  }, []);

  return (
    <div className="min-h-screen px-4 py-10 bg-gray-100 sm:px-6 lg:px-8">
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="flex items-center justify-between px-4 py-5 sm:px-6">
          <h1 className="text-2xl font-bold">Agendamentos Realizados</h1>
          <Button color="primary" onClick={(_) => {}}>
            Agendar
          </Button>
        </div>
        <div className="border-t border-gray-200">
          <Table
            aria-label="Agendamentos Table"
            className="h-auto min-w-full"
            selectionMode="none"
          >
            <TableHeader>
              {columns.map((column) => (
                <TableColumn key={column.key} align="start">
                  {column.label}
                </TableColumn>
              ))}
            </TableHeader>
            <TableBody>
              {rows.map((item: any) => (
                <TableRow key={item.key}>
                  <TableCell>{item.service}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.value}</TableCell>
                  <TableCell>{item.address}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
