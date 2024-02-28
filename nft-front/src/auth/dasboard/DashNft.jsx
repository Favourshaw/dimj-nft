import React from "react";
import { DashNftData } from "../../utils/DashNftData";
import DashNftCard from "./DashNftCard";
import "../../components/pages/details.css";
import { useMediaQuery } from "react-responsive";

const DashNft = () => {
  const isExtraLarge = useMediaQuery({
    query: "(min-width: 1224px) ",
  });
  const isLarge = useMediaQuery({
    query: "(max-width: 1220px) (min-width: 1020px)",
  });
  const isMedium = useMediaQuery({
    query: " (min-width: 600px)",
  });
  const isSmall = useMediaQuery({ query: "(min-width: 600px) " });

  return (
    <>
      {isExtraLarge ? (
        <div className="dcat-cards">
          {DashNftData.slice(0, 3).map((_gaming) => (
            <DashNftCard gaming={_gaming} />
          ))}
        </div>
      ) : isLarge ? (
        <div className="dcat-cards">
          {DashNftData.slice(0, 3).map((_gaming) => (
            <DashNftCard gaming={_gaming} />
          ))}
        </div>
      ) : isMedium ? (
        <div className="dcat-cards">
          {DashNftData.slice(0, 2).map((_gaming) => (
            <DashNftCard gaming={_gaming} />
          ))}
        </div>
      ) : (
        <div className="dcat-cards">
          {DashNftData.slice(0, 1).map((_gaming) => (
            <DashNftCard gaming={_gaming} />
          ))}
        </div>
      )}
    </>
  );
};

export default DashNft;
