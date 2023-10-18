import React from "react";
import EvetDetail from "../../components/evetDetail/MeetDetail";
import Header from "../../components/header/Header";
import { useParams } from "react-router-dom";
import { getSingleMeetById } from "../../usecases/db/getSingleMeetById.usecase";
import { Meet } from "../../types/meet";
import SignedUpUsers from "../../components/signedUpUsers/SignedUpUsers";
import UserAside from "../../components/usrsAside/UserAside";
import "./meetDetailPage.css";
import Footer from "../../components/footer/Footer";
import SeachBar from "../../components/seachBar/search";
const MeetDetailPage = () => {
  const { id } = useParams();
  const [meet, setMeet] = React.useState<Meet>();

  React.useEffect(() => {
    if (id)
      getSingleMeetById(id).then((meet) => {
        setMeet(meet);
      });
  }, []);

  return (
    meet && (
      <main className="meetDetailPage">
        <Header nav={true} />
        <aside>
          <SeachBar />
          <UserAside meet={meet} />
          <SignedUpUsers signedUsers={meet.meets_users} />
        </aside>
        <section>
          <EvetDetail meet={meet} />
        </section>
        <Footer />
      </main>
    )
  );
};

export default MeetDetailPage;
