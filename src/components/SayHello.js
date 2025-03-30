import React from 'react';
import PropTypes from 'prop-types';

export default function SayHello({ name, greeting }) {
  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>{greeting}</p>
    </div>
  );
}

SayHello.propTypes = {
    name: PropTypes.string.isRequired,
    greeting: PropTypes.string.isRequired,
};
