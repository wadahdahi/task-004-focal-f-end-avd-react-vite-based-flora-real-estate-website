import MostTrendingData from "./MostTrendingData";
import "./MostTrending.css";

export type MostTrendingCard = {
  image: string;
  price: string;
  title: string;
  place: string;
  location: string;
};

const MostTrending = () => {
  return (
    <section id="most-trending-section">
      <h3 id="most-trending-heading">Most Trending</h3>
      <p id="most-trending-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing eli
      </p>

      <div id="most-trending-cards-wrapper">
        {MostTrendingData.map((card, index) => (
          <div id="most-trending-card" key={index}>
            <img
              id="most-trending-card-image"
              src={card.image}
              alt={card.title}
            />
            <data id="most-trending-card-price">{card.price}</data>
            <h3 id="most-trending-card-title">
              {card.title}
              <span> {card.place}</span>
            </h3>
            <div id="location-wrapper">
              <img
                src="/images/icons/location-icon.png"
                alt="location"
                width={"23.52px"}
                height={"24px"}
              />
              <p id="most-trending-card-location">{card.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MostTrending;
