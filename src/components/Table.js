import React, { useState } from "react";

const Table = ({ data }) => {
  const renderHeader = () => {
    const headerData = data[0];
    // console.log(headerData);
    if (headerData) {
      return (
        <tr>
          {Object.keys(headerData).map((data) => {
            return <td>{data}</td>;
          })}
        </tr>
      );
    } else {
      return;
    }
  };

  const renderData = () => {
    return data.map((elem) => (
      <tr>
        {Object.keys(elem).map((key) => {
          if (typeof elem[key] !== "object") {
            return <td>{elem[key]}</td>;
          } else {
            return <td>{Object.values(elem[key]).join(" ")}</td>;
          }
        })}
      </tr>
    ));
  };

  return (
    <div>
      <table>
        {renderHeader()}
        {renderData()}
      </table>
    </div>
  );
};

export default Table;
