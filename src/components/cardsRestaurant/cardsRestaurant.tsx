import { Star } from "lucide-react";
import placeholderImg from "@/assets/img/placeholder.svg";
import styles from "./cardsRestaurant.module.scss";
import "@/assets/scss/main.scss";

interface Review {
  rating: number;
}

interface Restaurant {
  id: number;
  name: string;
  address: string;
  price_range: string;
  cuisine_type: string;
  Reviews?: Review[];
  avg_rating?: number | string | null;
}

interface RestaurantListProps {
  restaurants: Restaurant[];
}

const calculateAverageRating = (reviews?: Review[]) => {
  if (!reviews || reviews.length === 0) return "0";
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

export const CardsRestaurant = ({ restaurants }: RestaurantListProps) => {
  return (
    <div>
      <ul className="row">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => {
            const averageRating = restaurant.Reviews
              ? calculateAverageRating(restaurant.Reviews)
              : restaurant.avg_rating !== null &&
                  restaurant.avg_rating !== undefined
                ? Number(restaurant.avg_rating).toFixed(1)
                : "0";

            const PriceRange = convertPriceRange(
              restaurant.price_range as "one" | "two" | "three" | "four",
            );

            return (
              <li key={restaurant.id} className="col-3">
                <section className={styles.cardRestaurant}>
                  <div className={styles.cardRestaurant_image}>
                    <img
                      src={placeholderImg}
                      alt={restaurant.name}
                      className={`w-100 ${styles.restaurantImage}`}
                    />
                    <p className={`btn ${styles.cardRestaurant_price}`}>
                      {`R${PriceRange}`}
                    </p>
                  </div>
                  <div className={styles.cardRestaurant_container}>
                    <div className={styles.cardRestaurant_content}>
                      <div
                        className={`d-flex mb-1 ${styles.cardRestaurant_titleContain}`}
                      >
                        <p className={styles.cardRestaurant_title}>
                          {restaurant.name}
                        </p>
                        <p className={styles.cardRestaurant_starContainer}>
                          <Star className={styles.cardRestaurant_star} />
                          {averageRating}
                        </p>
                      </div>
                      <div className="mb-1">
                        <p className={styles.cuisine}>
                          {restaurant.cuisine_type}
                        </p>
                      </div>
                      <p>{restaurant.address}</p>
                    </div>
                    <div className={styles.cardRestaurant_btn}>
                      <a className="btn">Reservar</a>
                    </div>
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
