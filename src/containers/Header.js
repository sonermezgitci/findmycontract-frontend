import React from 'react'
import "./Header.css";
import HeaderOption from "./HeaderOption";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from "@material-ui/icons/Home";
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import InfoIcon from '@material-ui/icons/Info';
import PostAddIcon from '@material-ui/icons/PostAdd';
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import InstagramIcon from '@material-ui/icons/Instagram';
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EqualizerIcon from '@material-ui/icons/Equalizer';
function Header() {
    return (

        <div className="header">


            <div className="header__left" >

                <img
                    src="/images/sport.png"
                    alt=""

                />


                {/* <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div> */}

            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SportsBasketballIcon} title="Sports" />
                <HeaderOption Icon={SupervisorAccountIcon} title="MyPlayers" />
                <HeaderOption Icon={PostAddIcon} title="MyContracts" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption Icon={EqualizerIcon} title="Stats" />
                <HeaderOption Icon={InstagramIcon} title="Follow" />
                <HeaderOption Icon={InfoIcon} title="About" />
                {/* <div><h3> FIND ME CONTRACT </h3></div> */}
                <HeaderOption avatar="https://media.gettyimages.com/photos/las-norias-spain-turkish-soner-mezgitci-hits-the-ball-as-hicham-from-picture-id53143521"
                    title="me" />


            </div>
        </div>



    )
}

export default Header
