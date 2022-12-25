import { useRoutes } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/Footer";
import { lazy, Suspense } from "react";
import Loader from "./components/common/Loader";
import Apply from "./pages/Apply";

const Home = lazy(() => import("./pages"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Loan = lazy(() => import("./pages/Loan"));
const Insurance = lazy(() => import("./pages/Insurance"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Bank = lazy(() => import("./pages/Bank"));
export const docTitle = "Credit World";
function App() {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home title="Apply for cards" />,
    },
    { path: "/bank/:bankname", element: <Bank /> },
    {
      path: "about",
      element: <About title="About Us" />,
    },
    { path: "contact", element: <Contact title={"Contact Us"} /> },
    { path: "cards/:bankname", element: <Bank  /> },
    { path: "loans", element: <Loan /> },
    { path: "loans/:loanname", element: <Loan /> },
    { path: "loans", element: <Loan title="Loan"/> },
    { path: "insurance/:insurancename", element: <Insurance title="Insurace" /> },
    { path: "privacy", element: <Privacy title={"Privacy Policy"} /> },
    { path: "apply", element: <Apply title={"Apply"} /> },
    { path: "*", element: <NotFound title="Not Found" /> },
  ]);
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        {routes}
        {/* <Routes>
          <Route exact path="/" element={<Home title="Credit World" />} />
          <Route exact path="/about" element={<About title="About Us" />} />
          <Route exact path="/bank/:bankname" element={<Bank title="Bank" />} />
          <Route
            exact
            path="/contact"
            element={<Contact title="Contact Us" />}
          />
          <Route path="*" element={<NotFound title="Not found" />} />
        </Routes> */}
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
