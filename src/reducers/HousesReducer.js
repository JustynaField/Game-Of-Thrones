const HousesReducer = (state=[], action) => {

  switch(action.type){
    case 'RECEIVE_HOUSES':
// console.log('state in reducer:', state)
      console.log([...state, Object.assign({}, action.houses)])
        console.log(action.houses)
      // return [...state, Object.assign({}, action.houses)]
      return [...action.houses]
    default:
    return state
  }
}

export default HousesReducer;
