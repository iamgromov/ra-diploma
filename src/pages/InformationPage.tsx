import { Header } from "../components/share/Header/Header";
import { MainContent } from "../components/MainContent/MainContent";
import { Banner } from "../components/share/Banner/Banner";
import { AboutShop } from "../components/AboutShop/AboutShop";
import { Footer } from "../components/share/Footer/Footer";

export const InformationPage: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <MainContent>
        <Banner />
        <AboutShop />
      </MainContent>
      <Footer />
    </>
  );
};
