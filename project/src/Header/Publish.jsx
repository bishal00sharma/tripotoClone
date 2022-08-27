import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
  } from '@chakra-ui/react'
  import {FaChevronDown } from "react-icons/fa";

export default function Publish(){
    return(
        <Menu >
        <MenuButton  colorScheme='transparent' rightIcon={<FaChevronDown />} as={Button} >
            Publish Trip
        </MenuButton>
        <MenuList style={{color:"black"}}>
            <MenuItem>Create New</MenuItem>
            <MenuItem>Upload Photos/Videos</MenuItem>
            <MenuItem>Import Vlog</MenuItem>
        </MenuList>
    </Menu>
    )
}