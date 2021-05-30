import React, { useContext, useState } from "react";
import { API } from "../../config/api";
import { useParams } from "react-router-dom";

import { UserContext } from "../../contexts/userContext";

function BuyModal({ show, handleClose }) {
  const params = useParams();
  const { id } = params;
  const [, dispatch] = useContext(UserContext);

  const [form, setForm] = useState({
    accountNumber: "",
    transferProof: null,
  });

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      const formData = new FormData();
      formData.set("accNumber", form.accNumber);
      formData.append(
        "imageFile",
        form.transferProof[0],
        form.transferProof[0].fullName
      );

      await API.post(`/transaction/${id}`, formData, config);

      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  if (!show) return null;
  return (
    <>
      <div className="modal-content" onClick={handleClose}></div>
      <div className="modal1">
        <div className="title-modal1">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className="form-modal1">
              <input
                type="number"
                name="accountNumber"
                placeholder="Input Your Account Number"
                className="input-modal1"
                onChange={(e) => onChange(e)}
              ></input>

              <div
                className="img-proof"
                style={{
                  marginBottom: "20px",
                }}
              >
                <input
                  className="input-modal1"
                  type="file"
                  id="add-thumb"
                  name="transferProof"
                  onChange={(e) => onChange(e)}
                  hidden
                />
                <label
                  className="hero-link"
                  for="add-thumb"
                  id="label-thumb"
                  style={{
                    marginRight: "50px",
                    width: "50%",
                  }}
                >
                  Attach Thumbnail
                </label>
                <div className="">
                  <p
                    style={{
                      width: "70%",
                    }}
                  >
                    *transfers can be made to cinema accounts
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              style={{ textAlign: "center" }}
              className="modal-sample-link"
            >
              Pay
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default BuyModal;
