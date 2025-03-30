import { useEffect, useState } from "react";
import placeholderImg from "@/assets/img/placeholder.svg";
import styles from "./cardsRestaurant.module.scss";
import "@/assets/scss/main.scss";

export const CardsRestaurant = () => {
  interface Review {
    rating: number;
  }

  interface Restaurant {
    id: number;
    name: string;
    address: string;
    price_range: string;
    cuisine_type: string;
    Reviews: Review[];
  }

  const calculateAverageRating = (reviews: Review[]) => {
    if (reviews.length === 0) return "0";
    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (total / reviews.length).toFixed(1);
  };

  const convertPriceRange = (priceRange: "one" | "two" | "three" | "four") => {
    const range = {
      one: "$",
      two: "$$",
      three: "$$$",
      four: "$$$$",
    };

    return range[priceRange];
  };

  const [restaurant, setRestaurant] = useState<Restaurant[]>([]);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/restaurant?page=1&limit=4"
        );
        const data = await response.json();
        setRestaurant(data.data);
      } catch (error) {
        console.error("Erro ao buscar restaurantes:", error);
      }
    };
    fetchRestaurant();
  }, []);
  return (
    <div>
      <ul className="row">
        {restaurant.length > 0 ? (
          restaurant.map((restaurant) => {
            const averageRating = calculateAverageRating(restaurant.Reviews);
            const PriceRange = convertPriceRange(
              restaurant.price_range as "one" | "two" | "three" | "four"
            );

            return (
              <li key={restaurant.id} className="col-3">
                <section className={styles.cardRestaurant}>
                  <div className={styles.cardRestaurant__image}>
                    <img
                      src={placeholderImg}
                      alt={restaurant.name}
                      className={`w-100 ${styles.restaurantImage}`}
                    />
                    <p className={`btn ${styles.cardRestaurant_price}`}>
                      {`R${PriceRange}`}
                    </p>
                  </div>
                  <div>
                    <div>
                      <p>{restaurant.name}</p>
                      <p>{averageRating}</p>
                    </div>
                    <div>
                      <p>{restaurant.cuisine_type}</p>
                      <p>{restaurant.address}</p>
                    </div>
                    <button className="btn">Reservar</button>
                  </div>
                </section>
              </li>
            );
          })
        ) : (
          <p>Carregando restaurantes...</p>
        )}
      </ul>
    </div>
  );
};

export default CardsRestaurant;
