const Biodatas = () => {
  return (
    <section className="bg-[#FEFBF1]">
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
        <div className="flex-grow border-2">
          <h1>Profiles</h1>
        </div>
      </div>
    </section>
  );
};

export default Biodatas;
