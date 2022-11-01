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
import VideoModal from "../../components/VideoModal";

export default function Index({contacts,books,images,videos}){
    const modal =  React.createRef();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [deleteIndex, setDeleteIndex] = useState();
    const [loading,setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const contactid = contacts[deleteIndex]?._id;
    const openModal = ()=>{
        modal.current.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
    const deleteitem = (index)=>{
    //    setDeleteIndex(index);
       openModal();
    }
    const handleDelete = async ()=>{
      try{
        setLoading(true);
         const response = await axios.delete(`${process.env.DOMAIN}/api/contacts/${contactid}`)
         console.log(response.status)
         response && setLoading(false);
         setSuccess(true); 
         Router.reload('/dashboard')
      }catch(err){
        console.log(err)
      }
    }
   
    return(
        <div className="">
        {/* <Button onClick={onOpen}>Give</Button> */}
    
        <Header />
        <VideoModal ref={modal} />
        <Navbar />
        <div>
            <div>
                <p className="text-[30px] font-[600]">Admin Dashboard</p>
            </div>
            <div>
                <p className="text-[20px]">Contacts</p>
                <TableContainer>
                    <Table variant='simple'>
                        <TableCaption>Imperial to metric conversion factors</TableCaption>
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
                        <Tr className="mb-[4px]" key={index}>
                            <Td>{index + 1}</Td>
                            <Td>{item.name} {item.surname}</Td>
                            <Td>{item.email}</Td>
                            <Td>{item.phone}</Td>
                            <Td className="max-w-[50px]">{item.prayerRequest}</Td>
                            <Td>{item.testimonies}</Td>
                            <Td onClick={openModal} className="rounded-xl" style={{backgroundColor: "#9b0000", color:"white", fontWeight: "600"}}>Delete</Td>
                        </Tr>)}
                        </Tbody>
                    </Table>
                </TableContainer>
            </div>
            <div>
                <TableContainer>
                    <Table variant='simple'>
                        <TableCaption className="text-[20px]">Images</TableCaption>
                        <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>NAME</Th>
                            <Th>ALT</Th>
                            <Th>URL</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                        {images.map((item,index)=>
                        <Tr className="mb-[4px]" key={index}>
                            <Td>{index + 1}</Td>
                            <Td>{item.imagename}</Td>
                            <Td>{item.alt}</Td>
                            <Td>{item.url}</Td>
                            <Td onClick={()=>additem(index)} className="rounded-xl" style={{backgroundColor: "#38a169", color:"white", fontWeight: "600"}}>ADD</Td>
                            <Td onClick={()=>deleteitem(index)} className="rounded-xl" style={{backgroundColor: "#9b0000", color:"white", fontWeight: "600"}}>DELETE</Td>
                        </Tr>)}
                        </Tbody>
                    </Table>
                </TableContainer>
            </div>
            <div>
                <TableContainer>
                    <Table variant='simple'>
                        <TableCaption className="text-[20px]">Books</TableCaption>
                        <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>NAME</Th>
                            <Th>DESCRIPTION</Th>
                            <Th>AUTHOR</Th>
                            <Th>BOOK COVER URL</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                        {books.map((item,index)=>
                        <Tr className="mb-[4px]" key={index}>
                            <Td>{index + 1}</Td>
                            <Td>{item.bookname}</Td>
                            <Td>{item.description}</Td>
                            <Td>{item.author}</Td>
                            <Td>{item.bookcoverurl}</Td>
                            <Td><button onClick={()=>additem(index)} className="rounded-sm" style={{backgroundColor: "#38a169", color:"white", fontWeight: "600", padding:'10px'}}>ADD</button></Td>
                            <Td onClick={()=>openModal} className="rounded-sm" style={{backgroundColor: "#9b0000", color:"white", fontWeight: "600", padding:'10px'}}>DELETE</Td>
                        </Tr>)}
                        </Tbody>
                    </Table>
                </TableContainer>
            </div>
            <div>
                <TableContainer>
                    <Table variant='simple'>
                        <TableCaption className="text-[20px]">Videos</TableCaption>
                        <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>DESCRIPTION</Th>
                            <Th>AUTHOR</Th>
                            <Th>IMGCOVER URL</Th>
                            <Th>VIDEO URL</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                        {videos.map((item,index)=>
                        <Tr className="mb-[4px]" key={index}>
                            <Td>{index + 1}</Td>
                            <Td>{item.videoname}</Td>
                            <Td>{item.description}</Td>
                            <Td>{item.author}</Td>
                            <Td>{item.imgcoverurl}</Td>
                            <Td>{item.videourl}</Td>
                            <Td onClick={()=>additem(index)} className="rounded-xl" style={{backgroundColor: "#38a169", color:"white", fontWeight: "600"}}>ADD</Td>
                            <Td onClick={()=>deleteitem(index)} className="rounded-xl" style={{backgroundColor: "#9b0000", color:"white", fontWeight: "600"}}>DELETE</Td>
                        </Tr>)}
                        </Tbody>
                    </Table>
                </TableContainer>
            </div>
            <div>
                <TableContainer>
                    <Table variant='simple'>
                        <TableCaption>Passion5</TableCaption>
                        <Thead>
                        <Tr>
                            <Th style={{color: "red"}}>ID</Th>
                            <Th>NAME</Th>
                            <Th isNumeric>multiply by</Th>
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
                <TableContainer>
                    <Table variant='simple'>
                        <TableCaption>Seeds and Offerings</TableCaption>
                        <Thead>
                        <Tr>
                            <Th style={{color: "red"}}>ID</Th>
                            <Th>NAME</Th>
                            <Th isNumeric>multiply by</Th>
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
        </div>
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
    const mycontacts = await axios.get(`${process.env.DOMAIN}/api/contacts`);
    const mybooks = await axios.get(`${process.env.DOMAIN}/api/books`);
    const myimages = await axios.get(`${process.env.DOMAIN}/api/videos`);
    const myvideos = await axios.get(`${process.env.DOMAIN}/api/images`);
    return{
        props: {
            contacts: mycontacts.data,
            books: mybooks.data,
            images: myimages.data,
            videos: myvideos.data,
        }
    }
}