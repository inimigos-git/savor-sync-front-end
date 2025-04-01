import CardsRestaurant from "@/components/cardsRestaurant/cardsRestaurant";
import styles from "./home.module.scss";
import FilterCuisineTypes from "@/components/filter/filter";
import SearchBar from "@/components/searchBar/searchbar";

const Home = () => {
  return (
    <>
      <section className={styles.homeContainer}>
        <h1 className="mb-default">Encontre o restaurante perfeito</h1>
        <SearchBar />
        <FilterCuisineTypes />
        <h2 className="mb-default">Recomendados para você</h2>
        <CardsRestaurant />
      </section>
    </>
  );
};

export default Home;
