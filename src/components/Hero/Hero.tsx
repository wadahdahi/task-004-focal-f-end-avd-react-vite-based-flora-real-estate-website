import "./HeroResponsive.css";
import "./Hero.css";

type HeroInfoPanelItem = {
  icon: string;
  iconBackground: string;
  title: string;
  data: string;
};

const HeroInfoPanelData: HeroInfoPanelItem[] = [
  {
    icon: "/public/images/icons/location.png",
    iconBackground: "/public/images/icons/circle-shape-blue.png",
    title: "Location",
    data: "Ahmedabad, India",
  },
  {
    icon: "/public/images/icons/dollar-circle.png",
    iconBackground: "/public/images/icons/circle-shape-blue.png",
    title: "Price",
    data: "$1000 - $10,000",
  },
  {
    icon: "/public/images/icons/house.png",
    iconBackground: "/public/images/icons/circle-shape-blue.png",
    title: "Type of Property",
    data: "Apartment",
  },
];

const Hero: React.FC = () => {
  return (
    <section id="hero">
      <h3 id="hero-title">
        Discover a place <span> you will love to live</span>
      </h3>
      <p id="hero-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
        tempus felis vitae sit est quisque.
      </p>
      <ul id="hero-panel">
        {HeroInfoPanelData.map((item: HeroInfoPanelItem, index) => (
          <li key={index} className="hero-panel-part">
            <div id="hero-panel-icon">
              <img src={item.iconBackground} alt="" id="hero-panel-icon-bg" />
              <img src={item.icon} alt="" id="hero-panel-icon-itself" />
            </div>
            <div id="hero-panel-title-and-data">
              <p id="hero-panel-title">{item.title}</p>
              <p id="hero-panel-data">{item.data}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Hero;
