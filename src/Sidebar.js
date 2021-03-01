import React from 'react'
import "./Sidebar.css";
import { Avatar } from '@material-ui/core'

function Sidebar() {
    const recentItem = (topic) => (

        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>


        </div>


    )



    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img
                    src="https://images.pexels.com/photos/891030/pexels-photo-891030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
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
                {recentItem('react.js')}
                {recentItem('soccer')}
                {recentItem('basketball')}
                {recentItem('volleyball')}
                {recentItem('contract')}
            </div>
        </div>
    )
}

export default Sidebar
