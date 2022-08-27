import {
   
    FormLabel,Input,Modal,ModalOverlay,ModalContent,
    FormControl,ModalBody,ModalCloseButton,ModalHeader, Button, InputGroup, InputRightElement, Icon
  } from '@chakra-ui/react'
 
  import { useDisclosure } from '@chakra-ui/react'
  import React from "react"
  import {FaUserAlt } from "react-icons/fa"

  

   export default function Register() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)


  return (
    <>
     <Button style={{marginLeft:"110px",marginTop:"20px"}} onClick={onOpen} leftIcon={<FaUserAlt />}> Create your Account</Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader > Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input  placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last Name</FormLabel>
              <Input placeholder='Last name' type="email"/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email id</FormLabel>
              <Input placeholder='Email id' type="email"/>
            </FormControl>
            <FormControl mt={5}>
              <FormLabel>Password</FormLabel>
              <InputGroup size='md'>
                  <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                  />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              <Button onClick={onClose} style={{marginLeft:"125px",marginTop:"15px"}} colorScheme='teal'>Create Account</Button>
            </FormControl>
          </ModalBody>

          </ModalContent>
      </Modal>
    </>
  )
}
    