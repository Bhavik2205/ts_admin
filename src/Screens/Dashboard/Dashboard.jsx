import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className="app__wrapper">
      <Container fluid>
        <div className="padding__container">
          <Row className="gy-5">
            <Col md={12} lg={7}>
              <div
                className={`${styles.border} pb-5 pb-lg-0 pe-0 pe-lg-5 border__end border-black`}
              >
                <Row className="g-4">
                  <Col xs={12} md={6} lg={4}>
                    <div className={styles.card}>
                      <p>Total Users (Saisei)</p>
                      <h5 className="gradient-text fw-bold m-0">100</h5>
                    </div>
                  </Col>
                  <Col xs={12} md={6} lg={4}>
                    <div className={styles.card}>
                      <p>Total User (Pro)</p>
                      <h5 className="gradient-text fw-bold m-0">10</h5>
                    </div>
                  </Col>
                  <Col xs={12} md={6} lg={4}>
                    <div className={styles.card}>
                      <p>Active User (by weekly)</p>
                      <h5 className="gradient-text fw-bold m-0">10</h5>
                    </div>
                  </Col>
                  <Col xs={12} md={6} lg={4}>
                    <div className={styles.card}>
                      <p>Database Storage (GB)</p>
                      <h5 className="gradient-text fw-bold m-0">10/100</h5>
                    </div>
                  </Col>
                  <Col xs={12} md={6} lg={4}>
                    <div className={styles.card}>
                      <p>S3 Bucket Storage (GB)</p>
                      <h5 className="gradient-text fw-bold m-0">100</h5>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={12} lg={5}>
              <div className="ps-0 ps-lg-4">
                <Row className="gx-5 gy-4">
                  <Col xs={12} md={6} lg={6}>
                    <div className={styles.card}>
                      <p>Active User Saisei (by weekly)</p>
                      <h5 className="gradient-text fw-bold m-0">10</h5>
                    </div>
                  </Col>
                  <Col xs={12} md={6} lg={6}>
                    <div className={styles.card}>
                      <p>Active User Pro (by weekly)</p>
                      <h5 className="gradient-text fw-bold m-0">10</h5>
                    </div>
                  </Col>
                  <Col xs={12} md={6} lg={6}>
                    <div className={styles.card}>
                      <p>Active User Saisei (by Month)</p>
                      <h5 className="gradient-text fw-bold m-0">10</h5>
                    </div>
                  </Col>
                  <Col xs={12} md={6} lg={6}>
                    <div className={styles.card}>
                      <p>Active User Pro (by Month)</p>
                      <h5 className="gradient-text fw-bold m-0">10s</h5>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
