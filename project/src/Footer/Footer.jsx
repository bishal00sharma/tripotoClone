import styles from "./Footer.module.css";
import {GrFacebook} from "react-icons/gr"
import {SiTwitter} from "react-icons/si"
import {FaInstagramSquare} from "react-icons/fa"
import {BsYoutube} from "react-icons/bs";
import {BsPinterest} from "react-icons/bs"
// import {GrFacebook} from "react-icons/gr"
// import {GrFacebook} from "react-icons/gr"
export default function Footer(){
    return(
        <div>
        <div className={styles.main}>
            <hr />
            <div>
                <div className={styles.logoBox}>
                    <img src="https://cdn1.tripoto.com/assets/2.9/img/logo/header-blue.svg" alt="" />
                    <p>India's Largest Travel Community</p>
                    <hr />
                    <div>
                        <a target="blank" href="https://www.facebook.com/Tripoto"><GrFacebook /></a>
                        <a target="blank" href="https://twitter.com/TRIPOTO"><SiTwitter /></a>
                        <a target="blank" href="https://www.instagram.com/tripotocommunity/?hl=en"><FaInstagramSquare /></a>
                        <a target="blank" href="https://www.youtube.com/channel/UCjOXlKzzxdZG6BhKCQtWKWQ"><BsYoutube /></a>
                        <a target="blank" href="https://www.pinterest.com/tripoto/"><BsPinterest /></a>
                </div>
                <p>Dowload our App</p>
                    <img className={styles.playstore} src="https://cdn1.tripoto.com/assets/2.9/img/logo/download-android-app.svg" alt="" />
                </div>
            </div>

            <div className={styles.footerOptions}>
                <b>About Tripoto</b>
                <p>How it works</p>
                <p>FAQ's</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Careers</p>
                <p>Contact Us</p>
            </div>

            <div className={styles.footerOptions}>
            <b>Products</b>
                <p>Tour Packages</p>
                <p>Travel Guides</p>
                <p>Trips & Itineraries</p>
                <p>Weekend Getaways</p>
                <p>Places to Visit</p>
                <p>Other Travel Categories</p>
                <p>Tripoto Forum</p>
            </div>
            




            <div className={styles.footerOptions}>
                <b>Important Travel Links</b>
                <p>Goa Tourism</p>
                <p>Dubai Tourism</p>
                <p>Singapore Tourism</p>
                <p>Kerala Tourism</p>
                <p>Manali Tourism</p>
                <p>Bali Tourism</p>
                <p>Sri Lanka Tourism</p>
                <p>Honeymoon Destinations In India</p>
            </div>
            






            <div className={styles.footerOptions}>
                <b>Partner Programs</b>
                <p>Buy Travel Leads</p>
                <p>Partner With Us</p>
                <p>Earn Credits</p>
                <p>Get Paid To Travel</p>
                <p>Import Blog To Itinerary</p>
                <p>Tripoto Ai</p>
            
            </div>
            <hr />
            
        </div>
        
        <p style={{textAlign:"center"}}>© All rights reserved.</p>
        </div>
    )
}