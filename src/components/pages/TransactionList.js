import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { API } from "../../config/api";

const TransactionList = () => {
  const [trans, setTrans] = useState([]);
  const loadTrans = async () => {
    try {
      const response = await API.get(`/transactions`);
      setTrans(response.data.data.transactions);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadTrans();
  }, []);

  return (
    <div>
      <>
        <div className="list-donation mb-3">
          <div className="list-donation-content">
            <div className="hero-content">
              <h3>Incoming Transaction </h3>
            </div>
            <div className="list-donation-date">
              <h3>{state.trans.userid}</h3>
            </div>
            <div className="list-donation-total">
              <p>awdawdaw</p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default TransactionList;
