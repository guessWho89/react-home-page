import React from 'react';
import '../css/AppSection2.scss';
import illustration2 from '../images/illustration2.png';
import { Button }  from '@material-ui/core';

export default function AppSection2() {
    return (
        <section className="section2">
            <div className="wrap">
                <div className="imgHolder" data-aos="zoom-in-left">
                    <img src={illustration2} className="illustration2" alt=""/>
                </div>
                <div className="textHolder" data-aos="zoom-in-right">
                    <h2>Post an item for sale</h2>
                    <p>To post an item for sale - please register or sign in if you are already registered with allgood.</p>
                    <div className="btnsHolder">
                        <Button className="signUp">Sign Up</Button>
                        <Button className="signIn">Sign In</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
