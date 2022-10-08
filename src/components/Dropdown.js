import { useMemo, useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ label, items, multiple = true }) => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState([]);
  const [radio, setRadio] = useState("None");

  const toggleShow = (e) => {
    if (!items.length) {
      return;
    }
    e.stopPropagation();
    setShow(!show);
  };

  const handleSelect = (e) => {
    const selectedItem = e.target.value;
    if (multiple) {
      if (selected.includes(selectedItem)) {
        setSelected(selected.filter((item) => item !== selectedItem));
      } else {
        setSelected([...selected, selectedItem]);
      }
    } else {
      setRadio(selectedItem);
    }
  };

  const formattedSelections = useMemo(() => {
    return multiple ? selected.join() || `Select ${label}` : radio;
  }, [label, multiple, radio, selected]);

  return (
    <div className="dropdown">
      <label className="dropdownLabel">{label}</label>
      <div className="dropdownSelected" onClick={toggleShow}>
        {formattedSelections}
        <span className={`arrow ${show ? "open" : "close"}`} />
      </div>
      <div className={`dropdownContent${show ? " active" : ""}`}>
        {/* This "None" option renders as a no-selection option for radios only */}
        {!multiple && (
          <label className="dropdownItem none">
            <input
              name={label}
              type="radio"
              value="None"
              onChange={handleSelect}
            />
            None
          </label>
        )}
        {items.map((item, i) => (
          <label className="dropdownItem" key={i}>
            <input
              name={!multiple && label}
              type={multiple ? "checkbox" : "radio"}
              value={item}
              onChange={handleSelect}
            />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
