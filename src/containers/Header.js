import React from 'react'
import "./Header.css";
import HeaderOption from "./containers/HeaderOption";


function Header() {
    return (
        <div className="header">

            <div className="header__left" >
                <img src="https://theundefeated.com/wp-content/uploads/2017/06/nbalogo.jpg?w=1024" alt="" />
                <h1> FIND MY CONTRACT </h1>
            </div>
            <div className="header_right">
                <HeaderOption title="home" />
                <HeaderOption email="home" />
                <HeaderOption subscribe="subscribe" />

            </div>
        </div>
    )
}

export default Header
