import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
// import HeatMapGroup from '../../components/HeatMapGroup.js'
import HeatMapGroup from '../../components/depart/HeatMapGroup'

import { UpdateAction } from "../actions/UpdateAction.js"
import { UpdateCountAction } from "../actions/UpdateCountAction.js"
import { TimeChangeAction } from "../actions/TimeChangeAction.js"
import { DateChangeAction } from "../actions/DateChangeAction.js";
import { DeptCntAction } from "../actions/DeptCntAction.js"
import { StartEndDateAction } from "../actions/StartEndDateAction.js"
function matchDispatchToProps(dispatch){
  return bindActionCreators(
    {
      UpdateAction: UpdateAction,
      UpdateCountAction: UpdateCountAction,
      TimeChangeAction: TimeChangeAction,
      DateChangeAction: DateChangeAction,
      DeptCntAction: DeptCntAction,
      StartEndDateAction: StartEndDateAction
    },
    dispatch);
}

function mapStateToProps(state) {
  return {
      FirstReducer: state.FirstReducer,
      TestReducer: state.TestReducer,
      DeptReducer: state.DeptReducer,
      DeptCntReducer: state.DeptCntReducer,
      GeneralSearchReducer: state.GeneralSearchReducer
  };
}

const HeatmapGroupCon = connect(
  mapStateToProps,
  matchDispatchToProps
)(HeatMapGroup)

export default HeatmapGroupCon
