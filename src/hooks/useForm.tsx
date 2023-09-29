import React from "react";
import { FormMeet } from "../types/meet";

const useForm = () => {
  const [imagePreview, setImagePreview] = React.useState("");
  const [meet, setMeet] = React.useState<FormMeet>({
    title: "",
    date: "",
    description: "",
    photo: "",
    subject: "",
    ubication: "",
  });
  const hadleCitySelect = (selectedOption) => {
    setMeet({
      ...meet,
      ubication: selectedOption.value,
    });
  };
  const handleChange = ({ target }) => {
    setMeet({
      ...meet,
      [target.id]: target.value,
    });
  };
  const handleSelect = (target) => {
    setMeet({
      ...meet,
      subject: target.value,
    });
  };
  const handlefile = ({ target }) => {
    const inputImage = target.files[0];
    console.log(URL.createObjectURL(inputImage));
    setMeet({
      ...meet,
      photo: inputImage.name,
    });
    setImagePreview(URL.createObjectURL(inputImage));
  };

  return {
    meet,
    imagePreview,
    hadleCitySelect,
    handleChange,
    handleSelect,
    handlefile,
  };
};

export default useForm;
