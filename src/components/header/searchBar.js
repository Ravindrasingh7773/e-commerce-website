import React from "react";
import styles from "./style.module.css";
import Logo from "../logo";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchInput from "../searchInput";
import CallIcon from "../../icons/callIcon";
import RoundButton from "../roundButton"; 
import SignUpButton from "../signUpButton";
import CartBar from "../cartBar";
import WishListBar from "../wishlistBar";
import LocationData from "../locationData";

const SearchBar = () => {
  return (
    <div className={styles.searchBar_main}>
      <Container>
        <Row>
          <Col lg={12}>
            <div className={styles.search_bar}>
              <div className={styles.sb_logo}>
                <Logo />
              </div>
              <LocationData />
              <div className={styles.searchbar_input}>
                <SearchInput />
              </div>
              <div className={styles.hotline}>
                <div className={styles.hotline_icon}>
                  <CallIcon />
                </div>
                <Link to={"#"}>
                  Hotline 24/7 <br />
                  <h5>(025) 3886 25 16</h5>
                </Link>
              </div>
              <div className={styles.sb_end_buttons}>
                    <RoundButton />
                    <WishListBar />
                    <SignUpButton />
                    <CartBar />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchBar;
