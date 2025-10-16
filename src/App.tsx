// import { Provider } from "react-redux";
// import Header from "./components/Header.tsx";
// import Shop from "./components/Shop.tsx";
// import Product from "./components/Product.tsx";
// import { DUMMY_PRODUCTS } from "./dummy-products.ts";
// import { clothStore } from "./store/store.ts";

// function App() {
//   return (
//     <Provider store={clothStore}>
//       <Header />
//       <Shop>
//         {DUMMY_PRODUCTS.map((product) => (
//           <li key={product.id}>
//             <Product {...product} />
//           </li>
//         ))}
//       </Shop>
//     </Provider>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Shop from "./components/Shop";
import Product from "./components/Product";
import Checkout from "./components/CheckOut";
import { DUMMY_PRODUCTS } from "./dummy-products";
import { Provider } from "react-redux";
import { clothStore } from "./store/store";

function App() {
  return (
    <Provider store={clothStore}>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Shop>
                {DUMMY_PRODUCTS.map((product) => (
                  <li key={product.id}>
                    <Product {...product} />
                  </li>
                ))}
              </Shop>
            }
          />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
