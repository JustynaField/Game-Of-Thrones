const HousesReducer = (state=[], action) => {

  switch(action.type){
    case 'RECEIVE_HOUSES':
      // return [...state, Object.assign({}, action.houses)]
      return [...action.houses]
    default:
    return state
  }
}

export default HousesReducer;
