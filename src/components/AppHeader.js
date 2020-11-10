import React from 'react';
import '../css/AppHeader.scss';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import avatar from '../images/avatar.png';
import { ListItemSecondaryAction } from '@material-ui/core';




export default function AppHeader() {
    return (
        <header>
            <div className="wrap" data-aos="slide-down">

                <div className="topBar">
                    <div className="logoImg" onClick={() => {window.location.href='/'}}></div>
                    <div className="menu">
                        <a href="/search-items" className="menuOption">Search items</a>
                        <a href="/post-items" className="menuOption">Post items</a>
                    </div>
                    <div className="infoBox">
                        <a href="#messages" className="linkToMessages" data-message-count="0">
                            <MailOutlineIcon style={{ color: "#fff", fontSize: "40px" }} />
                        </a>
                        <a href="#notifications" className="linkToNotifications" data-notification-count="2">
                            <NotificationsNoneIcon style={{ color: "#fff", fontSize: "40px" }} />
                        </a>
                    </div>
                    <div className="userInfo">
                        <a href="#profile" className="avatar">
                            <img src={avatar} alt="avatar" />
                        </a>
                        <select name="" id="" className="userOptions">
                            <option value="Username">Username</option>
                        </select>
                        <ExpandMoreIcon style={{ color: "#fff", fontSize: "32px", position: "absolute", right: "0", zIndex: "1" }} />
                    </div>
                </div>

                <div className="filters">
                    <select name="" id="">
                        <option value="Location">Location</option>
                    </select>
                    <select name="" id="">
                        <option value="Category">Category</option>
                    </select>
                    <select name="" id="">
                        <option value="Charity">Charity</option>
                    </select>
                    <input type="text" placeholder="Search or post..." className="searchInput" />
                    <button type="button" className="searchBtn">
                        <SearchIcon className="searchIcon" />
                    </button>
                </div>

            </div>
        </header>
    )
}
