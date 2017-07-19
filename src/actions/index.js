export const receiveHouses = (houses) => {
  // console.log('houses in action', houses)
  return {
    type: 'RECEIVE_HOUSES',
    houses
  }
}
