import React from 'react'
import "./Header.css";
import HeaderOption from "./HeaderOption";


function Header() {
    return (

        <div className="header">
            <div><h1> FIND MY CONTRACT </h1></div>

            <div className="header__left" >

                <img src="https://theundefeated.com/wp-content/uploads/2017/06/nbalogo.jpg?w=1024" alt="" />
                <div className="header__right">
                    <HeaderOption title="home" />
                    <HeaderOption title="contact" />
                    <HeaderOption title="about" />



                </div>



            </div>
        </div>
    )
}

export default Header
