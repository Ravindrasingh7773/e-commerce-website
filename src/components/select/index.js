import React, { Fragment, useState } from "react";
import styles from "./style.module.css";
import DollarIcon from "../../icons/dollarIcon";
import DownArrowIcon from "../../icons/downArrowIcon";
import UpArrowIcon from "../../icons/upArrowIcon";

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
          <DollarIcon />
          {selectedOption ? selectedOption[keyName] : placeholder}
         {isOpen ? <UpArrowIcon /> :  <DownArrowIcon /> }
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
 

// import React, { Fragment, useState } from "react";
// import styles from "./style.module.css";

// // Example SVGs for the icons
// const LanguageIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="16"
//     height="16"
//     fill="currentColor"
//     className="bi bi-translate"
//     viewBox="0 0 16 16"
//   >
//     <path d="M4.5 0a.5.5 0 0 1 .5.5v1.667h2.138c.109-.392.262-.764.452-1.114A.5.5 0 0 1 8 0h6.5a.5.5 0 0 1 .5.5v1.667a.5.5 0 0 1-1 0V1h-1.264a5.57 5.57 0 0 0-.522 1.555.5.5 0 0 1-.482.445H10.5v3h2.732c.19 0 .36-.106.445-.268.296-.527.67-1.065 1.117-1.555a.5.5 0 0 1 .707.707 9.05 9.05 0 0 1-1.086 1.514.5.5 0 0 1-.395.187h-3.137a.5.5 0 0 1-.5-.5V2H8v4.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-5A.5.5 0 0 1 1.5 1h3z" />
//     <path d="M0 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-5z" />
//   </svg>
// );

// const ChevronDownIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="16"
//     height="16"
//     fill="currentColor"
//     className="bi bi-chevron-down"
//     viewBox="0 0 16 16"
//   >
//     <path
//       fillRule="evenodd"
//       d="M1.5 4.5a.5.5 0 0 1 .707 0l6.646 6.646a.5.5 0 0 1-.708.708L1.5 5.207a.5.5 0 0 1 0-.707zm12 0a.5.5 0 0 1 .707 0l6.646 6.646a.5.5 0 0 1-.708.708L13.5 5.207a.5.5 0 0 1 0-.707z"
//     />
//   </svg>
// );

// const Select = ({ options, keyName, placeholder, defaultValue, onSelect }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(defaultValue || null);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleChange = (option) => {
//     setSelectedOption(option);
//     onSelect(option);
//     setIsOpen(false);
//   };

//   return (
//     <Fragment>
//       <div className={styles.custom_select}>
//         <div className={styles.cs_label} onClick={handleToggle}>
//           <LanguageIcon /> {/* Language icon */}
//           <span>{selectedOption ? selectedOption[keyName] : placeholder}</span>
//           <ChevronDownIcon className={styles.chevron} /> {/* Chevron down icon */}
//         </div>
//         {isOpen && (
//           <div className={styles.cs_options}>
//             {options.map((option, i) => (
//               <div
//                 key={i}
//                 className={styles.cs_option}
//                 onClick={() => handleChange(option)}
//               >
//                 {option[keyName]}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </Fragment>
//   );
// };

// export default Select;
