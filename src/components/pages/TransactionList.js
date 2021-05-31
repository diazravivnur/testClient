import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { API } from "../../config/api";
import { Table } from "react-bootstrap";

import DropdownAction from "../Navbar/DropdownAction";

const TransactionList = () => {
  const [trans, setTrans] = useState([]);
  const loadTrans = async () => {
    try {
      const response = await API.get(`/transactions`);
      console.log(response);
      setTrans(response.data.data.transaction);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadTrans();
  }, []);

  console.log(trans);
  return (
    <div>
      <div className="hero-content">
        <h3>Incoming Transaction </h3>
      </div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Id</th>

            <th>Status</th>
            <th>Account Number</th>
            <th>Order Date</th>
            <th>TransferProof</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {trans.map((trx) => {
            console.log("trx", trx);
            return (
              <tr>
                <td>{trx.id}</td>
                <td>{trx.status}</td>
                <td>{trx.accountNumber}</td>
                <td>{trx.orderDate}</td>
                <td>{trx.transferProof}</td>
                <td>
                  <DropdownAction></DropdownAction>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TransactionList;
