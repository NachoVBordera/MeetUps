import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import EditMeetFoom from "../../components/EditMeetForm/EditMeetForm";

const EditMeetPage: React.FC = () => {
  return (
    <>
      <Header nav={true} />
      <EditMeetFoom />
      <Footer />
    </>
  );
};

export default EditMeetPage;
