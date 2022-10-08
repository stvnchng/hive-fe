import { useState } from "react";

const Checkbox = ({ item, handleSelect }) => {
  const [checked, setChecked] = useState(false);

  const onSelect = () => {
    setChecked(!checked);
    handleSelect(item);
  };

  return (
    <label className={`dropdownItem ${checked ? "highlight" : ""}`}>
      <input type="checkbox" value={item} onChange={onSelect} />
      {item}
    </label>
  );
};

export default Checkbox;
