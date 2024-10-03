import React from "react";
import Section from "../section";  
import { Col, Container, Row } from "react-bootstrap"; 
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const BreadCrumb = ({  items ,pt="30",pb="30"}) => {
  return (
    <Section
    customCss={styles.p_relative}
      className={`${styles.bread_crumb}`}
      bgColor={"white"}
      pt={pt} pb={pb}>
      <Container>
        <Row>
          <Col lg={12}>
            <div className={styles.bc_home}> 
              <Link to={"/"} className={styles.bc_home_icon}>
                Home
              </Link>
              {items.map((item, index) => ( 
                  <Link
                  key={index}
                    to={item.path}
                    className={`${styles.bc_item} ${
                      index === items.length - 1 ? styles.active : ""
                    }`}
                  >
                    {item.name}
                  </Link> 
              ))}
            </div>
          </Col>
        </Row>
      </Container> 
    </Section>
  );
};

export default BreadCrumb;
