import { useState } from "react";
import Dropdown from "./Dropdown.component";

const CatagoryBar = (props) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <Dropdown />
      <style jsx>{``}</style>
    </>
  );
};

export default CatagoryBar;
