import React from "react";
import { Link } from "react-router-dom";

const HostForm = () => {
  return (
    <div className="create-form">
      <div className="inputbox inputbox-full">
        <label htmlFor="name">
          Name
          <input
            required="required"
            className="inputs"
            type="text"
            name="text"
            class="inputs"
            placeholder="Give your exhibition a name"
          />
        </label>
      </div>

      <div className="inputbox inputbox-full">
        <label htmlFor="desc">
          description
          <textarea
            name="desc"
            id="desc"
            cols="30"
            rows="10"
            className="inputs"
            placeholder="Provide a detailed description of your exhibition"
          ></textarea>
        </label>
      </div>
      <div className="inputbox inputbox-full">
        <label htmlFor="">
          Join Fee In ETH
          <input
            required="required"
            className="inputs"
            type="text"
            name="text"
            class="inputs"
            placeholder="Enter the join fee in ETH"
          />
        </label>
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
  );
};

export default HostForm;
