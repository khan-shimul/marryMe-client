import { Route, Routes } from "react-router";
import Home from "../Pages/Home/Home/Home";
import Root from "../Layout/Root";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Login from "../Pages/Registration/Login/Login";
import Register from "../Pages/Registration/Register/Register";
import NotFound from "../Pages/Shared/404/NotFound";
import Biodatas from "../Pages/Biodatas/Biodatas";
import ContactUs from "../Pages/ContactUs/ContactUs";
import MemberDetails from "../Pages/MemberDetails/MemberDetails";

const Routers = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="bio-data" element={<Biodatas />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="user-details/:id" element={<MemberDetails />} />
      </Route>
    </Routes>
  );
};

export default Routers;
