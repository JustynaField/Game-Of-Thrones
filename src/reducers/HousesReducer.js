const HousesReducer = (state=[], action) => {

  switch(action.type){
    case 'RECEIVE_HOUSES':
      // return [...state, Object.assign({}, action.houses)]
      return [...action.houses]

    case 'RECEIVE_MEMBERS':
      return [...action.members]

    default:
    return state
  }
}

export default HousesReducer;
