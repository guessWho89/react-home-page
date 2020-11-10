import React from 'react';
import '../css/AppSection1.scss';
import DashedBoxes from './DashedBoxes';
import dashedHeart from '../images/dashed-heart.png';
import demoVideo from '../images/demo.mp4';

export default function AppSection1() {
    return (
        <section className="section1">
            <div className="titleHolder" data-aos="flip-left">
                <h2 className="title">How It Works</h2>
                <p className="subTitle">Learn more about AllGood</p>
            </div>
            <DashedBoxes />
            <div className="heartHolder" data-aos="fade-left">
                <div className="videoHolder">
                    {/* <iframe src="https://www.youtube.com/embed/RXKg1JyzfMY" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="demo"></iframe> */}
                    <video src={demoVideo} controls></video>
                </div>
                <div className="dashedHeart">
                    <img src={dashedHeart} alt=""/>
                    <h4 className="action">Donate</h4>
                    <p className="description">
                        AllGood sends the proceeds directly to the charity/campaign you choose to support.
                    </p>
                </div>
            </div>
            
        </section>
    )
}
