import img1 from "../../../assets/images/home/prize.png";
import img2 from "../../../assets/images/home/trust.png";
import img3 from "../../../assets/images/home/rings.png";
import { MdFavorite } from "react-icons/md";
import { FaFemale, FaMale, FaUsers } from "react-icons/fa";

const SuccessCounter = () => {
  return (
    <div className="">
      <div className="pt-20 pb-32 text-center bg-gradient-to-r from-[#848181] to-[#2C2E3D]">
        <h5 className="font-playfair text-2xl text-[#FFB400]">
          #1 Wedding Website
        </h5>
        <h3 className="font-playfair text-5xl font-bold md:text-6xl md:font-black text-[#3ec5ff]">
          Our Growing Community
        </h3>
        <h6 className="font-poppins text-sm md:text-base font-light text-white mt-3">
          Celebrating Connections and Success Stories
        </h6>
      </div>
      {/* Todo: stats needs to be dynamically from db */}
      <div className="mx-5 md:mx-16 -mt-14">
        <div className="stats py-4 px-3 shadow w-full">
          <div className="stat">
            <div className="flex items-center gap-x-10">
              <div className="border border-[#aa8557] rounded p-2">
                <MdFavorite className="inline-block h-7 w-7 text-[#66451C]" />
              </div>
              <div>
                <div className="font-cinzel text-4xl font-bold text-[#66451C]">
                  2K
                </div>
                <div className="stat-title uppercase text-[#66451C] mt-2 text-sm font-poppins">
                  Couples pared
                </div>
              </div>
            </div>
          </div>
          <div className="stat">
            <div className="flex items-center gap-x-10">
              <div className="border border-[#aa8557] rounded p-2">
                <FaUsers className="inline-block h-7 w-7 text-[#66451C]" />
              </div>
              <div>
                <div className="font-cinzel text-4xl font-bold text-[#66451C]">
                  4000+
                </div>
                <div className="stat-title uppercase text-[#66451C] mt-2 text-sm font-poppins">
                  Registered
                </div>
              </div>
            </div>
          </div>
          <div className="stat">
            <div className="flex items-center gap-x-10">
              <div className="border border-[#aa8557] rounded p-2">
                <FaMale className="inline-block h-7 w-7 text-[#66451C]" />
              </div>
              <div>
                <div className="font-cinzel text-4xl font-bold text-[#66451C]">
                  1600+
                </div>
                <div className="stat-title uppercase text-[#66451C] mt-2 text-sm font-poppins">
                  Boys
                </div>
              </div>
            </div>
          </div>
          <div className="stat">
            <div className="flex items-center gap-x-10">
              <div className="border border-[#aa8557] rounded p-2">
                <FaFemale className="inline-block h-7 w-7 text-[#66451C]" />
              </div>
              <div>
                <div className="font-cinzel text-4xl font-bold text-[#66451C]">
                  2000+
                </div>
                <div className="stat-title uppercase text-[#66451C] mt-2 text-sm font-poppins">
                  Girls
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-[#FEFBF0] py-14 mx-5 md:mx-10 lg:mx-0">
        <div className="font-poppins flex flex-col md:flex-row gap-10 lg:w-3/4 mx-5 md:mx-auto">
          <div className="bg-white shadow p-10 rounded flex flex-col  items-center text-center transition-shadow duration-500 hover:shadow-2xl">
            <img className="h-12" src={img1} alt="" />
            <h3 className="text-[#66451C] text-base font-semibold mt-3 mb-2">
              Genuine profiles
            </h3>
            <p className="text-[#66451C] text-sm font-medium">
              Contact genuine profiles with 100% verified
            </p>
          </div>
          <div className="bg-white shadow p-10 rounded flex flex-col  items-center text-center transition-shadow duration-500 hover:shadow-2xl">
            <img className="h-12" src={img2} alt="" />
            <h3 className="text-[#66451C] text-base font-semibold mt-3 mb-2">
              Most trusted
            </h3>
            <p className="text-[#66451C] text-sm font-medium">
              The most trusted wedding matrimony brand
            </p>
          </div>
          <div className="bg-white shadow p-10 rounded flex flex-col  items-center text-center transition-shadow duration-500 hover:shadow-2xl">
            <img className="h-12" src={img3} alt="" />
            <h3 className="text-[#66451C] text-base font-semibold mt-3 mb-2">
              Successful Marriages
            </h3>
            <p className="text-[#66451C] text-sm font-medium">
              Cherishing countless love that began right here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessCounter;
