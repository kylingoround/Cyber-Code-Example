var dates ={
    "start": {"date":"20181130", "cycle":"day"},
    "end": {"date":"20181230", "cycle":"day"},
    "dates": [
        {"date":"20181130", "cycle":"day"},
        {"date":"20181230", "cycle":"day"}
    ]
}

export default function (state = dates, action) {
    switch (action.type) {
        case 'START_END_ACT':
            console.log(dates)
            dates=action.payload;
            return dates;
        default:
            console.log(dates);
            return dates;
    }
}