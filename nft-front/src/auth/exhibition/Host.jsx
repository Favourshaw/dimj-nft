import React from "react";
import { LuImagePlus } from "react-icons/lu";
import { IconContext } from "react-icons";
import HostForm from "./HostForm";

const Host = () => {
  return (
    <div className="host">
      <div className="host-banner">
        <div className="host-banner-icon">
          <IconContext.Provider value={{ className: "hbc" }}>
            <LuImagePlus />
          </IconContext.Provider>
        </div>
        <div className="host-banner-avatar">
          <div>
            <IconContext.Provider value={{ className: "hbc" }}>
              <LuImagePlus />
            </IconContext.Provider>
          </div>
        </div>
      </div>

      <div className="host-form">
        <HostForm />
      </div>
    </div>
  );
};

export default Host;
