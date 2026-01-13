import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Product() {
  return (
    <div>
        <div className='flex gap-10 py-4 justify-center '>
            <Link to='/product/men'>Men</Link>
            <Link to='/product/women'>Women</Link>
            <Link to='/product/kids'>Kids</Link>
        </div>
        <Outlet />
    </div>
  )
}

export default Product