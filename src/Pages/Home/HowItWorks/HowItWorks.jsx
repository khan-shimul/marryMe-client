import img1 from "../../../assets/images/home/rings.png";
import img2 from "../../../assets/images/home/wedding-2.png";
import img3 from "../../../assets/images/home/love-birds.png";
import img4 from "../../../assets/images/home/network.png";
import img5 from "../../../assets/images/home/chat.png";
import img6 from "../../../assets/images/home/wedding-couple.png";

const HowItWorks = () => {
  return (
    <div className="bg-[#FEFBF3] px-5 lg:px-16">
      <div className="text-center py-16">
        <h5 className="font-cinzel text-2xl font-bold text-[#C48C46]">
          MarryMe
        </h5>
        <h2 className="font-playfair text-5xl font-semibold text-[#66451C] mt-2">
          How it works
        </h2>
      </div>
      <div>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:mb-16 md:mr-16">
              <img className="h-32" src={img1} alt="" />
            </div>
            <div className="timeline-end mb-10 md:mb-16 md:ml-16 md:w-2/3">
              <h2 className="text-3xl font-semibold font-playfair text-[#66451C] mb-2">
                Register
              </h2>
              <time className="font-poppins uppercase text-[#EB0359] text-sm font-medium">
                Timing: 7:00 PM
              </time>
              <p className="mt-2 text-base text-[#66451C] font-poppins">
                Sign up effortlessly and join our growing community. Create your
                profile in just a few steps to get started on your journey to
                finding the perfect match.
              </p>
            </div>
            <hr />
          </li>
          {/* Find partner */}
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:timeline-end mb-10 md:mb-16 md:ml-16">
              <img className="h-32" src={img2} alt="" />
            </div>
            <div className="timeline-end md:timeline-start mb-10 md:mb-16 md:mr-16 md:w-2/3 md:text-end">
              <h2 className="text-3xl font-semibold font-playfair text-[#66451C] mb-2">
                Find your Match
              </h2>
              <time className="font-poppins uppercase text-[#EB0359] text-sm font-medium">
                Timing: 7:00 PM
              </time>
              <p className="mt-2 text-base text-[#66451C] font-poppins">
                Discover profiles that align with your preferences. Browse
                through a curated list of potential matches tailored just for
                you.
              </p>
            </div>
            <hr />
          </li>
          {/* Send Interest */}
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:timeline-start mb-10 md:mb-16 md:mr-16">
              <img className="h-32" src={img3} alt="" />
            </div>
            <div className="timeline-end mb-10 md:mb-16 md:ml-16 md:w-2/3">
              <h2 className="text-3xl font-semibold font-playfair text-[#66451C] mb-2">
                Send Interest
              </h2>
              <time className="font-poppins uppercase text-[#EB0359] text-sm font-medium">
                Timing: 7:00 PM
              </time>
              <p className="mt-2 text-base text-[#66451C] font-poppins">
                Take the first step to connect. Show your interest by sending a
                message or a like to someone who catches your attention.
              </p>
            </div>
            <hr />
          </li>
          {/* Get profile info */}
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:timeline-end mb-10 md:mb-16 md:ml-16">
              <img className="h-32" src={img4} alt="" />
            </div>
            <div className="timeline-end md:timeline-start mb-10 md:mb-16 md:mr-16 md:w-2/3 md:text-end">
              <h2 className="text-3xl font-semibold font-playfair text-[#66451C] mb-2">
                Get Profile Information
              </h2>
              <time className="font-poppins uppercase text-[#EB0359] text-sm font-medium">
                Timing: 7:00 PM
              </time>
              <p className="mt-2 text-base text-[#66451C] font-poppins">
                Learn more about your matches. Access detailed profiles to
                understand their interests, values, and lifestyle.
              </p>
            </div>
            <hr />
          </li>
          {/* Start meetups */}
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:timeline-start mb-10 md:mb-16 md:mr-16">
              <img className="h-32" src={img5} alt="" />
            </div>
            <div className="timeline-end mb-10 md:mb-16 md:ml-16 md:w-2/3">
              <h2 className="text-3xl font-semibold font-playfair text-[#66451C] mb-2">
                Start Meetups
              </h2>
              <time className="font-poppins uppercase text-[#EB0359] text-sm font-medium">
                Timing: 7:00 PM
              </time>
              <p className="mt-2 text-base text-[#66451C] font-poppins">
                Transition from online to in-person connections. Plan your first
                meetup to get to know each other better and build a genuine
                connection.
              </p>
            </div>
            <hr />
          </li>
          {/* Getting Marriage */}
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:timeline-end mb-10 md:mb-16 md:ml-16">
              <img className="h-32" src={img6} alt="" />
            </div>
            <div className="timeline-end md:timeline-start mb-10 md:mb-16 md:mr-16 md:w-2/3 md:text-end">
              <h2 className="text-3xl font-semibold font-playfair text-[#66451C] mb-2">
                Getting Marriage
              </h2>
              <time className="font-poppins uppercase text-[#EB0359] text-sm font-medium">
                Timing: 7:00 PM
              </time>
              <p className="mt-2 text-base text-[#66451C] font-poppins">
                Celebrate your journey to a lifetime of happiness. Take the
                final step toward commitment and begin your happily-ever-after.
              </p>
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HowItWorks;
