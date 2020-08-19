import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
}

Button.defaultProps = {
  children: '',
  onClick: () => {},
  className: '',
}

export default Button
