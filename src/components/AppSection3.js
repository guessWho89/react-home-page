import React from 'react';
import '../css/AppSection3.css';
import ItemCard from './ItemCard';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

export default function AppSection3() {
    return (
        <section className="section3" data-aos="slide-right">
            <h2>Featured items</h2>
            <ItemCard />
            <div className="controls">
                <div className="left" onClick={() => document.querySelector('.itemCards').scrollBy({top: 0, left: -500, behavior: 'smooth'})}>
                    <ArrowBackIosRoundedIcon />
                </div>
                <div className="right" onClick={() => document.querySelector('.itemCards').scrollBy({top: 0, left: 500, behavior: 'smooth'})}>
                    <ArrowForwardIosRoundedIcon />
                </div>
            </div>
        </section>
    )
}
