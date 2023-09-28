import React from "react";
import Select from "react-select";
import subjects from "../../../public/subjects.json";
import "./meetFilter.css";

const MeetFilter: React.FC = () => {
  const [selected, setSelected] = React.useState();
  return (
    <section className="meetFilter">
      <Select
        options={subjects}
        onInputChange={() => {}}
        onChange={() => {
          setSelected(setSelected);
        }}
        value={selected}
        placeholder="Temática"
      />
    </section>
  );
};

export default MeetFilter;
