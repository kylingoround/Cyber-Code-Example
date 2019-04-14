import moment from 'moment'
let default_input=
{
    // "start":moment().format("YYYYMMDD").toString(),
    // "end":moment().format("YYYYMMDD").toString(),
    "start": "",
    "end": "",
	"depart":[],
	"entity":[]
}
export default function (state = default_input, action) {
    switch (action.type) {
        case 'SEARCH_INPUT_ACT':
            let data=action.payload;
            default_input=data;
            return default_input;
        default:
            return state
    }
}