let date={
    "start":"20181013",
    "end": "20181016"
}
export default function (state = "2018-10-13 to 2018-10-16", action) {
    switch (action.type) {
        case 'UPDATE_DATE_ACT':
        date=action.payload;
        let result=date.start+" to "+date.end;
        return result;
        default:
            return state
    }
}
