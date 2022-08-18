import React from 'react'

const Header = ({title}) => {
  return (
    <div className='Header text-center my-5'>
        <h2 className="d-inline ps-3 border-start border-4">{title}</h2>
    </div>
  )
}

export default Header