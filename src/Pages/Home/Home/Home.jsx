import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import PremiumMembers from "../PremiumMembers/PremiumMembers";
import SuccessCounter from "../SuccessCounter/SuccessCounter";
import SuccessStory from "../SuccessStory/SuccessStory";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="bg-[#FEFBF0]">
      <Helmet>
        <title>Marry-Me | Home</title>
      </Helmet>
      <Banner />
      <PremiumMembers />
      <HowItWorks />
      <SuccessCounter />
      <SuccessStory />
    </div>
  );
};

export default Home;
