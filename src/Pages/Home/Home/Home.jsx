import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import PremiumMembers from "../PremiumMembers/PremiumMembers";
import SuccessCounter from "../SuccessCounter/SuccessCounter";

const Home = () => {
  return (
    <div className="bg-[#FEFBF0]">
      <Banner />
      <PremiumMembers />
      <HowItWorks />
      <SuccessCounter />
    </div>
  );
};

export default Home;
