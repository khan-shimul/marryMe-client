import img1 from "../../../assets/images/home/prize.png";
import img2 from "../../../assets/images/home/trust.png";
import img3 from "../../../assets/images/home/rings.png";

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
      {/* Stats - Todo: stats needs to be dynamically from db */}
      <div className="mx-5 md:mx-16 -mt-14">
        <div className="stats shadow w-full">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Biodata</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">New Users</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
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
