import React from 'react';
import MenuItem from '../menu-item/menu-item';
import './menu.scss';

class Menu extends React.Component {
    constructor(){
        super();
        this.state = {
            sections: [
                {
                  title: 'Hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'Jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'Sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'Womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'Mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
            ]
        };
    }
    render(){
        return (
            <div className="menu">{ 
              this.state.sections.map(({title, id, imageUrl, size}) => (
              <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
              ))
            }
            </div>
        );
    }
}




export default Menu;