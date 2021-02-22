import React from 'react'
import "./Sidebar.css";
import { Avatar } from '@material-ui/core'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShUkmy4KvaHOCzTQ2FZPb7zR6RPdmaHwoS9w&usqp=CAU" alt="" />
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
