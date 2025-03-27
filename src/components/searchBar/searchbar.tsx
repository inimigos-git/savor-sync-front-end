import { Search, MapPin } from "lucide-react";
import styles from "./searchbar.module.scss";
import "../../assets/scss/main.scss";

export const SearchBar = () => {
  return (
    <>
      <section className="row mb-default">
        <div className={`col-8 col-xs-8 ${styles.pos_relative}`}>
          <Search className={styles.imgPos} />
          <input
            className="col-12"
            type="text"
            placeholder="Buscar restaurantes, cozinhas ou pratos"
          />
        </div>
        <div className={`col-4 col-xs-8 ${styles.pos_relative}`}>
          <MapPin className={styles.imgPos} />
          <input className="col-12" type="text" placeholder="Localização" />
        </div>
      </section>
    </>
  );
};

export default SearchBar;
