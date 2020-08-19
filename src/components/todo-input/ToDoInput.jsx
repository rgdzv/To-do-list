import React from 'react';
import PropTypes from 'prop-types';
import './ToDoInput.scss';

const ToDoInput = ({ value, onChange, onKeyPress }) => {
  return (
    <div className="toDoInput">
      <input 
        type="text" 
        value={value} 
        onChange={onChange} 
        onKeyPress={onKeyPress} 
        placeholder="Add a new task"
      />
    </div>
  )
}

ToDoInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
}

ToDoInput.defaultProps = {
  value: '',
  onChange: () => {},
  onKeyPress: () => {},
}

export default ToDoInput;