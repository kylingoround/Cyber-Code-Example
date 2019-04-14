import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
// import DepartView from '../../components/departview.js'
import DepartView from "../../pages/DepartView"
import { DateChangeAction } from "../actions/DateChangeAction.js"
import { UpdateAction } from "../actions/UpdateAction.js"
import { UpdateCountAction } from "../actions/UpdateCountAction.js"
import { RangerAction } from "../actions/RangerAction.js"
import { TimeChangeAction } from "../actions/TimeChangeAction.js"
import { DeptCntAction } from "../actions/DeptCntAction.js"
import { StartEndDateAction } from "../actions/StartEndDateAction.js"

function matchDispatchToProps(dispatch){
  return bindActionCreators(
    {
      DateChangeAction: DateChangeAction,
      UpdateAction: UpdateAction,
      UpdateCountAction: UpdateCountAction,
      RangerAction: RangerAction,
      TimeChangeAction: TimeChangeAction,
      DeptCntAction: DeptCntAction,
      StartEndDateAction: StartEndDateAction
    },
    dispatch);
}

function mapStateToProps(state) {
  return {
      FirstReducer: state.FirstReducer,
      DateReducer: state.DateReducer,
      GeneralSearchReducer: state.GeneralSearchReducer
  };
}

const DepartViewCon = connect(
  mapStateToProps,
  matchDispatchToProps
)(DepartView)

export default DepartViewCon
