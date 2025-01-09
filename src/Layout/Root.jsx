import { Outlet, useLocation } from "react-router";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Root = () => {
  const location = useLocation();
  const shouldHide =
    location.pathname.includes("/login") ||
    location.pathname.includes("/register");
  return (
    <div className="max-w-7xl mx-auto">
      {!shouldHide && <Navbar />}
      <Outlet />
      {!shouldHide && <Footer />}
    </div>
  );
};

export default Root;
