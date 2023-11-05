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
// import Search from "./page/Search";
import Buy from "./page/Buy";
import Paymentorders from "./page/Paymentorders";
import SellIndex from "./component/sell/SellIndex";
import Sellpaymentoder from "./page/Sellpaymentoder";
import LoginModa from "./page/LoginModa";
import Instruct from "./page/Instruct";
import NewItem from "./component/new/NewItem";
import New from "./page/New";
import { Search } from "./page/Search";

function App() {
  return (
    <BrowserRouter>
    <ScrollYPro/>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Buy" element={< Buy/>} />
        <Route exact path="/sell" element={< SellIndex/>} />
        <Route exact path="/buyoder" element={<Paymentorders />} />
        <Route exact path="/selloder" element={<Sellpaymentoder />} />
        <Route exact path="/instruct" element={<Instruct />} />p
        <Route exact path="/search" element={<Search/>} />
        <Route exact path="/login" element={<LoginModa />} />
        <Route exact path="/news" element={<New/>} />
        <Route exact path="/newItem" element={<NewItem />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
  
}

export default App;
