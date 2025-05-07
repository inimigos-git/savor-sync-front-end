import CardsRestaurant from "@/components/cardsRestaurant/cardsRestaurant";
import styles from "./home.module.scss";
import FilterCuisineTypes from "@/components/filter/filter";
import SearchBar from "@/components/searchBar/searchbar";
import { useEffect, useState } from "react";

const Home = () => {
  const [recommended, setRecommended] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/restaurant?page=1&limit=4")
      .then((res) => res.json())
      .then((data) => setRecommended(data.data));

    fetch("http://localhost:3000/restaurant?page=1&limit=4&sort=rating_desc")
      .then((res) => res.json())
      .then((data) => setTopRated(data.data));
  }, []);
  return (
    <>
      <section className={styles.homeContainer}>
        <h1 className="mb-default">Encontre o restaurante perfeito</h1>
        <SearchBar />
        <FilterCuisineTypes />
        <h2 className="mb-default">Recomendados para você</h2>
        <CardsRestaurant restaurants={recommended} />
        <h2 className="mb-default">Os melhores Avaliados</h2>
        <CardsRestaurant restaurants={topRated} />
      </section>
    </>
  );
};

export default Home;
