import { ADD_TOOL, GET_TOOLS } from 'src/constants/actionTypes';
import * as api from 'src/api/index';

export const getTools = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTools();
    dispatch({ type: GET_TOOLS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addTool = (tool) => async (dispatch) => {
  try {
    const { data } = await api.createTool(tool);
    dispatch({ type: ADD_TOOL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
