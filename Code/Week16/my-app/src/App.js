import "./App.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Article from "./Article";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar></Navbar>;
      </header>
      <Banner></Banner>
      <br />
      <Article></Article>
      <br />
      <Footer></Footer>
    </div>
  );
}

export default App;
