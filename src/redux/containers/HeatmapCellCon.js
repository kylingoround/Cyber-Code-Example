import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
// import HeatmapCell from '../../components/HeatmapCell.js'
import HeatmapCell from "../../components/depart/HeatmapCell"
import {NodeProfileShowAction} from "../../redux/actions/NodeProfileShowAction"
import {NodeProfileAction} from "../../redux/actions/NodeProfileAction"

function matchDispatchToProps(dispatch){
  return bindActionCreators(
    {
      NodeProfileShowAction: NodeProfileShowAction,
      NodeProfileAction: NodeProfileAction
    },
    dispatch);
}

function mapStateToProps(state) {
  return {
      FirstReducer: state.FirstReducer,
      TestReducer: state.TestReducer,
      DeptReducer: state.DeptReducer,
      GeneralSearchReducer: state.GeneralSearchReducer
  };
}

const HeatmapCellCon = connect(
  mapStateToProps,
  matchDispatchToProps
)(HeatmapCell)

export default HeatmapCellCon
