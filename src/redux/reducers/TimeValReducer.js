export default function (state = 0, action) {
    switch (action.type) {
        case "RANGER_ACT":
            return action.payload;
        default:
            return state
    }
}