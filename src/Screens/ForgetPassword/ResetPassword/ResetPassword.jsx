import ContainerFluid from "Components/ContainerFluid/ContainerFluid";
import { Col, Row } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";

const ResetPassword = () => {
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
                <h5 className="fs-24 mb-4">Set new password</h5>
              </div>
              <Row className="gy-3">
                <Col xs={12}>
                  <div className={formStyle.formGroup}>
                    <label htmlFor="" className={formStyle.labelText}>
                      Password
                    </label>
                    <input type="password" name="" id=""></input>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className={formStyle.formGroup}>
                    <label htmlFor="" className={formStyle.labelText}>
                      Confirm Password
                    </label>
                    <input type="password" name="" id=""></input>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className="w-100 d-flex align-items-center justify-content-center mt-5">
                    <button className="btn btn-glow">Reset Password</button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </ContainerFluid>
  );
};

export default ResetPassword;
