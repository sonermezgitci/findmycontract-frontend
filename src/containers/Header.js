import React from 'react'
import "./Header.css";
import HeaderOption from "./HeaderOption";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from "@material-ui/icons/Home";
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import InfoIcon from '@material-ui/icons/Info';
import PostAddIcon from '@material-ui/icons/PostAdd';

function Header() {
    return (

        <div className="header">
            {/* <div><h1> FIND MY CONTRACT </h1></div> */}

            <div className="header__left" >
                <img
                    src="https://theundefeated.com/wp-content/uploads/2017/06/nbalogo.jpg?w=1024"
                    alt=""
                />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>

            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SportsBasketballIcon} title="My Players" />
                <HeaderOption Icon={InfoIcon} title="about" />
                <HeaderOption Icon={PostAddIcon} title="Contracts" />

            </div>
        </div>



    )
}

export default Header
