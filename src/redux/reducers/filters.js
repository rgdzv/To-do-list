import { CHANGE_FILTER } from '../constants/constants';

const BASE_FILTER = 'all';

export const filters = (state = BASE_FILTER, { type, activeFilter }) => {
  switch (type) {
    case CHANGE_FILTER:
      return activeFilter;
      break;
    default:
      return state;
  }
}