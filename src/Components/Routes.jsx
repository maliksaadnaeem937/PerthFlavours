import Home from "./Home";
import About from "./About";

import Pricing from "./Pricing";
import Contact from "./Contact";
import NavBar from "./NavBar";
import Modal from "./Modal";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import OpeningHours from "./OpeningHours";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index  element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="opening-hours" element={<OpeningHours />} />
      <Route path="form-success" element={<Modal />} />
      <Route path="*" element={<div className="text-4xl font-bold text-center">Not Found!</div>} />
    </Route>
  )
);

export default router;
