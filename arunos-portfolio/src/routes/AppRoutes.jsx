import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/index";
import About from "../pages/About/index";
import Skills from "../pages/Skills/index";
import Projects from "../pages/Projects/index";
import Contact from "../pages/Contact/index";
import NotFound from "../pages/NotFound/index";
import GitHub from "../pages/GitHub/index";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/github" element={<GitHub />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default AppRoutes;