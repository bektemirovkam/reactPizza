import "./index.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route } from "react-router-dom";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <main className="main">
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
        </main>
      </div>
    </div>
  );
};

export default App;
