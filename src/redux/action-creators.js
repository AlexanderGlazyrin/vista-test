export const SET_PRESENT_LIST = 'SET_PRESENT_LIST';
export const SET_QUITTING_LIST = 'SET_QUITTING_LIST';
export const ADD_INFO = 'ADD_INFO';

const setPresentList = (payload) => {
  return {
    type: SET_PRESENT_LIST,
    payload
  }
}

export const loadPresentList = () => {
  return async (dispatch) => {
    const res = await (await fetch('http://localhost:3001/presentList')).json()
    dispatch(setPresentList(res))
  }
}

const setQuittingList = (payload) => {
  return {
    type: SET_QUITTING_LIST,
    payload
  }
}

export const loadQuittingList = () => {
  return async (dispatch) => {
    const res = await (await fetch('http://localhost:3001/quittingList')).json()
    dispatch(setQuittingList(res))
  }
}

export const addInfoAC = (payload) => {
  return {
    type: ADD_INFO,
    payload
  }
}
