import { Link } from 'react-router-dom'
import React from 'react'
import '../css/Home.css'
export default function Navbar() {

  return (
    <header>
        <div className='container'>
            <Link to = "/">
                <h1>Items List</h1>
            </Link>
        </div>
    </header>
  )
}
