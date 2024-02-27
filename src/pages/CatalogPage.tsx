import { Header } from "../components/share/Header/Header";
import { MainContent } from "../components/MainContent/MainContent";
import { Banner } from "../components/share/Banner/Banner";
import { Catalog } from "../components/Catalog/Catalog";
import { Footer } from "../components/share/Footer/Footer";

export const CatalogPage: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <MainContent>
        <Banner />
        <Catalog inputStyle={""} />
      </MainContent>
      <Footer />
    </>
  );
};
