import React from 'react'
import '../css/ItemDetails.css'

export default function ItemDetails(props) {
  return (
    <div className='item-detail'>
        <h2 className='item-header'>{props.item.name}</h2>
        <p>{props.item.description}</p>
    </div>
  )
}
