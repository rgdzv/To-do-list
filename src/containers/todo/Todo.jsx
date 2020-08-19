import React, { useState } from 'react';
import './Todo.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask, completeTask, changeFilter } from '../../redux/actions/action-creators';
import ToDoList from '../../components/todo-list/ToDoList';
import ToDoInput from '../../components/todo-input/ToDoInput';
import Filter from '../../components/filter/Filter';
import Button from '../../components/button/Button';

const ToDo = () => {
  
  const [inputText, inputChange] = useState('');
  const task = useSelector(({ task }) => task);
  const filters = useSelector(({ filters }) => filters);
  const dispatch = useDispatch();

  const inputOnChange = ({ target: { value } }) => {
    inputChange(value);
  };

  const appendTask = () => {
    dispatch(addTask((new Date()).getTime(), inputText, false));
    inputChange('')
  }

  const addTaskOnEnter = ({ key }) => {
    if (key === 'Enter') {
      dispatch(addTask((new Date()).getTime(), inputText, false));
      inputChange('')
    }
  }

  const filterTasks = (task, activeFilter) => {
    switch (activeFilter) {
      case 'completed':
        return task.filter(task => task.isCompleted);
        break;
      case 'active':
        return task.filter(task => !task.isCompleted);
        break;
      default:
        return task;
    }
  }

  const getActiveTasksCounter = task => task.filter(task => !task.isCompleted).length;
  const isTasksExist = task && task.length > 0;
  const filteredTasks = filterTasks(task, filters);
  const taskCounter = getActiveTasksCounter(task)

  return (
    <div className="toDo">
      <span className="span">TO-DO LIST</span>
      <ToDoInput 
        value={inputText} 
        onChange={inputOnChange} 
        onKeyPress={addTaskOnEnter}
      />
      {isTasksExist && 
        <Filter 
          activeFilter={filters} 
          changeFilter={changeFilter} 
          amount={taskCounter} 
          dispatch={dispatch}
        />
      }
      {isTasksExist && 
        <ToDoList 
          taskList={filteredTasks} 
          removeTask={removeTask} 
          completeTask={completeTask} 
          dispatch={dispatch}
        />
      }
      <div className="toDoButton">
        <Button 
          onClick={appendTask}
          className="btn"
        >
          +
        </Button>
      </div>
    </div>
  )
}

export default ToDo;
