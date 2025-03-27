import SearchBar from "../../components/searchBar/searchbar";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <>
      <section className={styles.homeContainer}>
        <h1 className="mb-default">Encontre o restaurante perfeito</h1>
        <SearchBar />
      </section>
    </>
  );
};

export default Home;
