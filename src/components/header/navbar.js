import React, { Fragment  } from "react";
import styles from "./style.module.css";
import Select from "../select";
import { Container, Row, Col } from "react-bootstrap";
import MenuItem from "../menuItem"; 
// import CallIcon from "../../icons/callIcon";
import Section from "../section";
import HumbergerIcon from "../../icons/humbergerIcon";

const OptionData = [
  {
    id: 1,
    name: "pregnantPostpartum",
    title: "Pregnant & Postpartum",
    children: [
      { id: 11, title: "Home1", path: "/home1" },
      { id: 12, title: "Home2", path: "/home2" },
      { id: 13, title: "Home3", path: "/home3" },
    ],
  },
  {
    id: 2,
    name: "milksFoods",
    title: "Milks & Foods",
    children: [
      { id: 21, title: "Home1", path: "/home1" },
      { id: 22, title: "Home2", path: "/home2" },
      { id: 23, title: "Home3", path: "/home3" },
    ],
  },
  {
    id: 3,
    name: "diapersWipes",
    title: "Diapers & Wipes",
    children: [
      { id: 31, title: "Home1", path: "/home1" },
      { id: 32, title: "Home2", path: "/home2" },
      { id: 33, title: "Home3", path: "/home3" },
    ],
  },
  {
    id: 4,
    name: "infant",
    title: "Infant",
  },
  {
    id: 5,
    name: "eatDrinkSupplies",
    title: "Eat & Drink Supplies",
  },
  {
    id: 6,
    name: "babyFashion",
    title: "Baby Fashion",
  },
  {
    id: 7,
    name: "babyOut",
    title: "Baby Out",
  },
  {
    id: 8,
    name: "toysStudy",
    title: "Toys & Study",
  },
  {
    id: 9,
    name: "strollerCribChair",
    title: "Stroller, Crib, Chair",
  },
  {
    id: 10,
    name: "washesBath",
    title: "Washes & Bath",
  },
  {
    id: 11,
    name: "homewares",
    title: "Homewares",
  },
  {
    id: 12,
    name: "clearance",
    title: "Clearance",
  },
];

const MenuItems = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    children: [
      {
        id: 11,
        title: "Home1",
        path: "/home1",
      },
      { id: 12, title: "Home2", path: "/home2" },
      { id: 13, title: "Home3", path: "/home3" },
    ],
  },
  {
    id: 2,
    title: "Pages",
    path: "/pages",
    children: [
      {
        id: 21,
        title: "Log In",
        path: "/login",
      },
      { id: 22, title: "Register", path: "/register" },
      { id: 23, title: "Card", path: "/card" },
      { id: 24, title: "Profile", path: "/profile" },
      { id: 25, title: "Contact", path: "/contact" },
      { id: 26, title: "Checkout", path: "/checkout" },
      { id: 27, title: "About", path: "/about" },
    ],
  },
  {
    id: 3,
    title: "Products",
    path: "/product",
    children: [
      {
        id: 21,
        title: "Pages1",
        path: "/productPage",
      },
      { id: 22, title: "Pages2", path: "/pages2" },
      { id: 23, title: "Pages3", path: "/pages3" },
    ],
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
  },
];
const handleSelect = (selectedItem) => {
  console.log("Selected:", selectedItem);
};

const Navbar = () => {
  return (
    <Fragment>
      <Section customCss={styles.navbar}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={styles.navbar_wrap}>
                <div className={styles.navbar_left}>
                  <div className={styles.nav_select}>
                    <Select
                      keyName={"title"}
                      options={OptionData}
                      onSelect={handleSelect}
                      placeholder={"Category"}
                    />
                  </div>
                  <div className={styles.nav_menu}>
                    {MenuItems.map((item, i) => (
                      <MenuItem item={item} key={i} />
                    ))}
                  </div>
                </div>
                <div className={styles.navbar_right}>
                  <div className={styles.burger_icon}>
                    <HumbergerIcon />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </Fragment>
  );
};

export default Navbar;
