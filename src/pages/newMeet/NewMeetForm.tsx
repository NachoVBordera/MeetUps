import Footer from "../../components/footer/Footer";
import NewMeetForm from "../../components/form/NewMeetForm";
import Header from "../../components/header/Header";

const NewMeetPage: React.FC = () => {
  return (
    <>
      <Header nav={true} />
      <NewMeetForm />
      <Footer />
    </>
  );
};

export default NewMeetPage;
