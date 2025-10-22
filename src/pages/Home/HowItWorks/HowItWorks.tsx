import { useState } from "react";
import HowItWorksData from "./HowIdWorksData";
import "./HowItWorks.css";

export type HowItWorksItem = {
  icon: string;
  iconHovered: string;
  iconWidth: string;
  iconHeight: string;
  iconAlt: string;
  title: string;
  data: string;
};

const HowItWorks = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="how-it-works-section">
      <h2 id="how-it-works-heading">How it Works</h2>
      <p id="how-it-works-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing eli
      </p>
      <ul id="how-it-works-cards">
        {HowItWorksData.map((item, index) => (
          <div
            id="how-it-works-card-inner-wrapper"
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <li key={index} id="how-it-works-card">
              <img
                id="how-it-works-card-icon"
                src={hoveredIndex === index ? item.iconHovered : item.icon}
                alt={item.iconAlt}
                width={item.iconWidth}
                height={item.iconHeight}
              />
              <h3 id="how-it-works-card-title">{item.title}</h3>
              <p id="how-it-works-card-description">{item.data}</p>
            </li>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default HowItWorks;
