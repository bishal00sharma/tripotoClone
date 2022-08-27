import React from 'react';
import styles from "./Middle1.module.css";
import { Flex,Box, Spacer,Image,Text } from '@chakra-ui/react'
export default function Middle1 () {
  return (
    
    <Flex style={{width:"70%",boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",position:"absolute",left:"15%",top:"500px"}}>
    <Flex >
        <Image src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192329_aa.png" />
        
    </Flex>
    
    <Flex >
        <Image src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192273_bb.png" />
        
    </Flex>
    
    <Flex >
        <Image src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192307_cc.png" />
        
    </Flex>
    <Flex >
        <Image src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192344_dd.png" />
        
    </Flex>
</Flex>
  )
}
