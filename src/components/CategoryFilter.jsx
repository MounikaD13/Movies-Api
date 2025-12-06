import React from 'react'

export default function CategoryFilter() {
  return (
    <div>
      <select className="filter-select ms-auto">
            <option>Popular</option>
            <option>Select by Year</option>
            <option>Rating</option>
          </select>
    </div>
  )
}
