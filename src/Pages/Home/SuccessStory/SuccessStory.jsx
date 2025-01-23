import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "../../../components/Spinner/Spinner";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";
import SuccessCard from "./SuccessCard";

const SuccessStory = () => {
  const { data: reviews, isPending } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axios.get("reviews.json");
      return res.data;
    },
  });
  if (isPending) return <Spinner />;
  return (
    <div className="mt-10 px-5 md:px-16">
      <div className="text-center mb-10">
        <h4 className="font-cinzel text-[#C48C46] text-xl font-bold">
          Trusted Brand
        </h4>
        {/* TODO: Couple number from db */}
        <h3 className="text-[#66451C] text-4xl font-playfair font-semibold">
          Trust by <span className="text-7xl">1500+</span> Couples
        </h3>
      </div>
      <div className="pb-10">
        <Swiper
          loop={Infinity}
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
          {reviews.slice(0, 6).map((review) => (
            <SwiperSlide key={review._id}>
              <SuccessCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SuccessStory;
