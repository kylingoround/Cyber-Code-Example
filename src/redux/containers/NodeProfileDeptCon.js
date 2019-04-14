import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
// import Timeline from '../../components/timeline.js'
import Timeline from '../../components/depart/timeline'
import NodeProfileDept from "../../components/_shared/NodeProfileDept"
import {NodeProfileShowAction} from "../../redux/actions/NodeProfileShowAction"

function matchDispatchToProps(dispatch){
  return bindActionCreators(
    {
      NodeProfileShowAction: NodeProfileShowAction
    },
    dispatch);
}

function mapStateToProps(state) {
  return {
    NodeFileReducer:state.NodeFileReducer,
    NodeProfileShowReducer: state.NodeProfileShowReducer
  };
}

const NodeProfileDeptCon = connect(
  mapStateToProps,
  matchDispatchToProps
)(NodeProfileDept)

export default NodeProfileDeptCon
