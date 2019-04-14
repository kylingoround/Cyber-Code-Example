import {combineReducers} from 'redux'
import FirstReducer from "./FirstReducer"
import TestReducer from "./TestReducer"
import DeptReducer from "./DeptReducer"
import TimeReducer from "./TimeReducer"
import DateReducer from "./DateReducer"
import TimeValReducer from "./TimeValReducer"
import DeptCntReducer from "./DeptCntReducer"
import StartEndDateReducer from "./StartEndDateReducer"

const allReducers = combineReducers({
    FirstReducer: FirstReducer,
    TestReducer: TestReducer,
    DeptReducer: DeptReducer,
    TimeReducer: TimeReducer,
    DateReducer: DateReducer,
    TimeValReducer: TimeValReducer,
    DeptCntReducer: DeptCntReducer,
    StartEndDateReducer: StartEndDateReducer
});

export default allReducers
