import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Middle3.module.css";

const data =[
    {
        img:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658862164_1455274435_udaipur3_jpg.jpg",
        title:"Tripoto's Destination Of The Month: Udaipur",
        by:"Tripoto"
    },
    {
        img:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1659027857_1658481747_depositphotos_95512066_stock_illustration_incredible_india_background.jpeg",
        title:"Cheapest Domestic Flights For Aug &Sept 2022",
        by:"Tanisha Mundra"
    },
    {
        img:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658862269_1467796889_1467796887893_5_2.jpg",
        title:"Here Are The Best Places To Visit In August In India",
        by:"Disha Kapkoti"
    },
    {
        img:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658863582_1657213046_satyan_chawla_pti5yh3a4l8_unsplash.jpg",
        title:"Trips Under 10K INR That You Need To Bookmark For August",
        by:"Shruti Singh"
    },
    {
        img:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658862360_1470344082_14410876714_8fb5c0e392_o.png",
        title:"Seven Hill Stations You Can Escape To This August",
        by:"Deepti Divya"
    },
    {
        img:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658862537_1658847371_mg_7852.jpg",
        title:"This Town In MP Will Soon Gain 'Wild' Popularity",
        by:"Sujay Kumar"
    },
    {
        img:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1656331454_1560494791_motorcycle_2937056_1280.jpg",
        title:"Things To Remember Before Planning A Monsoon Bike Trip",
        by:"Abhay Yadav"
    },
    {
        img:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1656331979_1465388810_mussoorie_goa_634.jpg",
        title:"Why You Should Visit Goa This Monsoon",
        by:"Veenita Singh"
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
      <p style={{fontSize:"30px",fontWeight:"700",marginBottom:"25px",marginTop:"20px",textAlign:"start"}}>Find Best Places to Visit in India in August & September</p>
        <Carousel responsive={responsive}>
            
            {data.map((item)=>(
                <div style={{height:"60%",width:"70%",margin:"auto"}} key={item.by}>
                    <img  style={{borderRadius:"10%",height:"100%",width:"100%"}} src={item.img} alt="" />
                  <p style={{fontWeight:"600",marginTop:"5px",textAlign:"start",color:"black",fontSize:"17px"}}>{item.title}</p>
                    <p style={{textAlign:"start",color:"red",fontSize:"14px",letterSpacing:"1px"}}>By {item.by}</p>
                </div>
            ))}
        </Carousel>
      </div>
    
    </div>
  );
}
