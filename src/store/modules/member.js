import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import axios from 'axios';

/*
development: http://localhost:8000/api
production: http://fe-star.herokuapp.com/api
*/
axios.defaults.baseURL = 'http://fe-star.herokuapp.com/api';

const FIND = 'member/FIND';
const CREATE = 'member/CREATE';
const UPDATE = 'member/UPDATE';
const REMOVE = 'member/REMOVE';

export const find = createAction(FIND, () => axios.get(`/member`));
export const create = createAction(CREATE, data => axios.post(`/member`, data));
export const update = createAction(UPDATE, (id, data) => axios.put(`/member/${id}`, data));
export const remove = createAction(REMOVE, id => axios.delete(`/member/${id}`));

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
