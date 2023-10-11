import React from "react";
import { CreatedMeet } from "../types/meet";
import { useUser } from "@clerk/clerk-react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { getSingleMeetById } from "../usecases/db/getSingleMeetById.usecase";
import { updateImage, editmeet } from "../usecases/db/editmeet.usecase";
const useEditForm = (id: string | undefined) => {
  const navetage = useNavigate();
  const [imagePreview, setImagePreview] = React.useState("");
  const [meet, setMeet] = React.useState({
    id: id,
    user_image: "",
    title: "",
    description: "",
    subject: "",
    ubication: "",
    date: "",
    photo: "",
  });

  React.useEffect(() => {
    if (id)
      getSingleMeetById(id.toLocaleString()).then((meet) => {
        setMeet(meet);
        setImagePreview(meet.photo);
        setImage(meet.photo);
      });
  }, []);

  const [image, setImage] = React.useState<File | null>(null);
  const { user } = useUser();

  const hadleCitySelect = (selectedOption: any): void => {
    setMeet({
      ...meet,
      ubication: selectedOption.value,
    });
  };
  const handleChange = (
    event:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ): void => {
    setMeet({
      ...meet,
      [event.target.id]: event.target.value,
    });
  };
  const handleSelect = (target: any): void => {
    setMeet({
      ...meet,
      subject: target.value,
    });
  };
  const handlefile = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const inputImage = event.target.files && event.target.files[0];
    if (inputImage) {
      setImage(inputImage);
      console.log(URL.createObjectURL(inputImage));
      setMeet({
        ...meet,
        photo: inputImage.name,
      });
      setImagePreview(URL.createObjectURL(inputImage));
    }
  };

  const postMeet = async () => {
    console.log("paso pos aquí");
    console.log("[user]", user);
    console.log("[image]", image);

    if (user && image) {
      console.log("paso pos aquí IF");

      const imgName = uuidv4();
      await updateImage(imgName, image);
      const newMeet: CreatedMeet = {
        ...meet,
        user_id: user.id,
        user_name: user.fullName ?? "",
        photo: imgName,
      };
      await editmeet(id?.toLocaleString() ?? "", newMeet);
      navetage(`/meets/user/${user.id}`);
    }
  };

  return {
    postMeet,
    meet,
    imagePreview,
    hadleCitySelect,
    handleChange,
    handleSelect,
    handlefile,
    user,
  };
};

export default useEditForm;
