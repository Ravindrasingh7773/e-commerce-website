 import React, { Fragment, useEffect, useState } from "react";
import styles from "./style.module.css";
import Location from "../../icons/location";
import PincodeData from "../../data/pincode.json";
import SearhImg from "../../assets/images/search.png"

const LocationData = () => {
  const [openDataBar, setOpenDataBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItem, setFilteredItem] = useState([]);
const [selectedPincode, setSelectedPincode] = useState(null);


  const handleToggle = () => {
    setOpenDataBar(!openDataBar);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const debounce = (func, delay) => {
    let timeoutId;
    return (...argu) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...argu), delay);
    };
  };

  const filterItem = (query) => {
    const filterData = PincodeData.filter((item) => {
      return (
        item.code.includes(query) || item.area.includes(query.toLowerCase())
      );
    });
    setFilteredItem(filterData);
  };
  const DebuouncedItem = debounce(filterItem, 300);

  useEffect(() => {
    DebuouncedItem(searchTerm);
  }, [searchTerm]);

   const handlePincodeSelect = (pincode) => {
        setSelectedPincode(pincode);
        setSearchTerm(''); 
        setOpenDataBar(false);  
     }

  return (
    <Fragment>
      <div className={styles.delivery}>
        <div className={styles.delivery} onClick={handleToggle}>
          <div className={styles.icon}>
            <Location />
          </div>
          <div className={styles.d_address}>
            Deliver to <br /> <span>{selectedPincode ? `${selectedPincode.area} - ${selectedPincode.code}` : 'all'}</span>
          </div>
        </div>
        {openDataBar && (
          <div className={styles.location_dropdown}>
            <div className={styles.ld_input}>
              <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Enter pincode"
              />
            </div>
            <div className={styles.location_list}>
              {searchTerm.length === 0 && (
                <div className={styles.location_empty}>
                <div className={styles.location_empty_text}>
                <img src={SearhImg} />
                <span>Search a location</span>
                </div>
                </div>
              )}
              {filteredItem.length === 0 && (
                <div className={styles.location_not_found}>
                    Location Not fromund
                </div>
              )}
                {searchTerm.length > 0 && filteredItem.length > 0 &&
                <>
              {filteredItem.map((item, index) => (
                <div
                  key={index}
                  className={styles.location_item}
                  onClick={() => handlePincodeSelect(item)} // Call select function on click
                >
                  {item.area} - {item.code}
                </div>
              ))}
              </>
              }
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default LocationData;
 

