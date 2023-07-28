'use client';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from "next/link";
import { LineTable } from "./LineTable";

const dataHistory = [
  {
    id: 1,
    description: "Compra de produtos",
    date: "2023-07-28",
    value: 100.50,
  },
  {
    id: 2,
    description: "Pagamento de contas",
    date: "2023-07-27",
    value: -50.00,
  },
  {
    id: 3,
    description: "Depósito bancário",
    date: "2023-07-26",
    value: 300.00,
  },
  {
    id: 4,
    description: "Saque em caixa eletrônico",
    date: "2023-07-25",
    value: -80.00,
  },
  {
    id: 5,
    description: "Pagamento de salário",
    date: "2023-07-24",
    value: 2000.00,
  },
];

export function History(){
    return (<TableContainer>
        <Table  sx={{ width: '34rem'}}>
          <TableHead>
            <TableRow sx={{border: 'none'}}>
              <TableCell align="left" sx={{ fontSize:'1.5rem', fontWeight:700, border: 'none'}}>Historico</TableCell>
              <TableCell align="right" sx={{ fontSize:'0.875rem', fontWeight:400, border: 'none' }}>
                <Link href="/transactions/extracts">
                  Ver mais
                </Link>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {
                dataHistory.map(history => {
                  const { id } = history; 
                  return (<LineTable data={history} key={id} />)
                }
                )
              }
          </TableBody>
        </Table>
      </TableContainer>)
}



