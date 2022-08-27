import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Middle4.module.css";

const data =[
    {
        img:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658864126_1657780099_cover1.jpg",
        title:"All You Need To Know About Thailand Visa For Indians 2022",
        by:"Sinchita Sinha"
    },
    {
        img:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658863969_1493707507_15798144758_5a93457ae4_o.jpg",
        title:"Add These Offbeat Places In Europe To Your List",
        by:"Sumedha Bharpilana"
    },
    {
        img:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1653585757_1648645960_5.jpg",
        title:"Travel Solo To These SE Asian Countries Under 25K INR",
        by:"Riyanka Roy"
    },
    {
        img:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1651046452_1545558276_erdap_2129568_1280.jpg",
        title:"You Can Travel To Serbia From India Without A Visa",
        by:"Ayushee Chaudary"
    },
    {
        img:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658863871_1499420095_800px_kawah_ijen_ijen_crater_7540434086.jpg",
        title:"Head To This Kaleidoscopic Volcanic Lake In Indonesia",
        by:"Pritha Puri"
    },
    {
        img:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658864265_1658819571_9.jpg",
        title:"Nusa Penida And Nusa Lembongan: Itinerary",
        by:"Sayantani"
    },
    {
        img:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658864365_1529568428_1469857553_1.jpg",
        title:"This August, Take A Trip To Vietnam Like Never Before!",
        by:"Archana Singh"
    }
    

]


export default function Middle4() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
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
      <p style={{fontSize:"30px",fontWeight:"700",marginTop:"20px",textAlign:"start",marginBottom:"20px"}}>Plan International Trips for August & September</p>
        <Carousel responsive={responsive}>
            
            {data.map((item)=>(
                <div style={{height:"60%",width:"70%",margin:"auto"}} key={item.by}>
                    <img  style={{borderRadius:"5%",height:"100%",width:"100%"}} src={item.img} alt="" />
                  <p style={{fontWeight:"600",marginTop:"5px",textAlign:"start",color:"black",fontSize:"17px"}}>{item.title}</p>
                  
                </div>
            ))}
        </Carousel>
      </div>
    
    </div>
  );
}
