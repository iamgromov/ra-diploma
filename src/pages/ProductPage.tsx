import { Header } from "../components/share/Header/Header";
import { MainContent } from "../components/MainContent/MainContent";
import { Banner } from "../components/share/Banner/Banner";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { Footer } from "../components/share/Footer/Footer";

export const ProductPage: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <MainContent>
        <Banner />
        <ProductCard />
      </MainContent>
      <Footer />
    </>
  );
};
