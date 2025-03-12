import PageTitle from "../../../components/PageTitle/PageTitle";
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import PremiumMembers from "../PremiumMembers/PremiumMembers";
import SuccessCounter from "../SuccessCounter/SuccessCounter";
import SuccessStory from "../SuccessStory/SuccessStory";

const Home = () => {
  return (
    <div className="bg-[#FEFBF0]">
      <PageTitle title="Home" />
      <Banner />
      <PremiumMembers />
      <HowItWorks />
      <SuccessCounter />
      <SuccessStory />
    </div>
  );
};

export default Home;
