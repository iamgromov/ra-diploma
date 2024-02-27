import { Header } from "../components/share/Header/Header";
import { MainContent } from "../components/MainContent/MainContent";
import { Banner } from "../components/share/Banner/Banner";
import { Cart } from "../components/Cart/Cart";
import { Order } from "../components/Order/Order";
import { Footer } from "../components/share/Footer/Footer";

export const CartPage: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <MainContent>
        <Banner />
        <Cart />
        <Order />
      </MainContent>
      <Footer />
    </>
  );
};
