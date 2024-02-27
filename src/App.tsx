import { Route, Routes, HashRouter } from "react-router-dom";

import { MainPage } from "./pages/MainPage";
import { CatalogPage } from "./pages/CatalogPage";
import { InformationPage } from "./pages/InformationPage";
import { ContactsPage } from "./pages/ContactsPage";
import { ProductPage } from "./pages/ProductPage";
import { CartPage } from "./pages/CartPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/catalog" element={<CatalogPage />}></Route>
          <Route path="/about" element={<InformationPage />}></Route>
          <Route path="/contacts" element={<ContactsPage />}></Route>
          <Route path="/catalog/:id" element={<ProductPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
