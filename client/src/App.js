import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/about/About"));
const Blog = lazy(() => import("./pages/blog/Blog"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Portfolio = lazy(() => import("./pages/portfolio/Portfolio"));
const BlogPost = lazy(() => import("./pages/blog/BlogPost"));
const Category = lazy(() => import("./pages/portfolio/Category"));
const Login = lazy(() => import("./pages/auth/login/Login"));
const Register = lazy(() => import("./pages/auth/register/Register"));
const Navbar = lazy(() => import("./components/navbar/Navbar"));
const Footer = lazy(() => import("./components/footer/Footer"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </>
  );
}

export default App;
