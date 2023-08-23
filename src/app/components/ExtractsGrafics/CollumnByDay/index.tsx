"use client";
import { VictoryChart, VictoryBar, VictoryAxis, VictoryLegend, VictoryGroup } from 'victory';

const inputData = [
    { date: '2023-08-01', entrada: 10 },
    { date: '2023-08-02', entrada: 8 },
]

const outputData = [
    { date: '2023-08-01', saida: 5 },
    { date: '2023-08-02', saida: 4 },
]

export function CollumnByDay(){
    return (<div>
            <VictoryChart>
            <VictoryGroup offset={30} colorScale={'qualitative'}>
            <VictoryBar
                    data={inputData}
                    x="date"
                    y="entrada"
                    labels={({ datum }) => `${datum.entrada}`}
                    style={{
                        data: { fill: '#00FF00' }
                    }}
                    barWidth={20}
                />
                <VictoryBar
                    data={outputData}
                    x="date"
                    y="saida"
                    labels={({ datum }) => `${datum.saida}`}
                    style={{
                        data: { fill: '#DC143C' }
                    }}
                    barWidth={20}
                />
                
                </VictoryGroup>
                <VictoryLegend
                    x={10}
                    y={10}
                    orientation="horizontal"
                    gutter={40}
                    data={[
                        { name: 'Entrada', symbol: { fill: '#00FF00' } },
                        { name: 'Saída', symbol: { fill: '#DC143C' } }
                    ]}
                />
            </VictoryChart>
    </div>)
}