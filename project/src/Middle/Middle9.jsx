import styles from "./Middle9.module.css";

export default function Middle9(){
    return(
        <div style={{width:"80%",margin:"auto",marginTop:"80px",marginBottom:"50px"}}>
            <p style={{marginBottom:"30px",fontSize:"25px",fontWeight:"600",textAlign:"start"}}>Plan Your Next Trip Using Tripoto's Complete Destination Guides</p>
         <div style={{display:"flex",justifyContent:"space-evenly",gap:"20px"}}>
            <div><img src="https://cdn1.tripoto.com/media/filter/tst/img/1756031/Image/1599216481_rajasthan.jpg" alt="" /></div>
            <div><img src="https://cdn1.tripoto.com/media/filter/tst/img/1756031/Image/1599216560_kerala.jpg" alt="" /></div>
            <div><img src="https://cdn1.tripoto.com/media/filter/tst/img/1756031/Image/1599216649_andaman.jpg" alt="" /></div>
            <div><img src="https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1613732339_1_10.jpg" alt="" /></div>
         </div>
        </div>
    )
}