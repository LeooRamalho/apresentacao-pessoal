import {initLocalStorage} from '../../services/peopleService';

export const usePeople = () => {
  const people = initLocalStorage();
  return {people};
};
