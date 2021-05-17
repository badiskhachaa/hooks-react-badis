import React, { useState } from "react";

import Modal from "react-modal";

import "../styles/AddMovie.css";
import Button from 'react-bootstrap/Button'
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";


Modal.setAppElement("#root");

const AddMovie = ({ addMovie }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [newMovie, setNewMovie] = useState({
    name: "",
    rating: "",
    description: "",
    image: "",
  });
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const handelChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="Add-btn-container">
      <button onClick={openModal} className="button-big" >
        Add Movie
  </button>
      <Modal
        className="add-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h1 className="addMovie-h1">Movie Card</h1>
        <form>
          <label>Movie Name</label>



          <input
            type="text"
            name="name"
            required
            onChange={handelChange}
          />
          <label>Movie Rate</label>
          <div className="stars">
          <ReactStars 
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
          </div>
          <input
          placeholder="Tap a number please (1-5)!"
            type="text"
            name="rating"
            required
            //onChange={(e) => setRating(e.target.value)}
            onChange={handelChange}
          />
          <label>Movie Image</label>
          <input
            type="url"
            name="image"
            required
            // onChange={(e) => setImage(e.target.value)}
            onChange={handelChange}
          />
          <label>Movie Summary</label>
          <textarea
            type="text"
            name="description"
            required
            // onChange={(e) => setDescription(e.target.value)}
            onChange={handelChange}
          />
        </form>
        <button
          className="Modal-btn"
          onClick={() => {
            addMovie(newMovie);
            closeModal();
          }}
        >
          Submit
        </button>
        <button className="Modal-btn" onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
  );
};

export default AddMovie;
