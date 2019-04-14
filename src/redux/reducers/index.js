import {combineReducers} from 'redux'
import GraphReducer from "./GraphReducer"
import TimeReducer from "./TimeReducer"
import TimemaxReducer from "./TimemaxReducer"
import StartEndDateReducer from "./StartEndDateReducer"
import GeneralSearchReducer from "./GeneralSearchReducer"
import FirstReducer from "./FirstReducer"
import TestReducer from "./TestReducer"
import DeptReducer from "./DeptReducer"
import DateReducer from "./DateReducer"
import TimeValReducer from "./TimeValReducer"
import DeptCntReducer from "./DeptCntReducer"
import NodeProfileShowReducer from "./NodeProfileShowReducer"
import NodeFileReducer from "./NodeFileReducer"

const allReducers = combineReducers({
  GraphReducer: GraphReducer,
  TimeReducer: TimeReducer,
  TimemaxReducer: TimemaxReducer,
  StartEndDateReducer: StartEndDateReducer,
  GeneralSearchReducer: GeneralSearchReducer,
  FirstReducer: FirstReducer,
  TestReducer: TestReducer,
  DeptReducer: DeptReducer,
  DateReducer: DateReducer,
  TimeValReducer: TimeValReducer,
  DeptCntReducer: DeptCntReducer,
  NodeProfileShowReducer: NodeProfileShowReducer,
  NodeFileReducer: NodeFileReducer 
});

export default allReducers
