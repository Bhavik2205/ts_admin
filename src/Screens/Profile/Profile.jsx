import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Profile.module.css";
import formStyle from "Styles/FormControl.module.css";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const Profile = () => {
  return (
    <div className="app__wrapper">
      <Container fluid>
        <div className="padding__container d-flex flex-column align-item-center justify-content-between">
          <div>
            <div className={styles.userImage} title="OR">
              <img src="" alt="" />
            </div>
            <div className="my-2">
              <h4 className="m-0">Profile</h4>
            </div>
            <div className={styles.tabGroup}>
              <button
                type="button"
                className={`${styles.tabLink} ${styles.active}`}
              >
                My details
              </button>
              <button type="button" className={styles.tabLink}>
                Plan
              </button>
              <button type="button" className={styles.tabLink}>
                Billing
              </button>
            </div>
            <div className={styles.tabContainer}>
              <div className={styles.tabContent}>
                <Row>
                  <Col md={12} lg={10} className="mx-auto">
                    <div className="d-flex align-items-center gap-4 text-grey">
                      <span>Join Date</span>
                      <span>12/01/2022</span>
                    </div>
                    <div className={`py-3 ${styles.dropBorderBottom}`}>
                      <h5>Personal info</h5>
                      <p className="m-0 text-grey">
                        Update your photo and personal details here.
                      </p>
                    </div>
                    <div className={`py-2 ${styles.dropBorderBottom}`}>
                      <Row className="gy-1 align-items-center mb-2">
                        <Col md={12} lg={4}>
                          <div>Name</div>
                        </Col>
                        <Col md={12} lg={8}>
                          <Row className="gy-3">
                            <Col md={12} lg={4}>
                              <div className={formStyle.formGroup}>
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  value="Oliva"
                                />
                              </div>
                            </Col>
                            <Col md={12} lg={4}>
                              <div className={formStyle.formGroup}>
                                <input type="text" name="" id="" value="Rhye" />
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row className="gy-1 align-items-center">
                        <Col md={12} lg={4}>
                          <div>Password</div>
                        </Col>
                        <Col md={12} lg={8}>
                          <Row className="gy-3">
                            <Col md={12} lg={12}>
                              <button type="button" className="btn btn-dark">
                                Reset
                              </button>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                    <div className={`py-2 ${styles.dropBorderBottom}`}>
                      <Row className="gy-1 align-items-center">
                        <Col md={12} lg={4}>
                          <div>Email address</div>
                        </Col>
                        <Col md={12} lg={8}>
                          <Row>
                            <Col md={12} lg={8}>
                              <div
                                className={`${formStyle.formGroup} ${formStyle.hasIcon}`}
                              >
                                <span>
                                  <FeatherIcon
                                    icon="mail"
                                    size={20}
                                    color="rgba(102, 112, 133, 1)"
                                  />
                                </span>
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  value="olivia@untitledui.com"
                                />
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                    <div className={`py-2`}>
                      <Row className="gy-1 align-items-center">
                        <Col md={12} lg={4}>
                          <div>Password</div>
                        </Col>
                        <Col md={12} lg={8}>
                          <Row>
                            <Col md={12} lg={8}>
                              <div className={formStyle.formGroup}>
                                <div className={formStyle.select}>
                                  <select name="" id="">
                                    <option value>United States</option>
                                  </select>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
          <Row>
            <Col md={12} lg={10} className="mx-auto">
              <div className="py-2 d-flex align-items-center justify-content-end gap-3">
                <Link to="" className="btn btn-border">
                  Cancel
                </Link>
                <button className="btn btn-dark">Cancel</button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
