import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="container"></div>
      <h1>Trang này không tồn tại, hãy quay trở lại trang mua sắm<Link to="/products">tại đây</Link></h1>
    </>
  );
};

export default NotFound;
