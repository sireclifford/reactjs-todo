import React from "react";

const Header = () => {
  const headerStyle = {
    fontSize: "6rem",
    fontWeight: "600",
    marginBottom: "2rem",
    lineHeight: "1em",
    color: "#ececec",
    textTransform: "lowercase",
    textAlign: "center",
  };

  const h1Style = {
    fontSize: "6rem",
    fontWeight: "600",
    marginBottom: "2rem",
    lineHeight: "1em",
    color: "#ececec",
    textTransform: "lowercase",
    textAlign: "center",
  };
  return (
    <header style={headerStyle}>
      <h1 style={h1Style}>todos</h1>
    </header>
  );
};

export default Header;
