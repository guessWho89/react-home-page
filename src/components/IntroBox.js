import React from 'react';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';

export default function IntroBox() {
    const content = [
        {
            id: 1,
            icon: icon1,
            text: 'Turn your stuff into cash donations',
        },
        {
            id: 2,
            icon: icon2,
            text: 'Shop allgood.market - and support a charity',
        },
        {
            id: 3,
            icon: icon3,
            text: 'A new way to fundrise',
        }
    ];
    return (
        <div className="introBoxes" data-aos="fade-right">
            {content.map((box) => {
                const {id, icon, text} = box;
                return(
                    <div className="introBox" key={id}>
                        <div className="iconHolder">
                            <img src={icon} alt="img"/>
                        </div>
                        <div className="textHolder">
                            <p>{text}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}
