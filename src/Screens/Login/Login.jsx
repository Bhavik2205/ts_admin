import React from "react";
import ContainerFluid from "Components/ContainerFluid/ContainerFluid";
import { Col, Row } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <ContainerFluid>
      <div className="inner_wrapper">
        <div className="logo">
          <img src="/assets/images/logo.svg" alt="logo" className="img-fluid" />
        </div>
        <Row className="w-100">
          <Col md={12} lg={4} className="mx-auto">
            <div className="text-center">
              <div className="mb-5">
                <h5 className="fs-24 m-0">Login</h5>
              </div>
              <Row className="gy-4">
                <Col xs={12}>
                  <div className={formStyle.formGroup}>
                    <label htmlFor="" className={formStyle.labelText}>
                      Email
                    </label>
                    <input type="email" name="" id=""></input>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className={formStyle.formGroup}>
                    <label htmlFor="" className={formStyle.labelText}>
                      Password
                    </label>
                    <input type="password" name="" id=""></input>
                  </div>
                </Col>
                <Col xs={12}>
                  <Link to="" className="text-decoration-underline">Forget Password</Link>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <div className="w-100 d-flex align-items-center justify-content-end mt-5">
          <button className="btn btn-glow">Login</button>
        </div>
      </div>
    </ContainerFluid>
  );
};

export default Login;
