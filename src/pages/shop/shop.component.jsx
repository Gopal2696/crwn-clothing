import React, { Component } from 'react';
import SHOP_DATE from './shop.data'
import CollectionPreview from '../../components/privew-collection/collection-preview.component'

class ShopPage extends Component {
    constructor (){
        super();

        this.state = {
            collections: SHOP_DATE
        }
    }

    render (){
        const {collections} = this.state;
        return (<div className= 'shop-page'>
            {
                collections.map(({ id, ...otherCollectionProps}) => (
                    <CollectionPreview key = {id} {...otherCollectionProps}/>
                ))
            }
        </div>)
}
}

export default ShopPage;