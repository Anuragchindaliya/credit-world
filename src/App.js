import logo from "./logo.svg";
import Home from "./pages";
import { Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/books" element={<BookList />} /> */}
      </Routes>
    </>
  );
}

export default App;
