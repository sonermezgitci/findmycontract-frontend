import React from 'react'
import "./Sidebar.css";
import { Avatar } from '@material-ui/core'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img
                    src="https://the18.com/sites/default/files/styles/featured_mobile__621x709_/public/feature-images/20180728-The18-Image-Most-Popular-Sports2.jpg?itok=MxEx9sE1" alt=""></img>
                <Avatar className="sidebar__avatar" />
                <h2>Soner Mezgitci</h2>
                <h4> sonermezgitci9@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat" >
                    <p> Who viewed you </p>
                    <p className="sidebar__statNumber">2,534</p>
                </div>
                <div className="sidebar__stat" >
                    <p> Views on Post </p>

                    <p className="sidebar__statNumber">2,448</p>

                </div>
            </div>
            <div className="sidebar__bottom">
                <p> Recent </p>
            </div>
        </div>
    )
}

export default Sidebar