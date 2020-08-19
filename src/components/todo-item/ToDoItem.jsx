import React from 'react';
import close from './../../img/close.png';
import done from './../../img/done.png'
import undone from './../../img/undone.png'
import PropTypes from 'prop-types';
import './ToDoItem.scss';

const ToDoItem = ({ id, text, isCompleted, removeTask, completeTask, dispatch }) => {
  return (
    <li key={id} className="toDoItem">
      {isCompleted 
        ? <img 
            src={done} 
            alt={"done"} 
            className="done" 
            onClick={() => dispatch(completeTask(id))}
          /> 
        : <img 
            src={undone} 
            alt={"undone"} 
            className="undone" 
            onClick={() => dispatch(completeTask(id))}
          />
      }
      <div className="toDoBlock">
        <span 
          className={isCompleted 
            ? "span span--completed"
            : 'span span--uncompleted'
          }
        >
          {text}
        </span>
        <img 
          src={close} 
          alt={"close"} 
          className="remove" 
          onClick={() => dispatch(removeTask(id))}
        />
      </div>
    </li>
  )
}

ToDoItem.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
  dispatch: PropTypes.func,
}

ToDoItem.defaultProps = {
  id: 0,
  text: '',
  isCompleted: false,
  removeTask: () => {},
  completeTask: () => {},
  dispatch: () => {},
}

export default ToDoItem;