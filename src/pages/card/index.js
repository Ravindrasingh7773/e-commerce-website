import React  from "react";
import Section from "../../components/section";
import { Col, Container, Row } from "react-bootstrap";
import CartItem from "../../components/cartItem";
import image1 from "../../assets/images/product1.png"; 
import styles from "./style.module.css";
import OrderSummary from "../../components/orderSummary";
import BreadCrumb from "../../components/breadCrumb";

const ItemData = [
  {
    image: image1,
    profit: "199.00",
    count: "243",
    name: "SROK Smart Phone 128GB, Oled Retina",
    price: "579.00",
  },
  {
    image: image1,
    profit: "199.00",
    count: "243",
    name: "SROK Smart Phone 128GB, Oled Retina",
    price: "579.00",
  },
  {
    image: image1,
    profit: "199.00",
    count: "243",
    name: "SROK Smart Phone 128GB, Oled Retina",
    price: "579.00",
  },
];

const BreadCrumbItems = [
  { name: "pages", path: "/pages" },
  { name: "card", path: "/card" },
];
const Card = () => {
  return (
    <div className={styles.card_page}>
      <BreadCrumb items={BreadCrumbItems} />
    <Section pt={"30"} pb={"30"}>
    <Container className={styles.wrap_div}>
        <Row>
          <Col lg={8}>
            {ItemData.map((value, index) => (
              <CartItem
                key={index}
                item={value}
                IfCardItem={true}
              />
            ))}
          </Col>
          <Col lg={4}>
            <div className={styles.orderSummary}>
              <OrderSummary />
            </div>
          </Col>
        </Row>
      </Container>
    </Section>      
    </div>
  );
};

export default Card;
