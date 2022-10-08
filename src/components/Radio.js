const Radio = ({ label, item, handleSelect, selected, none = false }) => {
  const onSelect = () => {
    handleSelect(item);
  };

  return (
    <label
      className={`dropdownItem ${selected ? "highlight" : ""} ${
        none ? "none" : ""
      }`}
    >
      <input name={label} type="radio" value={item} onChange={onSelect} />
      {item}
    </label>
  );
};

export default Radio;
