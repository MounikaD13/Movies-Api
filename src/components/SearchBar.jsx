import React from 'react'

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className='middle mb-5'>
      <h4>Movies move us like nothing else can, whether they’re scary,
        funny,</h4>
      <h4>dramatic, romantic or anywhere in-between.</h4>
      <h4>So many titles, so much to
        experience.</h4>
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
