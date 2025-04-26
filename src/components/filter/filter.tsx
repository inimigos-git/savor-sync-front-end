import { useEffect, useState } from "react";
import { Funnel } from "lucide-react";
import styles from "./filter.module.scss";
import "@/assets/scss/main.scss";
const apiUrl = import.meta.env.VITE_API_URL;

export const FilterCuisineTypes = () => {
  const [cuisineTypes, setCuisineTypes] = useState([]);

  useEffect(() => {
    const fetchCuisineTypes = async () => {
      try {
        const response = await fetch(
          `${apiUrl}/restaurant/filters/cuisine-types`,
        );
        const data = await response.json();
        setCuisineTypes(data.cuisineTypes);
      } catch (error) {
        console.error("Erro ao buscar tipos de culinária:", error);
      }
    };

    fetchCuisineTypes();
  }, []);
  return (
    <div className="d-flex align-itens-center gap-10 mb-default">
      <div className={`d-flex align-itens-center ${styles.filterBtn}`}>
        <Funnel className={styles.filterLogo} />
        <p>Filtros</p>
      </div>

      <ul className={`d-flex align-itens-center gap-10 ${styles.filterItens}`}>
        {cuisineTypes.length > 0 ? (
          cuisineTypes.map((type, index) => <li key={index}>{type}</li>)
        ) : (
          <p>Carregando tipos de culinária...</p>
        )}
      </ul>
    </div>
  );
};

export default FilterCuisineTypes;
