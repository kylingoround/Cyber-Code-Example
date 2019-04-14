import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { ButtonAction } from "../actions/ButtonAction.js"
import { InitAction } from "../actions/InitAction.js"
import { EdgeFilterAction } from "../actions/EdgeFilterAction.js"

// import Graph from '../../components/Graph.js'
import GraphView from '../../pages/GraphView.js'
import { UpGraphAction } from '../actions/UpGraphAction.js';
import { TimemaxAction } from '../actions/TimemaxAction.js';
import { TimeRangeAction } from '../actions/TimeRangeAction';
import { StartEndDateAction } from "../actions/StartEndDateAction.js"
import StartEndDateReducer from '../reducers/StartEndDateReducer.js';

function matchDispatchToProps(dispatch){
  return bindActionCreators(
    {
        ButtonAction: ButtonAction,
        InitAction: InitAction,
        EdgeFilterAction: EdgeFilterAction,
        UpGraphAction: UpGraphAction,
        TimemaxAction: TimemaxAction,
        TimeRangeAction: TimeRangeAction,
        StartEndDateAction: StartEndDateAction
    }, 
    dispatch);
}

function mapStateToProps(state) {
  return {
      GraphReducer: state.GraphReducer,
      TimeReducer: state.TimeReducer,
      TimemaxReducer: state.TimemaxReducer,
      StartEndDateReducer: state.StartEndDateReducer,
      GeneralSearchReducer: state.GeneralSearchReducer
  };
}

const GraphCon = connect(
  mapStateToProps,
  matchDispatchToProps
)(GraphView)

export default GraphCon
