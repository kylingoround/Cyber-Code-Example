let init_state=false

export default function (state = init_state, action) {
    switch (action.type) {
        case 'NODE_PROFILE_SHOW_ACT':

            init_state=!init_state;
            console.log(init_state);
            return init_state;
        default:
            return state
    }
}