let count=0;

export default function (state = count, action) {
    switch (action.type) {
        case 'UPDATE_COUNT_ACT':
            console.log("entered");
            count=count+1;
            return count;
        case "RANGER_ACT":
            count=count+1;
            return count;
        default:
            return state
    }
}