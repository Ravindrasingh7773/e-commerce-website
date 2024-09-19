import React, { Fragment } from "react";
import Section from "../section";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SellIcon from "../../icons/sellIcon";
import styles from "./style.module.css"
import Select from "../select";

 const LanguageOptions = [{
    id: 1,
    name: "english",
    title: "English",
    code: "en"
 },{
    id: 2,
    name: "hindi",
    title: "Hindi",
    code: "hi"
 },{
    id: 3,
    name: "italian",
    title: "Italian",
    code: "it"
 },{
    id: 4,
    name: "spanish",
    title: "Spanish",
    code: "en"
 },{
    id: 5,
    name: "german",
    title: "German",
    code: "ge"
 },
]

const Topbar = () => {
     const handleSelect = (lang) => {
         console.log(lang);
     }
  return (
    <Fragment>
      <Section>
        <Container>
          <Row>
            <Col lg={12}  className={styles.topbar_wrap}>
              <div className={styles.topbar_left}>
                <Link>
                  <SellIcon />
                  Sell on Swoo
                </Link> <Link>
                  <SellIcon />
                  Order Tracking
                </Link> <Link>
                  <SellIcon />
                  Recently Viewed
                </Link>
              </div>
              <div>
                <Select options={LanguageOptions} keyName={"title"} placeholder={"select an language"}  defaultValue={LanguageOptions[3]} onSelect={handleSelect} />
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </Fragment>
  );
};

export default Topbar;
// import React from 'react';
// import styles from './style.module.css';
// import Section from '../section';
// import { Col, Container, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import Select from '../select';

// const LanguageOption = [{
//     id: 1,
//     name: 'english',
//     title: 'English',
//     code: 'en',
// },
// {
//     id: 6,
//     name: 'hindi',
//     title: 'Hindi',
//     code: 'hn',
// },
// {
//     id: 2,
//     name: 'spanish',
//     title: 'Spanish',
//     code: 'sp',
// },
// {
//     id: 3,
//     name: 'french',
//     title: 'French',
//     code: 'fr',
// },
// {
//     id: 4,
//     name: 'german',
//     title: 'German',
//     code: 'de',
// },
// {
//     id: 5,
//     name: 'italian',
//     title: 'Italian',
//     code: 'it',
// }];

// const Topbar = () => {
//     const handleLanguage = (lang) => {
//         console.log(lang);
//     }
//     return (
//         <Container>
//             <Row>
//                 <div className={styles.topbar}>
//                     <div className={styles.top_link}>
//                         <Link to={"/"}>
//                             <div>About Us</div>
//                         </Link>
//                         <Link to={"/"}>
//                             <div>My account</div>
//                         </Link>
//                         <Link to={"/"}>
//                             <div>Wishlist</div>
//                         </Link>
//                         <p>We deliver to you every day from <span>7:00 to 23:00</span></p>
//                     </div>
//                     <div className={styles.top_select}>
//                         <Select options={LanguageOption} keyName={"title"} placeholder={"Language"} defaultValue={LanguageOption[3]} onSelect={handleLanguage} />
//                         <Link to={"/"}>
//                             <div>Order Tracking</div>
//                         </Link>
//                     </div>
//                 </div>
//             </Row>
//         </Container>
//     );
// }

// export default Topbar;