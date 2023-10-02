import React from "react";
import { CreatedMeet, FormMeet, Meet } from "../types/meet";
import { useUser } from "@clerk/clerk-react";
import { inserMeet, uploadImage } from "../usecases/db/postMeet.usecase";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
const useForm = () => {
  const navetage = useNavigate();
  const [imagePreview, setImagePreview] = React.useState("");
  const [meet, setMeet] = React.useState<FormMeet>({
    title: "",
    date: "",
    description: "",
    photo: "",
    subject: "",
    ubication: "",
  });
  const [image, setImage] = React.useState<File | null>(null);
  const { user } = useUser();

  const hadleCitySelect = (selectedOption: any): void => {
    setMeet({
      ...meet,
      ubication: selectedOption.value,
    });
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setMeet({
      ...meet,
      [event.target.id]: event.target.value,
    });
  };
  const handleSelect = (target): void => {
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
    if (user && image) {
      const imgName = uuidv4();
      await uploadImage(imgName, image);
      const newMeet: CreatedMeet = {
        ...meet,
        user_id: user.id,
        photo: imgName,
      };
      await inserMeet(newMeet);
      // Lógica adicional después de la inserción de la reunión
      // Manejar errores aquí
      navetage("/");
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

export default useForm;
