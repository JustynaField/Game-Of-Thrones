import { connect } from 'react-redux';
import App from '../components/App/App';
// import action

const mapStateToProps = (state) => {
  return {
    houses: state.houses
  }
}

export default connect(mapStateToProps)(App);
