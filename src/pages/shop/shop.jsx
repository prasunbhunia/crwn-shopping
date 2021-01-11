import React from 'react';
import data from './shop.data';
import CollectionPreview from '../../components/collection-preview/collectionPreview';

class Shop extends React.Component{
    constructor(){
        super();
        this.state = {
            collection: data
        }
    }

    render(){
        const {collection}  = this.state;
        return(<div className='shop-page'>
            {
                collection.map(({id, ...otherCollection}) => (
                <CollectionPreview key={id} {...otherCollection} />))
            }
        </div>
        ); 
    }
}

export default Shop;