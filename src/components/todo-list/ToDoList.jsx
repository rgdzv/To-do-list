import React from 'react';
import ToDoItem from '../todo-item/ToDoItem';
import PropTypes from 'prop-types';
import './ToDoList.scss'

const ToDoList = ({ taskList, removeTask, completeTask, dispatch }) => {
  return (
    <ul className="toDoList">
      {taskList.map(({ id, text, isCompleted }) => (
        <ToDoItem 
          id={id} 
          key={id} 
          text={text} 
          isCompleted={isCompleted} 
          removeTask={removeTask} 
          completeTask={completeTask}
          dispatch={dispatch}
        />
      ))}
    </ul>
  )
}

ToDoList.propTypes = {
  taskList: PropTypes.array,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
  dispatch: PropTypes.func,
}

ToDoList.defaultProps = {
  taskList: [],
  removeTask: () => {},
  completeTask: () => {},
  dispatch: () => {},
}

export default ToDoList;