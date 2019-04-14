import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { ButtonAction } from "../actions/ButtonAction.js"
import { InitAction } from "../actions/InitAction.js"
import { EdgeFilterAction } from "../actions/EdgeFilterAction.js"
import { StartEndDateAction } from "../actions/StartEndDateAction.js"
import { TimeRangeAction } from '../actions/TimeRangeAction';
import { SearchInputAction } from '../actions/SearchInpuAction';
// import Topnav from '../../components/topnav.js'
import TopNav from "../../components/_shared/TopNav"
import { UpGraphAction } from '../actions/UpGraphAction.js';
import {TimemaxAction} from "../actions/TimemaxAction.js"
// import GeneralSearchReducer from '../reducers/GeneralSearchReducer.js';
function matchDispatchToProps(dispatch){
  return bindActionCreators(
    {
      UpGraphAction: UpGraphAction,
      TimemaxAction: TimemaxAction,
      StartEndDateAction: StartEndDateAction,
      TimeRangeAction: TimeRangeAction,
      SearchInputAction: SearchInputAction
      
    }, 
    dispatch);
}

function mapStateToProps(state) {
  return {
    TimemaxReducer: state.TimemaxReducer,
    GeneralSearchReducer: state.GeneralSearchReducer
  };
}

const TopnavCon = connect(
  mapStateToProps,
  matchDispatchToProps
)(TopNav)

export default TopnavCon
