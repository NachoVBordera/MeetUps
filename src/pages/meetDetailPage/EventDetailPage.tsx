import React from "react";
import EvetDetail from "../../components/evetDetail/EvetDetail";
import Header from "../../components/header/Header";
import { useParams } from "react-router-dom";
import { getSingleMeetById } from "../../usecases/db/getSingleMeetById.usecase";
import { Meet } from "../../types/meet";

const MeetDetailPage = () => {
  const { id } = useParams();
  const [meet, setMeet] = React.useState<Meet>();

  React.useEffect(() => {
    if (id) getSingleMeetById(id).then((meet) => setMeet(meet));
  }, []);
  console.log(meet);

  return (
    <>
      <Header />
      <EvetDetail meet={meet} />
      <aside></aside>
    </>
  );
};

export default MeetDetailPage;
