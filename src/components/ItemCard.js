import React from 'react';
import greenSofa from '../images/green-sofa.png';
import beigeSofa from '../images/beige-sofa.png';
import sickKidIcon from '../images/sick-kid.png';

export default function ItemCard() {
    const content = [
        {
            id: 1,
            image: greenSofa,
            title: 'Almost new sofa',
            name: 'John S.',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit dolor.',
            price: '$300',
            icon: sickKidIcon,
            bannerText: 'Sick Kid',
        },
        {
            id: 2,
            image: beigeSofa,
            title: 'Beige sofa',
            name: 'Harinder B.',
            description: 'In good condition, from smoke free home.',
            price: '$400',
            icon: sickKidIcon,
            bannerText: 'Sick Kid',
        },
        {
            id: 3,
            image: greenSofa,
            title: 'Almost new sofa',
            name: 'John S.',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit dolor.',
            price: '$300',
            icon: sickKidIcon,
            bannerText: 'Sick Kid',
        },
        {
            id: 4,
            image: beigeSofa,
            title: 'Beige sofa',
            name: 'Harinder B.',
            description: 'In good condition, from smoke free home.',
            price: '$400',
            icon: sickKidIcon,
            bannerText: 'Sick Kid',
        },
        {
            id: 5,
            image: greenSofa,
            title: 'Almost new sofa',
            name: 'John S.',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit dolor.',
            price: '$300',
            icon: sickKidIcon,
            bannerText: 'Sick Kid',
        },
        {
            id: 6,
            image: beigeSofa,
            title: 'Beige sofa',
            name: 'Harinder B.',
            description: 'In good condition, from smoke free home.',
            price: '$00',
            icon: sickKidIcon,
            bannerText: 'Sick Kid',
        }
    ]
    return (
        <div className="itemCards">
            {content.map((box) => {
                const { id, image, title, name, description, price, icon, bannerText } = box;
                return (
                    <div className="card" key={id}>
                        <div className="imageHolder">
                            <img src={image} alt=""/>
                        </div>
                        <div className="textHolder">
                            <h3 className="cardTitle">{title}</h3>
                            <p className="name">{name}</p>
                            <p className="description">{description}</p>
                            <h3 className="itemPrice">{price}</h3>                            
                        </div>
                        <div className="banner">
                            <img src={icon} alt=""/>
                            <span>{bannerText}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}
