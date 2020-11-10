import React from 'react'
import '../css/AppIntro.scss';
import IntroBox from './IntroBox';
import illustration1 from '../images/illustration1.png';

export default function AppIntro() {
    return (
        <section className="appIntro">
            <div className="introHolder">
                <IntroBox />
                <div className="illustration1" data-aos="fade-left">
                    <img src={illustration1} alt="illustration" />
                </div>
            </div>
        </section>
    )
}
