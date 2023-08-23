"use client";
import { Input } from "@chakra-ui/react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from "react";

export function ExtractsHistory(){
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    function handleChange(event: any, newPage: number){
        setPage(newPage)
    }

    return (<div className="flex flex-col gap-8 my-4">
        <form className="flex flex-col gap-4 w-80">
            <h1 className="text-blue-950 text-2xl font-sans font-bold">Selecione o intervalo</h1>
            <Input
                placeholder="Selecione a data de início"
                size="md"
                type="date"
                width='auto'
            />
            <Input    
                placeholder="Selecione a data de início"
                size="md"
                type="date"
                width='auto'
            />
        </form>
        <div className="flex flex-col gap-4">
            <TableContainer>
                <Table variant='simple' maxW="800px">
                    <Thead>
                    <Tr>
                        <Th textAlign="center">Nome</Th>
                        <Th textAlign="center">Descrição</Th>
                        <Th textAlign="center">Tipo</Th>
                        <Th textAlign="center">Valor</Th>
                        <Th textAlign="center">Data</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                        <Tr h="48px">
                            <td>Deposito</td>
                            <td>Deposito de 100 reais1</td>
                            <td>entrada</td>
                            <td>R$ 100</td>
                            <td>08/223/2023</td>
                        </Tr>
                        <Tr h="48px">
                            <td>Deposito</td>
                            <td>Deposito de 100 reais1</td>
                            <td>entrada</td>
                            <td>R$ 100</td>
                            <td>08/223/2023</td>
                        </Tr>
                        <Tr h="48px">
                            <td>Deposito</td>
                            <td>Deposito de 100 reais1</td>
                            <td>entrada</td>
                            <td>R$ 100</td>
                            <td>08/223/2023</td>
                        </Tr>
                        
                    </Tbody>
                </Table>
            </TableContainer>
            <Pagination 
                size="medium" 
                variant="outlined"
                count={50} 
                defaultPage={1}
                color="secondary" 
                showFirstButton 
                showLastButton
                hidePrevButton 
                hideNextButton
                page={page}
                onChange={handleChange}
            />
        </div>
    </div>);
}