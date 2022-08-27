import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Middle2.module.css";

const data =[
    {
        img:"https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660817736_078_commonarea_07_min.jpg",
        title:"GOSTOPS",
        para:"Experience the Best of Monsoon With These Trendy goSTOPS Stays Under Rs 2,000"
    },
    {
        img:"https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1659608221_d0f7de4a_b1d9_40e0_bba0_d0527a824e78.jpg",
        title:"SINGAPORE TOURISM BOARD",
        para:"The Panchi Befikra Contest IsLive And Here's Why You Should Participate!"
    },
    {
        img:"https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660808085_shutterstock_1611239635_min.jpg",
        title:"SAUDI TOURISM AUTHORITY",
        para:"This Quiz On Saudi Will Help You Design Your Best Adventure!"
    },
    {
        img:"https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660310642_j_1.jpg",
        title:"NIYO GLOBAL",
        para:"India's Top Travel Infuencers Share Their Best Secrets For Budget International Trips!"
    },
    {
        img:"https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660807748_shutterstock_1876968394_1_min.jpg",
        title:"SAUDI TOURISM AUTHORITY",
        para:"Offering A Mix Of Culture And Modernity, Riyadh ls Perfect For Every Kind Of Traveller"
    },
    {
        img:"https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660807837_shutterstock_1967521477_min.jpg",
        title:"SAUDI TOURISM AUTHORITY",
        para:"The Panchi Befikra Contest IsLive And Here's Why You Should Participate!"
    },
    {
        img:"https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1659354694_yaopey_yong_flmptucjkto_unsplash.jpg",
        title:"AMBERSTUDENT",
        para:"Student In London? Here'sYour Guide To Affordable And Exciting Ways To Explore The City!"
    },
    {
        img:"https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660807878_saudi_farasan.jpg",
        title:"SAUDI TOURISM AUTHORITY",
        para:"These Staycation Hotels In Singapore Will Make You Wish Your Vacation Lasts Forever"
    },
    // {
    //     img:"",
    //     title:"",
    //     para:""
    // },


]


export default function Middle2() {
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
     
      <div style={{ position: "relative",paddingTop:"600px",width:"70%",margin:"auto" }}>
      <p style={{fontSize:"30px",fontWeight:"700",marginBottom:"25px",textAlign:"start"}}>In the Spotlight: Partnerships</p>
        <Carousel responsive={responsive}>
            
            {data.map((item)=>(
                <div style={{height:"60%",width:"70%",margin:"auto"}} key={item.para}>
                    <img  style={{borderRadius:"10%",height:"100%",width:"100%"}} src={item.img} alt="" />
                    <p style={{textAlign:"start",color:"red",fontSize:"14px",letterSpacing:"1px"}}>{item.title}</p>
                    <p style={{fontWeight:"600",marginTop:"5px",textAlign:"start",color:"black",fontSize:"17px"}}>{item.para}</p>
                </div>
            ))}
        </Carousel>
      </div>
      <img style={{width:"70%",margin:"auto"}} src="https://cdn1.tripoto.com/media/transfer/img/2224454/Image/1656479622_header_web2.gif" alt="" />
    </div>
  );
}
