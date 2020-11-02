import '../css/AppHeader.css';
import logo from '../img/logo.PNG';
import mobLogo from '../img/logo-dark.png';
import msgIcon from '../img/msg-icon.PNG';
import bellIcon from '../img/bell-icon.PNG';
import avatar from '../img/avatar.PNG';
import searchIcon from '../img/search-icon.PNG';
import illustration1 from '../img/illustration1.PNG';
import icon1 from '../img/icon1.PNG';
import icon2 from '../img/icon2.PNG';
import icon3 from '../img/icon3.PNG';

export default function AppHeader() {
    return (
        <header>

            <div className="topBar">
                <div className="logoHolder">
                    <img src={logo} alt="logo" className="logo"/>
                    <img src={mobLogo} alt="" className="mobLogo"/>
                </div>
                <div className="menu">
                    <a href="#search-items" className="menuOption">Search items</a>
                    <a href="#post-items" className="menuOption">Post items</a>
                </div>
                <div className="infoBox">
                    <a href="#messages" className="linkToMessages">
                        <img src={msgIcon} alt="message-icon"/>
                        {/* <span className="messagesCounter"></span> */}
                    </a>
                    <a href="#notifications" className="linkToNotifications">
                        <img src={bellIcon} alt="bell-icon"/>
                        <span className="notificationCounter">2</span>
                    </a>
                </div>
                <div className="userInfo">
                    <a href="#profile" className="avatar">
                        <img src={avatar} alt="avatar"/>
                    </a>
                    <select name="" id="" className="userOptions">
                        <option value="Username">Username</option>
                    </select>
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
                <input type="text" placeholder="Search or post..." className="searchInput"/>
                <button type="button" className="searchBtn">
                    <img src={searchIcon} alt=""/>
                </button>
            </div>

            <div className="intro">
                <div className="introBoxes">
                    <div className="introBox">
                        <div className="iconHolder">
                            <img src={icon1} alt=""/>
                        </div>
                        <p>Turn your stuff into cash donations</p>
                    </div>
                    <div className="introBox">
                        <div className="iconHolder">
                            <img src={icon2} alt=""/>
                        </div>
                        <p>Shop allgood.market - and support a charity</p>
                    </div>
                    <div className="introBox">
                        <div className="iconHolder">
                            <img src={icon3} alt=""/>
                        </div>
                        <p>A new way to fundrise</p>
                    </div>
                </div>
                <div className="illustration1">
                    <img src={illustration1} alt="illustration1"/>
                </div>
            </div>

        </header>
    )
}
