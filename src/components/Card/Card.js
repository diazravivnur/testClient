import React from "react";
import { useHistory } from "react-router-dom";

function Card({ film }) {
  const { id, thumbnail } = film;

  const router = useHistory();

  const goToPage = () => {
    router.push(`/films/${id}`);
  };

  return (
    <div>
      <div className="cards mb-4">
        <div className="card-image-container" onClick={goToPage}>
          <img
            src={`http://localhost:5000/uploads/${thumbnail}`}
            className="img-dono"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Card;
