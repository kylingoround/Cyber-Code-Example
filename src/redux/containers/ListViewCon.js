import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { SearchInputAction } from '../actions/SearchInpuAction';
import ListView from "../../pages/ListView";

// import GeneralSearchReducer from '../reducers/GeneralSearchReducer.js';
function matchDispatchToProps(dispatch){
  return bindActionCreators(
    {
      SearchInputAction: SearchInputAction
    }, 
    dispatch);
}

function mapStateToProps(state) {
  return {
    GeneralSearchReducer: state.GeneralSearchReducer
  };
}

const ListViewCon = connect(
  mapStateToProps,
  matchDispatchToProps
)(ListView)

export default ListViewCon
