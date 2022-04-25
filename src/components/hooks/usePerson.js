import {getPersonByID} from '../../services/peopleService';
export const usePerson = (id) => getPersonByID(id);
