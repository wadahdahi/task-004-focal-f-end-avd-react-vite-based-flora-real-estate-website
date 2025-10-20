import Hero from "../../components/Hero/Hero";
import HowItWorks from "./HowItWorks/HowItWorks";
import "./Home.css";
import FindDreamHome from "./FindDreamHome/FindDreamHome";
import BestRealEstateDeals from "./BestRealEstateDeals/BestRealEstateDeals";
import MostTrending from "./MostTrending/MostTrending";

type HomeProps = {
  id?: string;
};

const Home: React.FC<HomeProps> = ({ id }) => {
  return (
    <div id={id} className="home-page">
      <Hero />
      <HowItWorks />
      <FindDreamHome />
      <MostTrending />
      <BestRealEstateDeals />
    </div>
  );
};

export default Home;
