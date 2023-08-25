"use client";
import { VictoryPie } from "victory";

const totalData = [
	{ x: "Entrada", y: 300, color: "green" },
	{ x: "Saída", y: 150, color: "red" }
];

export function Pizza(){
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
