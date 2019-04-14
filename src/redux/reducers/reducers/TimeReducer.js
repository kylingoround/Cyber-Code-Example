export default function (state = 0, action) {
    switch (action.type) {
        case "RANGE_CHANGE_ACT":
            return action.payload;
        default:
            return state
    }
}