import { useState } from "react";
import BestRealEstateDealsCardsData from "./BestRealEstateDealsCardsData";

import "./BestRealEstateDeals.css";

// TABS CONTENT DATA

const ControlTabsData: ControlTab[] = [
  {
    title: "All",
  },
  {
    title: "Residential Property",
  },
  {
    title: "Commercial Property",
  },
  {
    title: "Agriculture Property",
  },
  {
    title: "Industrial Property",
  },
];

// TAB TYPE

type ControlTab = {
  title: string;
};

const BestRealEstateDeals = () => {
  // FILTERING DEALS USING useState
  const [activeTab, setActiveTab] = useState("All");
  return (
    <section id="best-realestate-deals-section">
      <h2 id="best-realestate-deals-heading">Best Real Estate Deals</h2>
      <p id="best-realestate-deals-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing eli
      </p>

      <div id="best-realestate-deals-wrapper">
        <div id="best-realestate-deals-control-tabs">
          {ControlTabsData.map(({ title }) => (
            <button
              key={title}
              className={`deal-tab ${activeTab === title ? "active" : ""}`}
              onClick={() => setActiveTab(title)}
            >
              {title}
            </button>
          ))}
        </div>

        <div id="best-realestate-deals-cards-wrapper" key={activeTab}>
          {BestRealEstateDealsCardsData.filter(
            (card) => activeTab === "All" || card.sort === activeTab
          ).map((card, index) => (
            <div key={index} id="best-realestate-deals-card">
              {card.image && (
                <div id="info-boxes-wrapper">
                  <p className="info-box" id="is-featured">
                    {card.featureBtn}
                  </p>
                  <p className="info-box" id="is-three-d">
                    {card.threeDBtn}
                  </p>
                </div>
              )}

              <img id="deal-image" src={card.image} alt={card.sort} />
              <img
                id="image-placeholder"
                src="/public/images/misc/image-placeholder.png"
                alt=""
                height={"100px"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestRealEstateDeals;
