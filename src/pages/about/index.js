import React from "react";
import styles from "./style.module.css";
import Section from "../../components/section";
import img1 from "../../assets/images/hero-img.png";
import img2 from "../../assets/images/seller-boy-img.png";
import img3 from "../../assets/images/about-tower-img.png";
import img4 from "../../assets/images/employe-img1.png";
import img5 from "../../assets/images/employe-img2.png";
import img6 from "../../assets/images/employe-img3.png";
import img7 from "../../assets/images/employe-img4.png";
import img8 from "../../assets/images/employe-img5.png";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../../components/button";
import BreadCrumb from "../../components/breadCrumb";

const EmployeData = [
  {
    img: img4,
    name: "Henry Avery",
    post: "Chairman",
  },
  {
    img: img5,
    name: "Michael Edward",
    post: "Vice President",
  },
  {
    img: img6,
    name: "Eden Hazard",
    post: "CEO",
  },
  {
    img: img7,
    name: "Robert Downey Jr",
    post: "CEO",
  },
  {
    img: img8,
    name: "Nathan Drake",
    post: "strategist director",
  },
];

const BreadCrumbItems = [
  { name: "pages", path: "/pages" },
  { name: "about", path: "/about" },
];
const About = () => {
  return (
    <div className={styles.about_page}> 
    <BreadCrumb items={BreadCrumbItems} />
    <Section pt={"30"} pb={"30"}>
      <Container>
        <Row>
          <Col lg={12}>
            <div className={styles.hero_main}>
              <div className={styles.heroSection}>
                <div className={styles.hero_img}>
                  <img src={img1} alt='hero_img' />
                </div>

                <div className={styles.hero_content}>
                  <div className={styles.hc_title}>
                    <span>Best experience </span>
                    always wins
                  </div>
                  <div className={styles.hc_description}>
                    #1 Online Marketplace for Electronic & Technology in
                    Mahanttan, CA
                  </div>
                </div>
              </div>
              <div className={styles.counter_box}>
                <div className={styles.counter_title}>
                  our purpose is to enrich and <span> and enhance lives </span>
                  through technology
                </div>
                <div className={styles.cb_right}>
                  <div className={styles.cbr_box}>
                    <div className={styles.cbr_title}> $12,5M</div>
                    <div className={styles.cbr_description}>
                      total revenue from 2001 - 2023
                    </div>
                  </div>
                  <div className={styles.cbr_box}>
                    <div className={styles.cbr_title}> 12K+</div>
                    <div className={styles.cbr_description}>
                      orders delivered successful on everyday
                    </div>
                  </div>
                  <div className={styles.cbr_box}>
                    <div className={styles.cbr_title}> 725+</div>
                    <div className={styles.cbr_description}>
                      store and office in U.S and worldwide
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={6}>
            <div className={styles.seller_boy_img}>
              <img src={img2} alt='seller img' />
            </div>
          </Col>
          <Col lg={6}>
            <div className={styles.seller_content}>
              <div className={styles.seller_title}>
                We connect millions of buyers and sellers around the world,
                empowering people & creating economic opportunity for all.
              </div>
              <div className={styles.seller_description}>
                Within our markets, millions of people around the world connect,
                both online and offline, to make, sell and buy unique goods. We
                also offer a wide range of Seller Services and tools that help
                creative entrepreneurs start, manage & scale their businesses.
              </div>
              <div className={styles.seller_btn}>
                <Button
                  text={" our showreel"}
                  size={"large"}
                  bg={"green"}
                  transform={"uppercase"}
                />
              </div>
            </div>
          </Col>
        </Row>

        <Row className='py-3'>
          <Col lg={4}>
            <div className={styles.feature_box}>
              <div className={styles.feature_title}>
                100% authentic products
              </div>
              <div className={styles.feature_description}>
                Swoo Tech Mart just distribute 100% authorized products &
                guarantee quality. Nulla porta nulla nec orci vulputate, id
                rutrum sapien varius.
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className={styles.feature_box}>
              <div className={styles.feature_title}>fast delivery</div>
              <div className={styles.feature_description}>
                Fast shipping with a lots of option to delivery. 100% guarantee
                that your goods alway on time and perserve quality.
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className={styles.feature_box}>
              <div className={styles.feature_title}>affordable price</div>
              <div className={styles.feature_description}>
                We offer an affordable & competitive price with a lots of
                special promotions.
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <div className={styles.about_bottom}>
              <div className={styles.ab_top}>
                <div className={styles.ab_title}>our mission and vision</div>
                <div className={styles.abt_description}>
                  Nam maximus nunc a augue pulvinar, non euismod mauris tempus.
                  Cras non elit vel magna molestie pellentesque in eu dui. Donec
                  laoreet quis erat vitae finibus. Vestibulum enim eros, porta
                  eget quam et, euismod dictum elit. Nullam eu tempus magna.
                  Fusce malesuada nisi id felis placerat porta vel sed augue.
                  Vivamus mollis mauris vitae rhoncus egestas. Pellentesque
                  habitant morbi tristique senectus et netus et malesuada fames
                  ac turpis egestas.
                </div>
                <div className={styles.ab_tower_img}>
                  <img src={img3} alt='tower img' />
                </div>
              </div>

              <div className={styles.ab_middle}>
                <div className={styles.ab_title}>our mission and vision</div>
                <div className={styles.abt_description}>
                  Pellentesque laoreet justo nec ex sodales euismod. Aliquam
                  orci tortor, bibendum nec ultricies ac, auctor nec purus.
                  Maecenas in consectetur erat.
                </div>
                <Row>
                  <Col lg={6}>
                    <div className={styles.ab_year_wrapper}>
                      <span className={styles.am_year}>1997:</span>
                      <span className={styles.am_description}>
                        A small store located in Brooklyn Town, USA
                      </span>
                    </div>
                    <div className={styles.ab_year_wrapper}>
                      <span className={styles.am_year}>1998:</span>
                      <span className={styles.am_description}>
                        It is a long established fact that a reader will be
                        distracted by the readable
                      </span>
                    </div>
                    <div className={styles.ab_year_wrapper}>
                      <span className={styles.am_year}>2000:</span>
                      <span className={styles.am_description}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry
                      </span>
                    </div>
                    <div className={styles.ab_year_wrapper}>
                      <span className={styles.am_year}>2002:</span>
                      <span className={styles.am_description}>
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the
                      </span>
                    </div>
                    <div className={styles.ab_year_wrapper}>
                      <span className={styles.am_year}>2004:</span>
                      <span className={styles.am_description}>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text
                      </span>
                    </div>
                    <div className={styles.ab_year_wrapper}>
                      <span className={styles.am_year}>2005:</span>
                      <span className={styles.am_description}>
                        The point of using Lorem Ipsum is that it has a
                        more-or-less normal distribution of letters, as opposed
                        to using 'Content here
                      </span>
                    </div>
                    <div className={styles.ab_year_wrapper}>
                      <span className={styles.am_year}>2006:</span>
                      <span className={styles.am_description}>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable
                      </span>
                    </div>
                    <div className={styles.ab_year_wrapper}>
                      <span className={styles.am_year}>2010:</span>
                      <span className={styles.am_description}>
                        All the Lorem Ipsum generators on the Internet tend to
                        repeat predefined
                      </span>
                    </div>
                    <div className={styles.ab_year_wrapper}>
                      <span className={styles.am_year}>2013:</span>
                      <span className={styles.am_description}>
                        Lorem Ipsum comes from sections 1.10.32
                      </span>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className={styles.ab_year_wrapper}>
                      <span className={styles.am_year}> 2014:</span>
                      <span className={styles.am_description}>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form
                      </span>
                    </div>
                    <div className={styles.ab_year_wrapper}>
                      <span className={styles.am_year}> 2016:</span>
                      <span className={styles.am_description}>
                        All the Lorem Ipsum generators on the Internet tend to
                        repeat predefined chunks as necessary
                      </span>
                    </div>
                    <div className={styles.ab_year_wrapper}>
                      <span className={styles.am_year}> 2020:</span>
                      <span className={styles.am_description}>
                        Lorem Ipsum comes from sections 1.10.32
                      </span>
                    </div>
                    <div className={styles.ab_year_wrapper}>
                      <span className={styles.am_year}> 2021:</span>
                      <span className={styles.am_description}>
                        Making this the first true generator on the Internet
                      </span>
                    </div>
                    <div className={styles.ab_year_wrapper}>
                      <span className={styles.am_year}> 2022:</span>
                      <span className={styles.am_description}>
                        Lorem Ipsum which looks reasonable. The generated Lorem
                        Ipsum is therefore always free from repetition, injected
                        humour
                      </span>
                    </div>
                    <div className={styles.ab_year_wrapper}>
                      <span className={styles.am_year}>2023: </span>
                      <span className={styles.am_description}>
                        here are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form
                      </span>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <div className={styles.leaderships_section}>
              <div className={styles.leaderships_title}>leaderships</div>
              <div className={styles.ls_wrapper}>
                {EmployeData.map((value, index) => (
                  <div className={styles.employe_img_box} key={index}>
                    <div className={styles.employe_img}>
                      <img src={value.img} alt='Employee img' />
                    </div>
                    <div className={styles.employe_name}>{value.name}</div>
                    <div className={styles.employe_post}>{value.post}</div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
    </div>
  );
};

export default About;
