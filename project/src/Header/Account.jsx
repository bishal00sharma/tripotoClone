import {
   
    FormLabel,Input,Modal,ModalOverlay,ModalContent,
    FormControl,ModalBody,ModalCloseButton,ModalHeader, Button, InputGroup, InputRightElement, Icon
  } from '@chakra-ui/react'

  import {AppContext} from "../Context/AppContext";

  import { useDisclosure } from '@chakra-ui/react'
  import React from "react"
import Register from './Register';
import { useContext,useState } from 'react';

  

   export default function Account() {

    const {loginUser} =useContext(AppContext);
    const [formState,setFormState] =useState( {email:"",password:""});

    
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show);

  const handleChange=(e)=> {
    const { name:key,value} =e.target;
    setFormState({ ...formState,[key]:value})
  }

  function handleSign(e){
    let email= formState.email ;
    let password= formState.password ;

    e.preventDefault();
    fetch("https://reqres.in/api/login" , {
      method:"POST",
      headers:{
        "Content-Type":`application/json`
      },
      body: JSON.stringify( {email,password})
    })
    .then((res)=>res.json()).then((res)=>{
      if(res.token!=""){
          loginUser(res.token)
      }
      
      console.log(res.token)
      {res.token?alert("Successfully signed in"):alert("Wrong Credentials")}
      
    })
    
    onClose()
  }


  return (
    <>
      <img onClick={onOpen} style={{width:"40px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd3x1yLjEnFCxsIIQPkqyqbQ3ns7roRMgQzeDT3tHD&s" alt="" />
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login to your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input  placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email id</FormLabel>
              <Input name="email" onChange={handleChange} placeholder='Email id' type="email"/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <InputGroup size='md'>
                  <Input name="password" onChange={handleChange}
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
              <Button onClick={handleSign} style={{marginLeft:"165px",marginTop:"15px"}} colorScheme='teal'>Sign</Button>
            </FormControl>
            <Register onClick={onClose} />
          </ModalBody>

          </ModalContent>
         
      </Modal>
    </>
  )
}
    