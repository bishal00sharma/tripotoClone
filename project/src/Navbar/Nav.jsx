import React from 'react'
import styles from "./Nav.module.css";
import {useNavigate} from "react-router-dom";

export default function Nav(){
  const naviagte= useNavigate();
  function goto(){
    naviagte(`/`);
  }
  return (
    <div className={styles.mainNavBox}>
      <div>
        <img onClick={goto} src="https://cdn1.tripoto.com/assets/2.9/img/logo/tripoto.svg" alt="" />
      </div>
        <div>
          <p>Inspirations </p>
          <p>Forum</p>
          <p>Packages</p>
          <p>Publish Trips</p>
          <img className={styles.navbarAccountimg} src="https://static2.tripoto.com/media/filter/tst/img/311219/TripDocument/1624442336_def_prof.jpg" alt="" />
        </div>
      
    </div>
  )
}
