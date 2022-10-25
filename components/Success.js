import React, {useEffect} from 'react';
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

const Success = ()=>{
    const { isOpen, onOpen, onClose } = useDisclosure();
    useEffect(()=>{
        console.log('hello')
    },[])
    return (
      <>
      {/* <Button onClick={onOpen}>Give</Button> */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            {/* <ModalHeader>Modal Title</ModalHeader> */}
            <ModalCloseButton />
            <ModalBody>
               <div>
                 {/* <AiFillCheckCircle className='bg-[green]' /> */}
                 <p>Your message has been recorded!!!</p>
               </div>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
   }


export default Success;