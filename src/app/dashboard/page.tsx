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
import Header from "../components/header";
import AuthUser from "../auth/authUser";
import { Title } from "../components/title";

export default function DashboardPage() {
	const authUser = new AuthUser();
	const [rows, setRows] = useState([{}]);
	const columns = [
		{ key: "service", label: "Serviço" },
		{ key: "date", label: "Data do Serviço" },
		{ key: "value", label: "Valor" },
		{ key: "address", label: "Endereço" },
	];

	useEffect(() => {
		async function checkAuth() {
			const status = await authUser.isAuth();
			console.log("Autenticado no dashboard", status);
		}
		checkAuth();

		// Just for testing
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
		<div className="min-h-screen bg-gray-100">
			<Header />
			<div className="overflow-hidden bg-white shadow sm:rounded-lg">
				<div className="flex items-center justify-between px-4 py-5 border-b border-gray-200 sm:px-6">
					<Title title={"Seus Agendamentos"} />
					<Button color="primary" className="rounded-full" onClick={(_) => {}}>
						<i className="text-2xl ph-bold ph-plus-circle"></i>
						Agendar
					</Button>
				</div>
				<Table
					aria-label="Agendamentos Table"
					className="w-full p-10 mx-auto sm:w-3.5/4"
					selectionMode="single"
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
	);
}
