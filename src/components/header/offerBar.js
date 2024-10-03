import React from 'react'
import styles from "./style.module.css"
import Section from '../section'
import { Container, Row } from 'react-bootstrap'
import OfferCount from '../offerCount'

const OfferBar = () => {
  return (
    <Section bgColor={"purple"} pt={"10"} pb={"16"}> 
        <Container>
            <Row>
                <div className={styles.offerbar_wrap}>
                    <div >
                    <p>FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.</p>
                    </div>
                    <div className={styles.offer_count_wrap}>
                        <OfferCount  endTime="2024-10-02"  />
                    </div>
                </div>
            </Row>
        </Container>
    </Section>
  )
}

export default OfferBar