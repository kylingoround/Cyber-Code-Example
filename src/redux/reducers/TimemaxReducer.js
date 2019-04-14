export default function (state = 0, action) {
    switch (action.type) {
        case 'TIME_MAX_ACT':
            let index=action.payload;
            return index;
        default:
            return state
    }
}