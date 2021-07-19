import { GlobalStyle } from "./components/GlobalStyle";

import Layout from "./components/Layout";
import RecipeList from "./components/RecipeList";
import Cart from "./components/Cart";

import CartFunction from "./context/CartContext";
import AmountFunction from "./context/AmountContext";
import PriceFunction from "./context/PriceContext";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <PriceFunction>
        <AmountFunction>
          <CartFunction>
            <Layout>
              <RecipeList />
              <Cart />
            </Layout>
          </CartFunction>
        </AmountFunction>
      </PriceFunction>
    </div>
  );
}

export default App;
