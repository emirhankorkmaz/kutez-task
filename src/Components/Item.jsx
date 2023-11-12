import React from "react";
import AddBasket from "../contents/icons/plus.png";

const Item = ({ data, bal, index }) => {
  const Headers = [
    "Engagement Ring 1",
    "Engagement Ring 2",
    "Engagement Ring 3",
    "Engagement Ring 4",
    "Engagement Ring 5",
    "Engagement Ring 6",
    "Engagement Ring 7",
    "Engagement Ring 8",
    "Pendants 1",
    "Pendants 2",
    "Pendants 3",
    "Pendants 4",
    "Pendants 5",
    "Pendants 6",
    "Pendants 7",
    "Pendants 8",
    "Bridal set 1",
    "Bridal set 2",
    "Bridal set 3",
    "Bridal set 4",
  ];

  return (
    <div className="prodItem">
      <div className="imageBox">
        <img src={data} alt="" />
      </div>
      <div>
        <p className="prodName">{Headers[index]}</p>
        <p className="prodBalance">${bal[index]}.00 USD</p>
      </div>
    </div>
  );
};

export default Item;
