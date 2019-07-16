import React from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import SHOP_DATA from './shop.data.js'

class ShopPage extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      collections: SHOP_DATA
    }
  }

  render(){
    const { collections } = this.state
    return (
      <div>
        {collections.map(({ id, title, items }) => (
          <CollectionPreview key={id} title={title} items={items}/>
        ))}
      </div>
    )
  }
}

export default ShopPage
