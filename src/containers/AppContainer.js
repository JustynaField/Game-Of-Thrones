import { connect } from 'react-redux';
import App from '../components/App/App';
import { receiveHouses } from '../actions/index';

const mapStateToProps = (state) => {
  console.log('state in container:', state)
  return {
    homes: state.HousesReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    displayHouses: (data) => {
      dispatch(receiveHouses(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
