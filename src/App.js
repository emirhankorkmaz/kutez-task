import "./App.css";
import Item from "./Components/Item";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import search from "./contents/icons/Group 3.jpg";
import basket from "./contents/icons/Group2.jpg";

function App() {
  const [sayilar, setSayilar] = useState([]);
  const stop = "stop";
  const [isSearch, setIsSearch] = useState(false);
  const [filter, setFilter] = useState("");
  const handleInputChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    const yeniSayilar = [];
    for (let i = 101; i <= 120; i++) {
      yeniSayilar.push(i);
    }
    setSayilar(yeniSayilar);
  }, [stop]);
  function importAll(r) {
    return r.keys().map(r);
  }
  const images = importAll(
    require.context("./contents/images", false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <div className="App">
      <div className="navBar">
        <h1>MY JEWELRY STORE</h1>
        {isSearch && (
          <input value={filter} onChange={handleInputChange} type="text" />
        )}
        <div className="basket-search">
          <img onClick={() => setIsSearch(!isSearch)} src={search} />
          <img src={basket} />
        </div>
      </div>
      <div className="itemList">
        {filter
          ? images.map((img, index) => (
              <Item key={index} data={img} index={index} bal={sayilar} />
            ))
          : images.map((img, index) => (
              <Item key={index} data={img} bal={sayilar} index={index} />
            ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
