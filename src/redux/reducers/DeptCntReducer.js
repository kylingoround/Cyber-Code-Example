export default function (state = 0, action) {
    switch (action.type) {
        case 'DEPT_CNT_ACT':
            let count = action.payload;
            return count;
        default:
            return state
    }
}
