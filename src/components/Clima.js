import React from "react";
import PropTypes from "prop-types";

export const Clima = ({ resultado }) => {
  const { name, main } = resultado;
  if (!name) return null;

  // grados kelvin

  const kelvin = 273.15;

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>El Clima de {name}</h2>
        <p className="temperatura">
          {parseFloat(main.temp - kelvin, 10).toFixed(2)} <span> &#x2103;</span>
        </p>

        <p>
          Temperatura Máxima {parseFloat(main.temp_max - kelvin, 10).toFixed(2)}{" "}
          <span> &#x2103;</span>
        </p>

        <p>
          Temperatura Mínima {parseFloat(main.temp_min - kelvin, 10).toFixed(2)}{" "}
          <span> &#x2103;</span>
        </p>
      </div>
    </div>
  );
};

Clima.propTypes = {
  resultado: PropTypes.object.isRequired,
};
