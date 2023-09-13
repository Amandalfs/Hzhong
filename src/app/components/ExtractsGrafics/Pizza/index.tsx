"use client";
import { graficExtractsContext } from "@/app/contexts/graficExtractsContext/graficExtractsContext";
import { useContext } from "react";
import { VictoryPie } from "victory";

const totalData = [
	{ x: "Entrada", y: 300, color: "green" },
	{ x: "Saída", y: 150, color: "red" }
];

export function Pizza(){
	const { graficPizza } = useContext(graficExtractsContext);
	totalData[0].y = graficPizza.incomes;
	totalData[0].y = graficPizza.expenses;
	return (
		<div>
			<VictoryPie
				data={totalData}
				innerRadius={100}
				labels={(d) => d.x}
				colorScale={["#00FF00", "#DC143C"]}
			/>
		</div>
	);
}
