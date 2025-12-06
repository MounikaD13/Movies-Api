import React from 'react'

export default function SearchBar({searchTerm,setSearchTerm}) {
  return (
      <div className='middle mb-5'>
          <h1>Unlimited movies,</h1>
          <h1> shows, and more</h1>
          <div className="search-box mt-4">
            <i className="fa-solid fa-magnifying-glass me-2"></i>
            <input
              type="text"
              placeholder="Search Movies..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
  )
}
