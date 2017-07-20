export const receiveHouses = (houses) => {
  // console.log('houses in action', houses)
  return {
    type: 'RECEIVE_HOUSES',
    houses
  }
}

export const receiveMembers = (members) => {

  return {
    type: 'RECEIVE_MEMBERS',
    members
  }
}
