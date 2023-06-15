import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/about/About.js";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Dashboard from "./pages/dashboard/Dashboard";
import Portfolio from "./pages/portfolio/Portfolio";
import BlogPost from "./pages/blog/BlogPost";
import Category from "./pages/portfolio/Category";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />

        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<Category />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
