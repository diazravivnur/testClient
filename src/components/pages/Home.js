import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Hero from "../Hero/Hero";
import Card from "../Card/Card";
import { API } from "../../config/api";
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
  const router = useHistory();

  const [films, setFilms] = useState([]);

  const loadFilms = async () => {
    try {
      const response = await API.get("/films");
      setFilms(response.data.data.film);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadFilms();
  }, []);

  return (
    <>
      <div className="container">
        <Hero />
        <div className="row">
          {films?.map((film, index) => (
            <div className="col sm 5" key={film.id + index}>
              <Card film={film} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
