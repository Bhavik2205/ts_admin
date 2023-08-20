import React from "react";
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Paginations from "Components/Paginations/Paginations";
import { Link } from "react-router-dom";

const Saisei = () => {
  return (
    <div className="app__wrapper">
      <Container fluid>
        <div className="padding__container d-flex flex-column align-item-center justify-content-between">
          <div>
            <Row className="g-4 align-items-end mb-3">
              <Col lg={12} xl={6}>
                <Row className="g-4">
                  <Col md={12} lg={4}>
                    <div className={formStyle.formGroup}>
                      <label htmlFor="">Status</label>
                      <div className={formStyle.select}>
                        <select name="" id="">
                          <option value>Sector</option>
                        </select>
                      </div>
                    </div>
                  </Col>
                  <Col md={12} lg={4}>
                    <div className={formStyle.formGroup}>
                      <label htmlFor="">Join Date</label>
                      <div className={formStyle.select}>
                        <select name="" id="">
                          <option value>Stage</option>
                        </select>
                      </div>
                    </div>
                  </Col>
                  <Col md={12} lg={4}>
                    <div className={formStyle.formGroup}>
                      <label htmlFor="">Country they Invest in</label>
                      <div className={formStyle.select}>
                        <select name="" id="">
                          <option value>country</option>
                        </select>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col lg={12} xl={6}>
                <Row>
                  <Col md={12} lg={4} xl={6} className="ms-0 ms-xl-auto">
                    <div className={formStyle.searchBox}>
                      <FeatherIcon icon="search" size={20} />
                      <input type="text" name="" id="" placeholder="search" />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Table>
              <thead className="table-dark">
                <tr>
                  <th>
                    <div className="d-flex align-items-center gap-2">
                      <Form.Check type="checkbox" className="m-0 form-check" />{" "}
                      Name
                    </div>
                  </th>
                  <th>
                    <div className="d-flex align-items-center gap-1">
                      Status
                      <button className="btn border-0 p-0 btn-auto text-white">
                        <FeatherIcon icon="arrow-down" size={18} />
                      </button>
                    </div>
                  </th>
                  <th>Company Name</th>
                  <th>Email address</th>
                  <th>Join Date</th>
                  <th>Country</th>
                  <th>Deactivate</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <Form.Check type="checkbox" className="m-0 form-check" />
                      <div className="table__has-img d-flex align-items-center gap-3">
                        <div className="img-box" title="OR">
                          <img src="" alt="" />
                        </div>
                        <span className="text-black">Olivia Rhye</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="success-badge hasDot">Active</div>
                  </td>
                  <td>
                    <span className="text-grey">Product Designer</span>
                  </td>
                  <td>
                    <span className="text-grey">olivia@untitledui.com</span>
                  </td>
                  <td>
                    <span className="text-grey">12/01/2022</span>
                  </td>
                  <td>
                    <span className="text-grey">Australia</span>
                  </td>
                  <td>
                    <Form.Check type="switch" className="form-switch" />
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <button className="btn border-0 p-0 btn-auto" disabled>
                        <FeatherIcon icon="trash-2" size={18} />
                      </button>
                      <Link to="/user-prfile" className="btn border-0 p-0 btn-auto">
                        <FeatherIcon icon="edit-2" size={18} />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <Form.Check type="checkbox" className="m-0 form-check" />
                      <div className="table__has-img d-flex align-items-center gap-3">
                        <div className="img-box" title="OR">
                          <img src="" alt="" />
                        </div>
                        <span className="text-black">Olivia Rhye</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="success-badge hasDot">Active</div>
                  </td>
                  <td>
                    <span className="text-grey">Product Designer</span>
                  </td>
                  <td>
                    <span className="text-grey">olivia@untitledui.com</span>
                  </td>
                  <td>
                    <span className="text-grey">12/01/2022</span>
                  </td>
                  <td>
                    <span className="text-grey">Australia</span>
                  </td>
                  <td>
                    <Form.Check type="switch" className="form-switch" />
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <button className="btn border-0 p-0 btn-auto" disabled>
                        <FeatherIcon icon="trash-2" size={18} />
                      </button>
                      <Link to="/user-prfile" className="btn border-0 p-0 btn-auto">
                        <FeatherIcon icon="edit-2" size={18} />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <Form.Check type="checkbox" className="m-0 form-check" />
                      <div className="table__has-img d-flex align-items-center gap-3">
                        <div className="img-box" title="OR">
                          <img src="" alt="" />
                        </div>
                        <span className="text-black">Olivia Rhye</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="success-badge hasDot">Active</div>
                  </td>
                  <td>
                    <span className="text-grey">Product Designer</span>
                  </td>
                  <td>
                    <span className="text-grey">olivia@untitledui.com</span>
                  </td>
                  <td>
                    <span className="text-grey">12/01/2022</span>
                  </td>
                  <td>
                    <span className="text-grey">Australia</span>
                  </td>
                  <td>
                    <Form.Check type="switch" className="form-switch" />
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <button className="btn border-0 p-0 btn-auto" disabled>
                        <FeatherIcon icon="trash-2" size={18} />
                      </button>
                      <Link to="/user-prfile" className="btn border-0 p-0 btn-auto">
                        <FeatherIcon icon="edit-2" size={18} />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <Form.Check type="checkbox" className="m-0 form-check" />
                      <div className="table__has-img d-flex align-items-center gap-3">
                        <div className="img-box" title="OR">
                          <img src="" alt="" />
                        </div>
                        <span className="text-black">Olivia Rhye</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="warning-badge hasDot">In Active</div>
                  </td>
                  <td>
                    <span className="text-grey">Product Designer</span>
                  </td>
                  <td>
                    <span className="text-grey">olivia@untitledui.com</span>
                  </td>
                  <td>
                    <span className="text-grey">12/01/2022</span>
                  </td>
                  <td>
                    <span className="text-grey">Australia</span>
                  </td>
                  <td>
                    <Form.Check type="switch" className="form-switch" />
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <button className="btn border-0 p-0 btn-auto" disabled>
                        <FeatherIcon icon="trash-2" size={18} />
                      </button>
                      <Link to="/user-prfile" className="btn border-0 p-0 btn-auto">
                        <FeatherIcon icon="edit-2" size={18} />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <Form.Check type="checkbox" className="m-0 form-check" />
                      <div className="table__has-img d-flex align-items-center gap-3">
                        <div className="img-box" title="OR">
                          <img src="" alt="" />
                        </div>
                        <span className="text-black">Olivia Rhye</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="success-badge hasDot">Active</div>
                  </td>
                  <td>
                    <span className="text-grey">Product Designer</span>
                  </td>
                  <td>
                    <span className="text-grey">olivia@untitledui.com</span>
                  </td>
                  <td>
                    <span className="text-grey">12/01/2022</span>
                  </td>
                  <td>
                    <span className="text-grey">Australia</span>
                  </td>
                  <td>
                    <Form.Check type="switch" className="form-switch" />
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <button className="btn border-0 p-0 btn-auto" disabled>
                        <FeatherIcon icon="trash-2" size={18} />
                      </button>
                      <Link to="/user-prfile" className="btn border-0 p-0 btn-auto">
                        <FeatherIcon icon="edit-2" size={18} />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <Form.Check type="checkbox" className="m-0 form-check" />
                      <div className="table__has-img d-flex align-items-center gap-3">
                        <div className="img-box" title="OR">
                          <img src="" alt="" />
                        </div>
                        <span className="text-black">Olivia Rhye</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="success-badge hasDot">Active</div>
                  </td>
                  <td>
                    <span className="text-grey">Product Designer</span>
                  </td>
                  <td>
                    <span className="text-grey">olivia@untitledui.com</span>
                  </td>
                  <td>
                    <span className="text-grey">12/01/2022</span>
                  </td>
                  <td>
                    <span className="text-grey">Australia</span>
                  </td>
                  <td>
                    <Form.Check type="switch" className="form-switch" />
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <button className="btn border-0 p-0 btn-auto" disabled>
                        <FeatherIcon icon="trash-2" size={18} />
                      </button>
                      <Link to="/user-prfile" className="btn border-0 p-0 btn-auto">
                        <FeatherIcon icon="edit-2" size={18} />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <Form.Check type="checkbox" className="m-0 form-check" />
                      <div className="table__has-img d-flex align-items-center gap-3">
                        <div className="img-box" title="OR">
                          <img src="" alt="" />
                        </div>
                        <span className="text-black">Olivia Rhye</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="success-badge hasDot">Active</div>
                  </td>
                  <td>
                    <span className="text-grey">Product Designer</span>
                  </td>
                  <td>
                    <span className="text-grey">olivia@untitledui.com</span>
                  </td>
                  <td>
                    <span className="text-grey">12/01/2022</span>
                  </td>
                  <td>
                    <span className="text-grey">Australia</span>
                  </td>
                  <td>
                    <Form.Check type="switch" className="form-switch" />
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <button className="btn border-0 p-0 btn-auto" disabled>
                        <FeatherIcon icon="trash-2" size={18} />
                      </button>
                      <Link to="/user-prfile" className="btn border-0 p-0 btn-auto">
                        <FeatherIcon icon="edit-2" size={18} />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <Form.Check type="checkbox" className="m-0 form-check" />
                      <div className="table__has-img d-flex align-items-center gap-3">
                        <div className="img-box" title="OR">
                          <img src="" alt="" />
                        </div>
                        <span className="text-black">Olivia Rhye</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="success-badge hasDot">Active</div>
                  </td>
                  <td>
                    <span className="text-grey">Product Designer</span>
                  </td>
                  <td>
                    <span className="text-grey">olivia@untitledui.com</span>
                  </td>
                  <td>
                    <span className="text-grey">12/01/2022</span>
                  </td>
                  <td>
                    <span className="text-grey">Australia</span>
                  </td>
                  <td>
                    <Form.Check type="switch" className="form-switch" />
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <button className="btn border-0 p-0 btn-auto" disabled>
                        <FeatherIcon icon="trash-2" size={18} />
                      </button>
                      <Link to="/user-prfile" className="btn border-0 p-0 btn-auto">
                        <FeatherIcon icon="edit-2" size={18} />
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <Paginations />
        </div>
      </Container>
    </div>
  );
};

export default Saisei;
