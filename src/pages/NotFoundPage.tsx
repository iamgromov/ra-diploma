import { Header } from "../components/share/Header/Header";
import { MainContent } from "../components/MainContent/MainContent";
import { Banner } from "../components/share/Banner/Banner";
import { NotFound } from "../components/NotFound/NotFound";
import { Footer } from "../components/share/Footer/Footer";

export const NotFoundPage: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <MainContent>
        <Banner />
        <NotFound />
      </MainContent>
      <Footer />
    </>
  );
};
