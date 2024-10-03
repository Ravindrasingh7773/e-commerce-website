import React, { Fragment, useState, useRef, useEffect } from "react";
import styles from "./style.module.css";
import DownArrowIcon from "../../icons/downArrowIcon";
import UpArrowIcon from "../../icons/upArrowIcon";

const Select = ({
  options,
  keyName,
  placeholder,
  defaultValue,
  onSelect,
  Icon,
  ImgUrl,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue || null);

  const selectRef = useRef(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChange = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  // Close dropdown if click happens outside the select element
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Attach event listener to detect clicks outside
    document.addEventListener("mousedown", handleClickOutside);
    
    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Fragment>
      <div className={styles.custom_select} ref={selectRef}>
        <div className={styles.cs_label} onClick={handleToggle}>
          {Icon}
          {selectedOption?.image && (
            <img src={selectedOption.image} alt={selectedOption[keyName]} />
          )}
          {selectedOption ? selectedOption[keyName] : placeholder}
          {isOpen ? <UpArrowIcon /> : <DownArrowIcon />}
        </div>
        {isOpen && (
          <div className={styles.cs_options}>
            {options.map((option, i) => (
              <div
                key={i}
                className={styles.cs_option}
                onClick={() => handleChange(option)}
              >
                {ImgUrl && <img src={option[ImgUrl]} alt={option[keyName]} />}
                {option[keyName]}
              </div>
            ))}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Select;
