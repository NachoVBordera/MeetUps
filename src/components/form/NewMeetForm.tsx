import React from "react";
import subjects from "../../../public/subjects.json";
import { getCurrentDate } from "../../utils/getCurrentDate";
import Select from "react-select";
import "./newmeetform.css";
import SelectBarUbication from "../SlectBarUbication/SelectBarUbication";
import useForm from "../../hooks/useForm";
import imgLabel from "../../assets/imglabel.png";

const NewMeetForm: React.FC = () => {
  const {
    meet,
    imagePreview,
    hadleCitySelect,
    handleChange,
    handleSelect,
    handlefile,
    postMeet,
  } = useForm();

  return (
    <form
      className="meetform"
      onSubmit={(e) => {
        e.preventDefault();
        postMeet();
      }}
    >
      <ul>
        <li>
          <label>
            <input
              placeholder="Pon un titulo a tu aventura"
              id="title"
              type="text"
              value={meet.title}
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label>
            {imagePreview ? (
              <>
                <img className="imagePreview" src={imagePreview} alt="" />
                <input
                  className="displayNone"
                  id="photo"
                  type="file"
                  onChange={(e) => handlefile(e)}
                />
              </>
            ) : (
              <>
                <img src={imgLabel} alt="" />
                <input
                  className="displayNone"
                  id="photo"
                  type="file"
                  onChange={(e) => handlefile(e)}
                />
              </>
            )}
          </label>
          <label>
            <textarea
              placeholder="ESTE ES UN ESPACIO PARA LA DESCRIPCIÓN DE TU PLANAZO!! EN ESTE ESPACIO TIENES QUE DECIR LA HORA Y EL LUGAR EXACTO "
              id="description"
              value={meet.description}
              onChange={(e) => handleChange(e)}
            />
          </label>
        </li>
      </ul>
      <ul>
        <li>
          <label>
            <Select
              options={subjects}
              onChange={handleSelect}
              value={
                meet.subject
                  ? { value: meet.subject, label: meet.subject }
                  : null
              }
              placeholder="Temática"
            />
          </label>
        </li>
        <li>
          <label>
            <SelectBarUbication onCityChange={hadleCitySelect} />
          </label>
        </li>
        <li>
          <input
            min={getCurrentDate()}
            type="date"
            id="date"
            value={meet.date}
            onChange={(e) => handleChange(e)}
          />
        </li>
      </ul>
      <button onClick={() => console.log(meet)}>Publicar!</button>
    </form>
  );
};

export default NewMeetForm;
