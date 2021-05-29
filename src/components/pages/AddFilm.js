import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { API } from "../../config/api";

import { Form, Image, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AddFilm = () => {
  const router = useHistory();
  const [preview, setPreview] = useState();
  const initialState = {
    categoryid: "",
    tittle: "",
    price: "",
    filmURL: "",
    description: "",
    thumbnail: "",
  };

  const [form, setFormData] = useState(initialState);
  const clearState = () => {
    setFormData({ ...initialState });
  };
  useEffect(() => {
    if (!form.thumbnail) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(form.thumbnail);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [form.thumbnail]);

  const onChange = (e) => {
    setFormData({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files[0] : e.target.value,
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
      formData.set("tittle", form.tittle);
      formData.set("price", form.price);
      formData.set("filmURL", form.filmURL);
      formData.set("description", form.description);
      formData.append("thumbnail", form.thumbnail, form.thumbnail.name);
      formData.set("categoryid", form.categoryid);
      formData.set("userid", form.userid);

      await API.post(`/film`, formData, config);

      clearState();
      router.push("/addfilm");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="hero-content">
          <h3>Add Films</h3>
        </div>

        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <Form.Control
            onChange={(e) => onChange(e)}
            className="input-modal1"
            type="text"
            placeholder="Title"
            name="tittle"
          />
          <div>
            {form.thumbnail && (
              <Image
                style={{ maxWidth: "300px", height: "230px" }}
                src={preview}
              />
            )}
          </div>

          <input
            onChange={(e) => onChange(e)}
            type="file"
            id="add-thumb"
            name="thumbnail"
            hidden
          />
          <label for="add-thumb" id="label-thumb" className="hero-link">
            Attach Thumbnail
          </label>

          <br />
          <Form.Control
            onChange={(e) => onChange(e)}
            className="input-modal1"
            type="number"
            placeholder="Price"
            name="price"
          />
          <br />
          <Form.Control
            onChange={(e) => onChange(e)}
            className="input-modal1"
            type="text"
            placeholder="Trailer Link"
            name="filmURL"
          />
          <br />
          <textarea
            onChange={(e) => onChange(e)}
            className="input-modal1"
            row={300}
            cols={145}
            placeholder="description"
            name="description"
          />
          <br />

          <br></br>
          <Form.Control
            onChange={(e) => onChange(e)}
            className="input-modal1"
            type="text"
            placeholder="Categoryid"
            name="categoryid"
          />

          <br />
          <Form.Control
            onChange={(e) => onChange(e)}
            className="input-modal1"
            type="text"
            placeholder="UserId"
            name="userid"
          />
          <div className="btn-container pb-3 float-right">
            <Button className="hero-link" type="submit" variant="danger">
              Publish Film
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddFilm;
