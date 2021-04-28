import React from "react";
import PropTypes from "prop-types";

export const Header = ({ titulo }) => {
  return (
    <nav className="nav-wrapper ligth-blue darken-2">
      <a href="#!" className="brand-logo">
        {titulo}
      </a>
    </nav>
  );
};

Header.propTypes = {
  titulo: PropTypes.string.isRequired,
};
