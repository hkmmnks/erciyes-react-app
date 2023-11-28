import { Link, Route, Routes } from "react-router-dom";
import Products from "./DersÖdevi21-EffectSample/Products"
import ProductsDetail from "./DersÖdevi21-EffectSample/ProductsDetail"
import Home from "./DersÖdevi21-EffectSample/Home"

function App() {

  return <>
    <ul style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/products'>Products</Link></li>
    </ul>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/products" element={<Products></Products>}></Route>
      <Route path="/products/:id" element={<ProductsDetail></ProductsDetail>}></Route>
    </Routes>
  </>
}

export default App;
