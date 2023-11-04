import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./page/Home";
import ScrollToTop from "./component/ScrollToTop";
import ScrollYPro from "./component/ScrollYPro";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Detail from "./page/Detail";
import Search from "./page/Search";
import Buy from "./page/Buy";
import Paymentorders from "./page/Paymentorders";

function App() {
  return (
    <BrowserRouter>
    <ScrollYPro/>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Buy" element={< Buy/>} />
        <Route exact path="/selloder" element={<Paymentorders />} />
        <Route exact path="/search" element={<Search />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
  
}

export default App;
