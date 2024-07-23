import React from 'react'
import "./NewCollections.css"
import new_collection from '../assets/new_collections'
import Items from '../items/Items'

const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>COLLECTIONS</h1>
        <hr />
        <div className="collections">
                { new_collection.map( ( item, index ) => {
                return <Items  key={ index } id = { item.id }  name = { item.name }  Image = { item.Image } description = { item.description }   new_price = { item.new_price }  old_price = { item.old_price }/>
            } ) }
        </div>
    </div>
  )
}

export default NewCollections