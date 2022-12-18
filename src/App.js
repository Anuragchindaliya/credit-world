import { Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/Footer";
import { lazy, Suspense } from "react";
import Loader from "./components/common/Loader";
import Bank from "./pages/Bank";

const Home = lazy(() => import("./pages"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
export const docTitle = "Credit World";
function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path="/" element={<Home title="Credit World" />} />
          <Route exact path="/about" element={<About title="About Us" />} />
          <Route exact path="/bank/:bankname" element={<Bank title="Bank" />} />
          <Route
            exact
            path="/contact"
            element={<Contact title="Contact Us" />}
          />
          <Route path="*" element={<NotFound title="Not found" />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
