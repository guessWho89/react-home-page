import React from 'react';
import '../css/AppSection4.css';
import greenCircle from '../images/green-circles.png';
import { Button }  from '@material-ui/core';

export default function AppSection4() {
    return (
        <section className="section4">
            <div className="grayBox">
                <h2>Are you a Charity or Organisation looking to Fundraise?</h2>
                <p>Want to register with AllGood.market so people can donate the proceeds of their sales to you? Please contact us at ifno@allgod.market or complete our online form.</p>
                <Button class="btn">Sign up charity/campaign</Button>
                <img src={greenCircle} className="greenCircle "alt=""/>
            </div>
        </section>           
    )
}
