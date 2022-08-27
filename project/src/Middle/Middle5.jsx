import { color } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Middle5.module.css";

const data =[
    {
        img:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658864670_1511440192_ononono.jpg",
        stays:"BUDGET STAYS",
        title:"These Hostels In Udaipur Are Perfect For Every Backpacker",
        by:"Adete Dahiya"
    },
    {
        img:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658865127_1542805937_gc13_min.png",
        stays:"BUDGET STAYS",
        title:"This Lakeside Hostel Is The Perfect Escape From Delhi",
        by:"Sonalika Debnath"
    },
    {
        img:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1656332499_1656096038_manalsu_2.jpg",
        stays:"BUDGET STAYS",
        title:"Ultimate List Of Government Guest Houses Under 3K INR",
        by:"Arko Banerjee"
    },
    {
        img:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658864962_1658078162_untitled_design_4.jpg",
        stays:"LUXURY STAYS",
        title:"Mayfair, Gangtok: Find Luxury At Sikkim's Capital City",
        by:"Rashmi Sharma"
    },
    {
        img:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658865183_1658328821_96973001.jpg",
        stays:"LUXURY STAYS",
        title:"Bookmark These Luxury Stays In Karnataka",
        by:"Aparajita"
    },
    {
        img:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658865473_1624930163_204510997_1547710488915140_4246753834666811348_n.jpg",
        stays:"HOMESTAYS",
        title:"This Father-Son Duo Turned Their Farm Into A Homestay",
        by:"Divyangna (Nomadic Missy)"
    },
    

]


export default function Middle3() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div >
     
      <div style={{ position: "relative",width:"70%",margin:"auto" }}>
      <p style={{fontSize:"30px",fontWeight:"700",marginBottom:"25px",marginTop:"20px",textAlign:"start"}}>Check Out Best Hotels and Properties for Every Type of Traveller</p>
        <Carousel responsive={responsive}>
            
            {data.map((item)=>(
                <div style={{height:"60%",width:"70%",margin:"auto"}} key={item.by}>
                    <img  style={{borderRadius:"10%",height:"100%",width:"100%"}} src={item.img} alt="" />
                  <p style={{fontWeight:"600",marginTop:"5px",textAlign:"start",color:"teal",fontSize:"17px"}}>{item.stays}</p>
                  <p style={{fontWeight:"600",marginTop:"5px",textAlign:"start",color:"black",fontSize:"17px"}}>{item.title}</p>
                    <p style={{textAlign:"start",color:"red",fontSize:"14px",letterSpacing:"1px"}}>By {item.by}</p>
                </div>
            ))}
        </Carousel>
      </div>
    
    </div>
  );
}
