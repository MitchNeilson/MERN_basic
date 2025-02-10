import React, { useState } from 'react'
import '../css/ItemForm.css'

export default function ItemForm() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        const item = {name,description}
        
        const response = await fetch(process.env.BACKEND,{
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        } else {
            setError('')
            setName('')
            setDescription('')
            console.log('new workout added',json)
        }
    }

    return (
        <form className='create' onSubmit={handleSubmit}>
            <h3>Add new item</h3>
            <label>Item name:</label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
            >
            </input>
            <label>Item description:</label>
            <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            >
            </input>
            <button type="submit">Add item</button>
        </form>
    )
}
