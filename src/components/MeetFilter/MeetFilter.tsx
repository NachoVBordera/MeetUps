import React from "react";
import Select from "react-select";
import subjects from "../../../public/subjects.json";
import "./meetFilter.css";
import { city } from "../../types/cities";
interface Props {
  setFilter: (filter: string) => void;
}
const MeetFilter = ({ setFilter }: Props) => {
  const [selected, setSelected] = React.useState<city>();

  const handleSelectChange = (newvalue: city | null) => {
    if (newvalue) {
      setSelected(newvalue);
      setFilter(newvalue.value);
    }
  };

  return (
    <section className="meetFilter">
      <Select
        options={subjects}
        onInputChange={() => {}}
        onChange={handleSelectChange}
        value={selected}
        placeholder="Temática"
      />
    </section>
  );
};

export default MeetFilter;
