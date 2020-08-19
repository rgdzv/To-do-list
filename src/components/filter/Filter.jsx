import React from 'react';
import PropTypes from 'prop-types';
import './Filter.scss';
import Button from '../button/Button';

const FILTERS_BTN = [
  {
    id: 'all',
    text: 'All',
  },
  {
    id: 'active',
    text: 'Active',
  },
  {
    id: 'completed',
    text: 'Done',
  }
];

const Filter = ({ activeFilter, changeFilter, amount, dispatch }) => {
  return (
    <div className="toDoFilter">
      <div className="btn_filters">
        {FILTERS_BTN.map(({ id, text }) => (
          <Button 
            key={id} 
            onClick={() => dispatch(changeFilter(id))} 
            className= {activeFilter ? "btn btn--filters" : ''}
          >
            {text}
          </Button>
        ))}
      </div>
      <span 
        className="span span--filters"
      >
        {`${amount} Tasks left`}
      </span>
    </div>
  )
}

Filter.propTypes = {
  activeFilter: PropTypes.string,
  changeFilter: PropTypes.func,
  amount: PropTypes.number,
  dispatch: PropTypes.func,
}

Filter.defaultProps = {
  activeFilter: 'all',
  changeFilter: () => {},
  amount: 0,
  dispatch: () => {},
}

export default Filter;