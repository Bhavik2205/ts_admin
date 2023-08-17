import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Users from "./Components/Users";
import Pending from "./Components/Pending";

const Admin = () => {
  const [pageType, setPageType] = useState("users");
  return (
    <div className="app__wrapper">
      <Container fluid>
        <div className="d-flex align-items-center gap-4">
          <button
            className={`btn border-0 p-0 ${
              pageType === "users" ? "text-black" : "text-grey"
            }`}
            onClick={() => setPageType("users")}
          >
            Users
          </button>
          <button
            className={`btn border-0 p-0 ${
              pageType === "pending" ? "text-black" : "text-grey"
            }`}
            onClick={() => setPageType("pending")}
          >
            Pending
          </button>
        </div>
        {pageType === "users" && <Users />}
        {pageType === "pending" && <Pending />}
      </Container>
    </div>
  );
};

export default Admin;
