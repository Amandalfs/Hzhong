"use client";
import { VictoryPie, VictoryLabel } from 'victory';

export function GraficStatics(){
    const incomeValue = 1000;
    const expenseValue = 900;
  
    const netIncome = incomeValue - expenseValue;
    const netIncomePercentage = (netIncome / incomeValue) * 100;
    const expensePercentage = (expenseValue / incomeValue) * 100;
  
    const incomeData = [
        {x: 'Net Income', y: netIncomePercentage },
    ];
    
    const expenseData = [
        { x: 'Expense', y: expensePercentage },
    ];


    return (<div className="flex w-90 justify-around items-center">
        <div className="w-52 h-52">
        <VictoryPie
            data={[...expenseData, ...incomeData]}
            colorScale={["#FFFFFF","#00FF00"]}
            innerRadius={100}
            labelRadius={0}
            labels={() => null}
            startAngle={0}
            labelComponent={<VictoryLabel 
                text={`${netIncomePercentage.toFixed(2)}%`} 
                textAnchor="middle" verticalAnchor="middle" 
                style={{ fontSize: 40 }} 
                x={200}
                y={200} 
            />}
        />
        </div>
        <div className="w-52 h-52">
            <VictoryPie
                data={[...incomeData,...expenseData]}
                colorScale={["#FFFFFF", "#DC143C"]}
                innerRadius={100}
                labelRadius={0}
                labels={() => null}
                startAngle={0}
                labelComponent={<VictoryLabel  
                    text={`${expensePercentage.toFixed(2)}%`} 
                    textAnchor="middle" 
                    verticalAnchor="middle" 
                    style={{ fontSize: 40 }} 
                    x={200}
                    y={200} 
                />}
            />
        </div>
    </div>)
}    