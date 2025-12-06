import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/MoviesData.css'
import SearchBar from './SearchBar'
import MovieModal from './MovieModal'
import moviesData from '../movies.json'


const MOVIES_START = 12
const MOVIES_EACH_LOAD = 4

export default function MoviesData() {
  const [movies, setMovies] = useState([])
  const [visibleMovies, setVisibleMovies] = useState(MOVIES_START)
  const [modal, setModal] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [sorting, setSorting] = useState(null)

  useEffect(() => {
    setMovies(moviesData.movies);  // No axios needed
  }, []);

  const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
  // SORTING LOGIC
let sortedMovies = [...filteredMovies];

if (sorting === "rating-high") {
  sortedMovies.sort((a, b) => b.vote_average - a.vote_average);
}
else if (sorting === "pop-high") {
  sortedMovies.sort((a, b) => b.popularity - a.popularity);
}


const displayMovies = sortedMovies.slice(0, visibleMovies);

  const closeModal = () => {
    setModal(null)
  }

  const handleMovies = () => {
    setVisibleMovies((prev) => prev + MOVIES_EACH_LOAD)
  }

  return (
    <>
      <div className='navbar-container'>
        <div className="d-flex align-items-center p-3">
         <select
  className="filter-select ms-auto"
  value={sorting || ""}
  onChange={(e) => setSorting(e.target.value)}
>
  <option value="">Sort By</option>
  <option value="rating-high">Rating </option>
  <option value="pop-high">Popular</option>
</select>

          {/* <div className='light'>
                    <input type="radio" />Light
                </div> */}
          {/* <button className="btn btn-danger " >Sign in</button> */}
        </div>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className='container trending'>
        <h1>TRENDING MOVIES :</h1>
      </div>
      <div className="container mt-4">
        <div className="row g-4 mb-5">

          {/* If nothing found */}
          {filteredMovies.length === 0 && (
            <div className="text-center text-light fs-3 my-5">
              No Movies Found
            </div>
          )}

          {/* Show movies only if found */}
          {filteredMovies.length > 0 &&
            displayMovies.map((movie) => (
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3" key={movie.id}>
                <div className="card movies-card h-100" onClick={() => setModal(movie)}>
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                  <div className="card-body text-center">
                    <h5 className="card-title mt-3 movie-title">{movie.title}</h5>
                    <p className="card-text">Rating: {movie.vote_average}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        {
          visibleMovies < movies.length && (
            <div className='for-more'>
              <button type="button" className="btn btn-outline-danger btn-more" onClick={handleMovies}>More</button>
            </div>
          )
        }
        {modal && (
          <MovieModal movie={modal} closeModal={closeModal} />
        )}


      </div></>
  )
}


