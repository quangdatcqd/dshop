import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Category from "./pages/Categories";
import Header from "./component/Header/Header";
import Footer from "./layouts/components/Footer/Footer";
import Home from "./pages/Home";
import Menu from "./component/Menu/Menu";
import Product from "./pages/Products";
import Login from "./auths/Login";
import publicRoutes from "~/routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>


        <Routes>

          {
            publicRoutes.map((route, index) => {
              const Page = 
            })
          }
          <Route exact path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/products' element={<Product />} />
          <Route path='/categories' element={<Category />} />

        </Routes>
        <Footer />


      </BrowserRouter>
    </div>
  );
}

export default App;
