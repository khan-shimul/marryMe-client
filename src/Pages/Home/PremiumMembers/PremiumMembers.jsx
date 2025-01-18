import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "../../../components/Spinner/Spinner";
import PremiumMemberCard from "./PremiumMemberCard";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";

const PremiumMembers = () => {
  const { data: premiumMembers, isPending } = useQuery({
    queryKey: ["premiumMembers"],
    queryFn: async () => {
      const res = await axios.get("/fakeDB.json");
      const premium = res.data.filter((user) => user.userType === "premium");
      return premium;
    },
  });
  if (isPending) return <Spinner />;
  return (
    <div className="bg-[#0c0101] p-5 lg:p-16 ">
      <div className="w-full md:w-2/3 lg:w-1/2 mx-auto text-center mt-5">
        <h3 className="text-[#C48C46] text-3xl md:text-4xl font-cinzel font-bold mb-3">
          Premium Profiles
        </h3>
        <p className="text-white font-poppins font-light text-sm">
          Explore the finest matches! These exclusive profiles are reserved for
          our Premium Members—your journey to finding love starts here.
        </p>
        <div className="h-2 w-28 bg-[#C48C46] mx-auto mt-5"></div>
      </div>
      <div className="my-8 w-full flex justify-center lg:justify-normal">
        <select className="select select-error w-full max-w-xs bg-[#ffe3c0]">
          <option disabled selected>
            Find Your Person By Age
          </option>
          <option>Low to High</option>
          <option>High to Low</option>
        </select>
      </div>
      <Swiper
        // loop={Infinity}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Navigation, Autoplay]}
        // Responsive Slides Per View
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        {premiumMembers.map((premiumMember) => (
          <SwiperSlide key={premiumMember.biodataId}>
            <PremiumMemberCard premiumUser={premiumMember} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PremiumMembers;
