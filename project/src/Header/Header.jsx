import styles from "./Header.module.css";
import {ImLocation2 } from "react-icons/im";
import {FaChevronDown } from "react-icons/fa";
import Account from "./Account";
import Publish from "./Publish"
import Inspirations from "./Inspirations";
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
import { useState } from "react";


export default function Header(){
    const [textval,setText] = useState("");
    
    function handleChange(e){
        setText(e.target.value)
    }
    return( 
    
        <div className={styles.mainDiv}>
            <Image style={{objectFit:'cover'}} className={styles.banner} src="https://cdn1.tripoto.com/assets/2.9/img/home_banner_road.jpg" alt="topImage" />
            <img className={styles.title} src="https://cdn1.tripoto.com/assets/2.9/img/logo/tripoto.svg" alt="" />
            {/* <ImLocation2 className={styles.logo}/>
           <p className={styles.title}>tripoto</p> */}
           <div className={styles.options}>
           <Publish />
           
            <Button style={{color:"white"}} colorScheme='transparent'>Forum</Button>
            <Button style={{color:"white"}} colorScheme='transparent'>Packages</Button>
           
           
            <Inspirations />
            <Account />
            
           </div>

             <p className={styles.middleText}>India's Largest Community of Travellers</p>
            <input  type="text" onChange={handleChange} value={textval} placeholder="Search for Destinations or Hotels" className={styles.input} />
        </div>
    )
}