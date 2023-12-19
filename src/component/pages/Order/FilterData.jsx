/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ProductTable from "./AllOrder";


const FilterData = ({ data }) => {
  const [filteredData, setFilteredData] = useState("");

  function filteration(data, value) {
    const newarr = data.filter((item) => {
      if (!value) return true;
      if (
        item.name.toLowerCase().includes(value.toLowerCase())
      ) {
        return true;
      }
      return false;
    });
    return newarr;
  }

  return (
    <>
      <div className={"search"}>
        <span className={"searchLabel"}>Search: </span>
        <input
          className={"inputlabel"}
          type="text"
          value={filteredData}
          onChange={(e) => setFilteredData(e.target.value)}
        />
      </div>
      <ProductTable data={filteration(data, filteredData)} />
    </>
  );
};

export default FilterData;
