import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const Pending = () => {
  return (
    <div className="padding__container d-flex flex-column align-item-center justify-content-between">
      <div>
        <Row className="g-4 align-items-end mb-5">
          <Col lg={12} xl={6}>
            <Row className="g-4 align-items-center">
              <Col md={12} lg={4}>
                <div className="d-flex align-items-center gap-3">
                  <button className="addButton">
                    <FeatherIcon icon="plus" size={20} />
                  </button>
                  New Member
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={6}>
            <Table responsive>
              <thead className="table-dark">
                <tr>
                  <th>
                    <div className="d-flex align-items-center gap-1">
                      Status
                      <button className="btn border-0 p-0 btn-auto text-white">
                        <FeatherIcon icon="arrow-down" size={18} />
                      </button>
                    </div>
                  </th>
                  <th>Email address</th>
                  <th>Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="success-badge">Admin</div>
                  </td>
                  <td>
                    <span className="text-grey">olivia@untitledui.com</span>
                  </td>
                  <td>
                    <span className="text-grey">12/01/2022</span>
                  </td>
                  <td>
                    <button className="btn border-0 p-0 btn-auto">
                      <FeatherIcon icon="trash-2" size={18} />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="success-badge">Admin</div>
                  </td>
                  <td>
                    <span className="text-grey">olivia@untitledui.com</span>
                  </td>
                  <td>
                    <span className="text-grey">12/01/2022</span>
                  </td>
                  <td>
                    <button className="btn border-0 p-0 btn-auto">
                      <FeatherIcon icon="trash-2" size={18} />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="success-badge">Admin</div>
                  </td>
                  <td>
                    <span className="text-grey">olivia@untitledui.com</span>
                  </td>
                  <td>
                    <span className="text-grey">12/01/2022</span>
                  </td>
                  <td>
                    <button className="btn border-0 p-0 btn-auto">
                      <FeatherIcon icon="trash-2" size={18} />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="success-badge">Admin</div>
                  </td>
                  <td>
                    <span className="text-grey">olivia@untitledui.com</span>
                  </td>
                  <td>
                    <span className="text-grey">12/01/2022</span>
                  </td>
                  <td>
                    <button className="btn border-0 p-0 btn-auto">
                      <FeatherIcon icon="trash-2" size={18} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Pending;
