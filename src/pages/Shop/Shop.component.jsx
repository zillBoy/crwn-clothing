import React, { useState } from 'react'
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview.component'
import { collections as collectionsData } from '../../utils/data'

const Shop = () => {
    
    const [collections, setCollections] = useState(collectionsData)
    
    return (
        <div className='shop-page'>
            {collections.map(({ id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}            
        </div>
    )
}

export default Shop
