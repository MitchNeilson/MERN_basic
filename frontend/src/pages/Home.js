import React, { useEffect, useState } from 'react'
import ItemDetails from '../components/ItemDetails'
import '../css/Home.css'
import ItemForm from '../components/ItemForm'

export default function Home() {
    const [items, setItems] = useState(null)

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch('http://localhost:5000/api/items')
            const json = await response.json()

            if (response.ok) {
                setItems(json)
            }
        }

        fetchItems()
    }, [])

    return (
      <div className='home'>
            <div className='items'>
                {items && items.map((item) => (
                    <ItemDetails key={item._id} item={item} />
                ))}
            </div>
            <ItemForm />
      </div>
    )
}
