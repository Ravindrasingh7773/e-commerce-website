import React, { Fragment } from "react";
import Section from "../section";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SellIcon from "../../icons/sellIcon";
import styles from "./style.module.css"
import Select from "../select";
import OrderIcon from "../../icons/orderIcon";
import EyeIcon from "../../icons/eyeIcon";
import DollarIcon from "../../icons/dollarIcon";
import English from "../../assets/images/english.jpg";
import French from "../../assets/images/frenchis.jpg";
import Deustch from "../../assets/images/deutsch.jpg";
import Itali from "../../assets/images/italino.jpg";
import Polski from "../../assets/images/polski.jpg";
import NederLand from "../../assets/images/nederland.jpg";
import Pycc from "../../assets/images/pyccpk.jpg";
import Portug from "../../assets/images/portrq.jpg";
import mulla from "../../assets/images/mulla.jpg";

 const LanguageOptions = [{
    id: 1,
    name: "english",
    title: "English",
    image: English , 
 },{
    id: 2,
    name: "français",
    title: "Français", 
    image: French , 
 },{
    id: 3,
    name: "deutsch",
    title: "Deutsch", 
    image: Deustch , 
 },{
    id: 4,
    name: "italiano",
    title: "Italiano", 
    image: Itali , 
 },{
    id: 5,
    name: "polski",
    title: "Polski", 
    image: Polski , 
 },{
  id: 6,
  name: "nederlands",
  title: "Nederlands", 
  image: NederLand , 
},{
  id: 7,
  name: "pусский",
  title: "Русский", 
  image: Pycc , 
},{
  id: 8,
  name: "português PT",
  title: "Português PT", 
  image: Portug , 
}, 
]

const CurrencyOptions = [
  { id: 1, title: "USD", name: "usd" },
  { id: 2, title: "EUR", name: "eur" },
  { id: 3, title: "JPY", name: "jpy" },
  { id: 4, title: "GBP", name: "gbp" },
  { id: 5, title: "INR", name: "inr" },
];

const Topbar = () => {
     const handleSelect = (lang) => {
         console.log(lang);
     }
  return (
    <Fragment>
      <Section customCss={styles.topbar}>
        <Container>
          <Row>
            <Col lg={12}>
            <div  className={styles.topbar_wrap}> 
            <div className={styles.topbar_left}>
                <Link>
                  <SellIcon />
                  Sell on Swoo
                </Link>
                 <Link>
                  <OrderIcon />
                  Order Tracking
                </Link>
                 <Link>
                  <EyeIcon />
                  Recently Viewed
                </Link>
              </div>
              <div className={styles.select_grp}>
                <Select options={CurrencyOptions} keyName={"title"} placeholder={"select an currency"}  defaultValue={CurrencyOptions[3]} onSelect={handleSelect} Icon={<DollarIcon/>} />
                <Select options={LanguageOptions} keyName={"title"} placeholder={"select an language"}  defaultValue={LanguageOptions[2]} onSelect={handleSelect} ImgUrl={"image"}   />
              </div>
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