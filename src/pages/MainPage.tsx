import { Header } from "../components/share/Header/Header";
import { MainContent } from "../components/MainContent/MainContent";
import { Banner } from "../components/share/Banner/Banner";
import { TopSales } from "../components/TopSales/TopSales";
import { Catalog } from "../components/Catalog/Catalog";
import { Footer } from "../components/share/Footer/Footer";

export const MainPage: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <MainContent>
        <Banner />
        <TopSales />
        <Catalog inputStyle="deactive" />
      </MainContent>
      <Footer />
    </>
  );
};
