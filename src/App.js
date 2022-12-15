import logo from "./logo.svg";
import Home from "./pages";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home title="Credit World" />} />
        <Route exact path="/about" element={<About title="About Us" />} />
        <Route exact path="/contact" element={<Contact title="Contact Us" />} />
        {/* <Route path="/books" element={<BookList />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
