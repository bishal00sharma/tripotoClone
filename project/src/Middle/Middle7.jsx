//Book Budget Tour Packages Curated For You
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {GoLocation } from "react-icons/go";
import {Button} from "@chakra-ui/react";
import styles from "./Middle7.module.css";

const data =[
    {
        img:"https://cdn1.tripoto.com/media/filter/tst/img/1524784/Image/1567683210_north_east_web.jpg",
        place:"Northeast India",
        title:"North East India Tour Packages",
        price:"29,000",
        days:"6D 5N"
    },
    {
        img:"https://cdn1.tripoto.com/media/filter/tst/img/1524784/Image/1567063251_kashmir_app.jpg",
        place:"Kashmir",
        title:"Kashmir Packages",
        price:"16,000",
        days:"4D 3N"
    },
    {
        img:"https://cdn1.tripoto.com/media/filter/tst/img/1524784/Image/1567083461_dubai_app.jpg",
        place:"Dubai ",
        title:"Dubai Packages",
        price:"25,000",
        days:"4D 3N"
    },
    {
        img:"https://cdn1.tripoto.com/media/filter/tst/img/1524784/Image/1567494998_andaman_app.jpg",
        place:"Andaman",
        title:"Andaman Packages",
        price:"18,000",
        days:"5N 4D"
    },
    {
        img:"https://cdn1.tripoto.com/media/filter/tst/img/454712/Image/1578895208_web_maldives.jpg",
        place:"Maldives ",
        title:"Maldives Holiday Packages",
        price:"24,599",
        days:"4D 3N"
    },
    

]


export default function Middle7() {
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
     
      <div style={{ position: "relative",width:"80%",margin:"auto" }}>
      <p style={{fontSize:"30px",fontWeight:"700",marginBottom:"25px",marginTop:"20px",textAlign:"start"}}>Book Budget Tour Packages Curated For You</p>
        <Carousel responsive={responsive}>
            
            {data.map((item)=>(
                <div style={{height:"45%",width:"70%",margin:"auto"}} key={item.price}>
                    <img  style={{borderRadius:"5%",height:"100%",width:"100%"}} src={item.img} alt="" />
                    <p style={{color:"green",textAlign:"start",marginTop:'5px'}}>PACKAGE</p>
                  <p style={{fontWeight:"650",marginTop:"5px",textAlign:"start",fontSize:"18px"}}>{item.title}</p>
                  <div style={{display:"flex",justifyContent:'space-between'}}>
                    <div style={{display:"flex",marginBottom:"20px"}}>
                        <GoLocation  style={{marginRight:"10px",marginTop:"2px",color:"green"}}/>
                        <p style={{fontWeight:"650",color:"teal"}}>{item.place}</p> 
                    </div>
                    <div style={{height:"35px",color:"white",backgroundColor:"rgb(89, 181, 189)",borderRadius:"10px",padding:"3px 6px"}}>{item.days}</div>
                  </div>
                  <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p style={{fontSize:'20px',fontWeight:"650"}}>₹ {item.price}</p>
                    <Button>Get Qoutes</Button>
                  </div>
                  <div style={{display:"flex"}}>
                    <img style={{borderRadius:'50%',width:'20px',marginRight:'10px'}} src="https://cdn1.tripoto.com/media/filter/mss/img/1358539/UserPhoto/1553849222_logo.jpg" alt="" />
                    <p>Tripoto Verified Partners</p>
  
                  </div>

                </div>
            ))}
        </Carousel>
      </div>
    
    </div>
  );
}
