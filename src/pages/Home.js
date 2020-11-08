import React from 'react';
import AppIntro from '../components/AppIntro';
import AppSection1 from '../components/AppSection1';
import AppSection2 from '../components/AppSection2';
import AppSection3 from '../components/AppSection3';
import AppSection4 from '../components/AppSection4';

export default function Home() {
    return (
        <div className="homePage">
            <AppIntro />
            <AppSection1 />
            <AppSection2 />
            <AppSection3 />
            <AppSection4 />
        </div>
    )
}
