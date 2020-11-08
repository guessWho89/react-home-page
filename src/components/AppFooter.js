import '../css/AppFooter.css';
import logoAllDark from '../images/logo-all-dark.png';
import fbIcon from '../images/fb-icon.png';
import igIcon from '../images/ig-icon.png';
import twIcon from '../images/tw-icon.png';

export default function AppFooter() {
    return (
        <footer data-aos="flip-up">
            <div className="footerHolder">
                <div className="footerTop">
                    <div className="box1">
                        <img src={logoAllDark} className="logoAllDark" alt=""/>
                        <p>Online marketplace, where you can sell your stuff in support of the charity or campaign you choose.</p>
                        <div className="socialIcons">
                            <a href="#facebook" className="socialLink">
                                <img src={fbIcon} alt=""/>
                            </a>
                            <a href="#instagram" className="socialLink">
                                <img src={igIcon} alt=""/>
                            </a>
                            <a href="#twitter" className="socialLink">
                                <img src={twIcon} alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="box2">
                        <h3>Allgood</h3>
                        <p><a href="#about-us">About us</a></p>
                        <p><a href="#contact">Contact</a></p>
                        <p><a href="#help">Help</a></p>
                    </div>
                    <div className="box3">
                        <h3>Charities</h3>
                        <p><a href="#partners">Charity/Campaign partners</a></p>
                        <p><a href="#sign-up">Sign up charity/campaign</a></p>
                    </div>
                </div>
                <div className="footerBottom">
                    <p>&copy; Allgood 2020 All Rights Reserved</p>
                    <p><a href="#privacy-policy">Privacy Policy</a></p>
                    <p><a href="#terms-of-service">Terms Of Service</a></p>
                </div>
            </div>
        </footer>
    )
}
