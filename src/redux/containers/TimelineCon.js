import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
// import Timeline from '../../components/timeline.js'
import Timeline from '../../components/depart/timeline'

import { RangerAction } from "../actions/RangerAction.js"

function matchDispatchToProps(dispatch){
  return bindActionCreators(
    {
        RangerAction: RangerAction
    },
    dispatch);
}

function mapStateToProps(state) {
  return {
      FirstReducer: state.FirstReducer,
      TimeReducer: state.TimeReducer,
      TimeValReducer: state.TimeValReducer,
      StartEndDateReducer: state.StartEndDateReducer
  };
}

const TimelineCon = connect(
  mapStateToProps,
  matchDispatchToProps
)(Timeline)

export default TimelineCon
