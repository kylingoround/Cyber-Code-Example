export default function (state = 0, action) {
    switch (action.type) {
        case 'TIME_RANGE_ACT':
            let index=action.payload;
            return index;
        case "RANGE_CHANGE_ACT":
            return action.payload;
        default:
            return state
    }
}