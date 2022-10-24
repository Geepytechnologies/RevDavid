import React, { useState } from "react";
import axios from "axios";
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
    Spinner,
  } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
} from '@chakra-ui/react'
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Router from "next/router";
import { AiFillCheckCircle } from "react-icons/ai";

export default function Index({contacts}){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [deleteIndex, setDeleteIndex] = useState();
    const [loading,setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const id = contacts[deleteIndex]?._id;
    const deleteitem = (index)=>{
       console.log(index);
       setDeleteIndex(index);
       onOpen();
    }
    const handleDelete = async ()=>{
      try{
        setLoading(true);
         const response = await axios.delete(`http://localhost:3000/api/contacts/${id}`)
         console.log(response.status)
         response && setLoading(false);
         setSuccess(true); 
         Router.reload('/dashboard')
      }catch(err){
        console.log(err)
      }
    }
    return(
        <>
        {/* <Button onClick={onOpen}>Give</Button> */}

       <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                {/* <ModalHeader>Modal Title</ModalHeader> */}
                {!loading && <ModalCloseButton />}
                <ModalBody>
                  {loading === true ?
                  <div className="w-[100%] flex flex-col items-center justify-center">
                   <Spinner thickness='4px'
                   speed='0.65s'
                   emptyColor='gray.200' size="xl" color='red.500' /><p className="mt-[4px] font-[600]">Deleting....</p></div> :
                    !success ? <div>
                        <p>Proceed with Deleting contact?</p>
                    </div> : <div className="flex flex-col items-center text-[50px]"><AiFillCheckCircle className="text-[green]" /><p className="font-[600] text-[20px]">success</p></div>
                   }
                </ModalBody>
                <ModalFooter>
                    {loading === false || success === false ? <Button colorScheme='blue' mr={3} onClick={onClose}>
                        No
                    </Button>: null}
                    {loading === false || success === false ? <Button onClick={handleDelete} variant='ghost'>Yes</Button> : null}
                </ModalFooter>
            </ModalContent>
        </Modal>
        <Header />
        <Navbar />
        <div>
            <div>
                <p className="text-[30px] font-[600]">Admin Dashboard</p>
            </div>
            <div>
                <p className="text-[20px]">Contacts</p>
                <TableContainer>
                    <Table variant='simple'>
                        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                        <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>NAME</Th>
                            <Th>EMAIL</Th>
                            <Th>PHONE</Th>
                            <Th>PRAYER REQUEST</Th>
                            <Th>TESTIMONIES</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                        {contacts.map((item,index)=>
                        <Tr key={index}>
                            <Td>{index + 1}</Td>
                            <Td>{item.name} {item.surname}</Td>
                            <Td>{item.email}</Td>
                            <Td>{item.phone}</Td>
                            <Td>{item.prayerRequest}</Td>
                            <Td>{item.testimonies}</Td>
                            <Td onClick={()=>deleteitem(index)} className="rounded-xl" style={{backgroundColor: "#9b0000", color:"white", fontWeight: "600"}}>Delete</Td>
                        </Tr>)}
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
                            <Th style={{color: "red"}}>ID</Th>
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

export const getServerSideProps = async (context) =>{
    const myCookie = context.req?.cookies || "";
    if(myCookie.token !== process.env.TOKEN){
        return{
            redirect:{
                destination: "/login",
                permanent: false,
            }
        }
    }
    const res = await axios.get("http://localhost:3000/api/contacts");
    return{
        props: {
            contacts: res.data
        }
    }
}