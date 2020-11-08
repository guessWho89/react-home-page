import React from 'react';
import blueDashedBox from '../images/blue-dashed-box.png';
import yellowDashedBox from '../images/yellow-dashed-box.png';
import greenDashedBox from '../images/green-dashed-box.png';
import purpleDashedBox from '../images/purple-dashed-box.png';

export default function DashedBoxes() {
    const content= [
        {
            id: 1,
            icon: blueDashedBox,
            action: 'Post an Item',
            description: 'Register to post an item for sale. ',
            register: 'Regsiter now!',
        },
        {
            id: 2,
            icon: yellowDashedBox,
            action: 'Select an Organisation',
            description: 'Register to post an item for sale. ',
            register: 'Regsiter now!',
        },
        {
            id: 3,
            icon: greenDashedBox,
            action: 'Buyer Makes the Payment',
            description: 'Register to post an item for sale. ',
            register: 'Regsiter now!',
        },
        {
            id: 4,
            icon: purpleDashedBox,
            action: 'Post an item',
            description: 'You sell your item and arrange for pickup.',
            register: '',
        },
    ];
    return (
        <div className="dashedBoxes">
            {content.map((box) => {
                const {id, icon, action, description, register} = box;
                return (
                    <div className="dashedBox" key={id}>
                        <img src={icon} alt=""/>
                        <h4 className="action">{action}</h4>
                        <p className="description">
                            {description} 
                            <a href="#register">{register}</a>
                        </p>
                    </div>
                );
            })}
        </div>
    )
}
