import { ADD_WORK_PHASE, GET_WORK_PHASES } from 'src/constants/actionTypes';
import * as api from 'src/api/index';

export const getWorkPhases = () => async (dispatch) => {
  try {
    const { data } = await api.fetchWorkPhases();
    dispatch({ type: GET_WORK_PHASES, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addWorkPhase = (workPhase) => async (dispatch) => {
  try {
    const { data } = await api.createWorkPhase(workPhase);
    dispatch({ type: ADD_WORK_PHASE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
 