"use client";
import { graficExtractsContext } from "@/app/contexts/graficExtractsContext/graficExtractsContext";
import { useContext } from "react";
import { VictoryChart, VictoryBar, VictoryAxis, VictoryLegend, VictoryGroup } from "victory";
import { parseISO, format } from "date-fns";

// const inputData = [
// 	{ date: "2023-08-01", entrada: 10 },
// 	{ date: "2023-08-02", entrada: 8 },
// ];

// const outputData = [
// 	{ date: "2023-08-01", saida: 5 },
// 	{ date: "2023-08-02", saida: 4 },
// ];

export function CollumnByDay(){
	const {  graficColumnExpenses, graficColumnIncomes} = useContext(graficExtractsContext);

	function formatDateGrafic(dataString: string): string {
		const parsedDate = parseISO(dataString);
		return format(parsedDate, "yyyy-MM-dd");
	}

	return (<div>
		<VictoryChart domainPadding={{ x: 20, y: 20 }}> 
			<VictoryLegend
				x={10}
				y={10}
				orientation="horizontal"
				gutter={40}
				data={[
					{ name: "Entrada", symbol: { fill: "#00FF00" } },
					{ name: "Saída", symbol: { fill: "#DC143C" } }
				]}
			/>
			<VictoryGroup>
				<VictoryBar
					data={graficColumnIncomes}
					x={(data) => {
						if(data.date){
							return formatDateGrafic(data.date);
						}
					}}
					y={(data) => {
						const numericValue = parseFloat(data.value);
						return isNaN(numericValue) ? 0 : numericValue;
					  }}
					labels={({ datum }) => {
						if(datum.value !== undefined){
							return `${datum.value}`;
						}
						return "";
					}}
					style={{
						data: { fill: "#00FF00" }
					}}
					barWidth={20}
				/>
				<VictoryBar
					data={graficColumnExpenses}
					x={(data) => {
						if(data.date){
							return formatDateGrafic(data.date);
						}
					}}
					y={(data) => {
						const numericValue = parseFloat(data.value);
						return isNaN(numericValue) ? 0 : numericValue;
					  }}
					labels={({ datum }) => {
						if(datum.value !== undefined){
							return `${datum.value}`;
						}
						return "";
					}}
					style={{
						data: { fill: "#DC143C" }
					}}
					barWidth={20}
				/>
			</VictoryGroup>
		</VictoryChart>
	</div>);
}