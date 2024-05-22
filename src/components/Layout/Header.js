import React, { useState } from "react";
import { images } from "../../actions/customFn";
import Dropdown from "react-bootstrap/Dropdown";
import FlagIcon from "./FlagIcon";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [countries] = useState([
    { code: "us", title: "Eng" },
    { code: "ua", title: "Ukr" },
    { code: "pl", title: "Pol" },
  ]);
  const [toggleContents, setToggleContents] = useState(
    <>
      <FlagIcon code={countries[0].code} /> {countries[0].title}
    </>
  );
  const [selectedCountry, setSelectedCountry] = useState();
  const [selected, setSelected] = useState({});
  const handleSelect = (eventKey, event) => {
    const { code, title } = countries.find(({ code }) => eventKey === code);
    setSelectedCountry(eventKey);
    setToggleContents(
      <>
        <FlagIcon code={code} /> {title}
      </>
    );
    setSelected({ eventKey, value: event.target.value });
  };

  const [currency] = useState([
    { title: "Inr" },
    { title: "Gbp" },
    { title: "New" },
  ]);
  const [toggleContentscurrency, setToggleContentscurrency] = useState(
    <>{currency[0].title}</>
  );
  const [Currencyselected, CurrencysetSelected] = useState({});
  const handleSelectCurrency = (eventKey, event) => {
    const { title } = currency.find(({ code }) => eventKey === code);
    CurrencysetSelected(eventKey);
    setToggleContentscurrency(<>{title}</>);
    CurrencysetSelected({ eventKey, value: event.target.value });
  };

  return (
    <div className="header-section-main">
      <div className="container">
        <div className="header-inner-dis">
          <div className="logo-img">
            {/* <img src={images["logo.svg"]} alt="" /> */}
            Header
          </div>

          <div className="header-all-nav">
            
            <div className="drop-down-main"></div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
