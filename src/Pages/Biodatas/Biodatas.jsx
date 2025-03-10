import { useQuery } from "@tanstack/react-query";
import Spinner from "../../components/Spinner/Spinner";
import axios from "axios";
import SingleBiodata from "./SingleBiodata";
import { Helmet } from "react-helmet-async";

const Biodatas = () => {
  const { isPending, data: biodatas } = useQuery({
    queryKey: ["biodatas"],
    queryFn: async () => {
      const res = await axios.get("/fakeDB.json");
      return res.data;
    },
  });
  if (isPending) return <Spinner />;

  return (
    <section className="bg-[#FEFBF1]">
      <Helmet>
        <title>Marry-Me | Biodatas</title>
      </Helmet>
      <div className="max-w-7xl mx-auto p-5 flex flex-col lg:flex-row gap-5 lg:gap-10">
        <div className="lg:w-96 border bg-white rounded-md p-8 font-poppins flex flex-wrap flex-row lg:flex-col gap-x-2">
          {/* Looking for */}
          <div>
            <select
              defaultValue="I am looking for"
              className="select select-error w-full"
            >
              <option disabled={true}>I am looking for</option>
              <option>Boys</option>
              <option>Girls</option>
            </select>
          </div>
          {/* Age */}
          <div>
            <select
              defaultValue="Age"
              className="select select-error w-full mt-5"
            >
              <option disabled={true}>Age</option>
              <option>18 to 30</option>
              <option>30 to 40</option>
              <option>40 to 50</option>
            </select>
          </div>
          {/* Location */}
          <div>
            <select
              defaultValue="Location"
              className="select select-error w-full mt-5"
            >
              <option disabled={true}>Location</option>
              <option>Dhaka</option>
              <option>Chittagong</option>
              <option>Rangpur</option>
              <option>Barisal</option>
              <option>Khulna</option>
              <option>Mymensingh</option>
              <option>Sylhet</option>
            </select>
          </div>
        </div>
        <div className="flex-grow">
          <h1 className="font-playfair text-2xl font-medium border-b pb-2">
            Showing{" "}
            <span className="font-poppins font-semibold">
              {biodatas.length}
            </span>{" "}
            profiles
          </h1>
          <div>
            {biodatas.map((biodata) => (
              <SingleBiodata key={biodata.biodataId} biodata={biodata} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biodatas;
