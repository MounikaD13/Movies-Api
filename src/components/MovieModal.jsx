import React, { useState } from "react";
import "../styles/MovieModal.css";
import Trailers from '../trailer.json'

export default function MovieModal({ movie, closeModal }) {
  const stopClick = (e) => e.stopPropagation();

  const [url, setUrl] = useState(null)
  const [loading, setloading] = useState(false)

  function handleTrailer() {
    setloading(true)
    const trailerData = Trailers.find((t) => (t._id === movie.id))
    // console.log(trailerData)
    if (trailerData) {
      setUrl(trailerData.url)
    }
    setloading(false)
  }

  return (
    <div
      className="modal fade show"
      style={{
        display: "block",
        background: "rgba(0,0,0,0.6)",
      }}
      onClick={closeModal}
    >
      <div
        className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
        onClick={stopClick}
      >
        <div className="modal-content">
          <div className="modal-header">
            <p className="modal-title">{movie.title}</p>
            <button className="btn-close" onClick={closeModal}>X</button>
          </div>

          <div className="modal-body">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              className="img-fluid mb-3"
              alt=""
            />
            <h4>{movie.original_title}</h4>
            <p><strong>Overview:</strong> {movie.overview}</p>
            <p><strong>Langauage:</strong> {movie.original_language}</p>
            <p><strong>Release Date:</strong> {movie.release_date}</p>
            <p><strong>Rating:</strong> {movie.vote_average} ({movie.vote_count}+)</p>
            <button type="button" className="btn btn-danger"
              onClick={handleTrailer}
              disabled={loading}>
              {loading ? "Loading..." : "Watch Trailer"}
            </button>
            {url && (
              <iframe
                width="100%"
                height="315"
                src={url.replace("watch?v=", "embed/")}
                className="mt-3"
                allowFullScreen
              ></iframe>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

