import React from "react";
import { BsCloudUpload } from "react-icons/bs";
import "../../assets/auth/css/create.css";
import { useState } from "react";
import { IconContext } from "react-icons";

import { Link } from "react-router-dom";

const CreateForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedName, setSelectedName] = useState("");
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setSelectedName(file.name);
  };
  return (
    <div className="create-form-container">
      <div className="create-form-upload">
        <div className="file-upload">
          <IconContext.Provider value={{ className: "upload-icon" }}>
            <BsCloudUpload />
          </IconContext.Provider>
          <h3>{selectedName || "Click box to upload"}</h3>
          <p>Maximun file size 10mb</p>
          <input type="file" onChange={handleFileChange} />
        </div>
      </div>

      <div className="create-form">
        <div className="inputbox inputbox-full">
          <input
            required="required"
            className="inputs"
            type="text"
            name="text"
            class="inputs"
            placeholder="Type here..."
          />
        </div>
        <div className="inputbox inputbox-half">
          <select name="cat" id="cat-select" className="inputs">
            <option value="">--Choose a category--</option>
            <option value="gg">goat</option>
          </select>
        </div>
        <div className="inputbox inputbox-half">
          <input
            required="required"
            className="inputs"
            type="text"
            name="text"
            class="inputs"
            placeholder="Type here..."
          />
        </div>
        <div className="inputbox inputbox-full">
          <textarea
            name="desc"
            id=""
            cols="30"
            rows="10"
            className="inputs"
            placeholder="description"
          ></textarea>
        </div>
        <div className="inputbox">
          <div>
            <Link class="btn-wave">
              <span class="wave-text">Create</span>
              <div class="wave"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
