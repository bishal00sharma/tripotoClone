import {
    Menu,
    MenuButton,
    MenuList,Image,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,Button
  } from '@chakra-ui/react'
  import {FaChevronDown } from "react-icons/fa";
  import styles from "./Header.module.css";


export default function Inspirations(){
    return(
        
        <Menu >
        <MenuButton colorScheme='transparent' className={styles.inspirations} rightIcon={<FaChevronDown />} as={Button} >
            Inspirations
        </MenuButton>
        <MenuList style={{color:"black"}}>
            <MenuItem>Visit Dubai</MenuItem>
            <MenuItem>Visit Singapore</MenuItem>
            <MenuItem>Mountains</MenuItem>
            <MenuItem>Heritage</MenuItem>
            <MenuItem>Weekend Guide</MenuItem>
        </MenuList>
    </Menu>
    )
}