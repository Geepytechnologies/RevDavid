import React from "react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Index(){
    return(
        <>
        <Header />
        <Navbar />
        <div>
            <div>
                <p className="text-[20px] font-[600]">Admin Dashboard</p>
            </div>
            <div>
                <p>Contacts</p>
                <TableContainer>
                    <Table variant='simple'>
                        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                        <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>NAME</Th>
                            {/* <Th isNumeric>multiply by</Th> */}
                        </Tr>
                        </Thead>
                        <Tbody>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td isNumeric>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>feet</Td>
                            <Td>centimetres (cm)</Td>
                            <Td isNumeric>30.48</Td>
                        </Tr>
                        <Tr>
                            <Td>yards</Td>
                            <Td>metres (m)</Td>
                            <Td isNumeric>0.91444</Td>
                        </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </div>
            <div>
                <p>Donations</p>
                <TableContainer>
                    <Table variant='simple'>
                        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                        <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>NAME</Th>
                            {/* <Th isNumeric>multiply by</Th> */}
                        </Tr>
                        </Thead>
                        <Tbody>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td isNumeric>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>feet</Td>
                            <Td>centimetres (cm)</Td>
                            <Td isNumeric>30.48</Td>
                        </Tr>
                        <Tr>
                            <Td>yards</Td>
                            <Td>metres (m)</Td>
                            <Td isNumeric>0.91444</Td>
                        </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </div>
        </div>
        <Footer />
        </>
    )
}