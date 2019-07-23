import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import axios from 'axios';

/*
development: http://localhost:8000/
production: http://fe-star.herokuapp.com/
*/
console.log(process.env.BASE_URL);
axios.defaults.baseURL = process.env.BASE_URL;

const FIND = 'member/FIND';
const CREATE = 'member/CREATE';
const UPDATE = 'member/UPDATE';
const REMOVE = 'member/REMOVE';

export const find = createAction(FIND, () => axios.get(`/api/member`));
export const create = createAction(CREATE, data => axios.post(`/api/member`, data));
export const update = createAction(UPDATE, (id, data) => axios.put(`/api/member/${id}`, data));
export const remove = createAction(REMOVE, id => axios.delete(`/api/member/${id}`));

const init = {
  list: []
};

export default handleActions({
  ...pender({
    type: FIND,
    onSuccess: (state, action) => {
      console.log('FIND');
      const { payload: { data } } = action;
      
      return state = {
        list: data
      };
    }
  }),
  ...pender({
    type: CREATE,
    onSuccess: (state, action) => {
      console.log('CREATE');
      return state;
    }
  }),
  ...pender({
    type: UPDATE,
    onSuccess: (state, action) => {
      console.log('UPDATE');
      return state;
    }
  }),
  ...pender({
    type: REMOVE,
    onSuccess: (state, action) => {
      console.log('REMOVE');
      return state;
    }
  })
}, init);
