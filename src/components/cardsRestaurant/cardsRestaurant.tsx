import { useEffect, useState } from "react";
import placeholderImg from "@/assets/img/placeholder.svg";

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

  const [restaurant, setRestaurant] = useState<Restaurant[]>([]);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/restaurant?page=1&limit=5"
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
      <ul>
        {restaurant.length > 0 ? (
          restaurant.map((restaurant) => {
            const averageRating =
              restaurant.Reviews.length > 0
                ? (
                    restaurant.Reviews.reduce(
                      (sum, review) => sum + review.rating,
                      0
                    ) / restaurant.Reviews.length
                  ).toFixed(1)
                : "0";

            return (
              <li key={restaurant.id}>
                <section>
                  <div>
                    <img src={placeholderImg} alt={restaurant.name} />
                    <p>{restaurant.price_range}</p>
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
                    <button>Reservar</button>
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
