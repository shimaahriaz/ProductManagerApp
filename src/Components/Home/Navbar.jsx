import React from "react";

const Navbar = ({setToken}) => {

  const logOutHandelar= () =>{
    setToken("")
    localStorage.clear();
  }
  return (
    <div className="text-center bg-dark text-white p-3">
      <h1>Navbar Shopping</h1>
      <button onClick={logOutHandelar} className="btn btn-outline-primary">Log Out</button>
    </div>
  );
};

export default Navbar;
