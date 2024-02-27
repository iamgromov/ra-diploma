import { Header } from "../components/share/Header/Header";
import { MainContent } from "../components/MainContent/MainContent";
import { Banner } from "../components/share/Banner/Banner";
import { Contacts } from "../components/Contacts/Contacts";
import { Footer } from "../components/share/Footer/Footer";

export const ContactsPage: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <MainContent>
        <Banner />
        <Contacts />
      </MainContent>
      <Footer />
    </>
  );
};
