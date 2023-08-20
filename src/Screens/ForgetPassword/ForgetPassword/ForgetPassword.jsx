import React, { useState } from "react";
import ContainerFluid from "Components/ContainerFluid/ContainerFluid";
import { Col, Row } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";

const ForgetPassword = () => {
  const [passwordSent, setPasswordSent] = useState(false);
  const handleClick = () => {
    setPasswordSent(true);
  };
  return (
    <ContainerFluid>
      <div className="inner_wrapper justify-content-center">
        <div className="logo mb-5">
          <img src="/assets/images/logo.svg" alt="logo" className="img-fluid" />
        </div>
        <Row className="w-100">
          <Col md={12} lg={4} className="mx-auto">
            <div className="text-center">
              <div className="mb-5">
                <h5 className="fs-24 mb-4">{!passwordSent ? "Forgot Password?" : "Check your email"}</h5>
                <p className="m-0">
                  {!passwordSent ? "No worries we’ll send you reset instruction." : "We have send password rest link!"}
                </p>
              </div>
              {!passwordSent && (
                <Row className="gy-5">
                  <Col xs={12}>
                    <div className={formStyle.formGroup}>
                      <label htmlFor="" className={formStyle.labelText}>
                        Email
                      </label>
                      <input type="email" name="" id=""></input>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <button className="btn btn-glow" onClick={handleClick}>
                        Reset Password
                      </button>
                    </div>
                  </Col>
                </Row>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </ContainerFluid>
  );
};

export default ForgetPassword;
