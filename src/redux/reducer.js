import {ADD_INFO, SET_PRESENT_LIST, SET_QUITTING_LIST} from './action-creators';

const initialState = {
  presentList: [],
  quittingList: [],
  patientInfo: null,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRESENT_LIST:
      return {
        ...state,
        presentList: action.payload,
      }
    case SET_QUITTING_LIST:
      return {
        ...state,
        quittingList: action.payload,
      }
    case ADD_INFO:
      return {
        ...state,
        patientInfo: action.payload
      }
    default:
      return state;
  }
}
