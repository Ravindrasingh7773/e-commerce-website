import React, { Fragment, useState } from "react";
import styles from "./style.module.css";

const Select = ({ options, keyName, placeholder, defaultValue, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue || null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleChange = (option) => {
    setSelectedOption(option);
          onSelect(option);
          setIsOpen(false);

  };

  return (
    <Fragment>
      <div className={styles.custom_select}>
        <div className={styles.cs_label} onClick={handleToggle}>
          {selectedOption ? selectedOption[keyName] : placeholder}
        </div>
        {isOpen && (
          <div className={styles.cs_options}>
            {options.map((option, i) =>  
              <div key={i} className={styles.cs_option} onClick={()=>{handleChange(option)}}>
                {option[keyName]}
              </div>
             )}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Select;
 