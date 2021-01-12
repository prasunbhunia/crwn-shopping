import React from 'react';
import CollectionItem from '../collectionItem/collectionItem';

import './collectionPreview.scss';

const collectionPreview = ({id, title, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title}</h1>
        <div className="preview">
            {
                items.filter((item, n) => n < 4 ).map(({id, ...otherItems}) => (
                    <CollectionItem key={id} {...otherItems} />
                ))
            }
        </div>
    </div>
    );

export default collectionPreview;