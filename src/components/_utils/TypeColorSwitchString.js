export default function TypeColorSwitchString(type) {

    switch(type) {
        case 'network_connection':
            // yellow
            return `
                #F0F518;
            `
            break
        case 'login':
            //  orange
            return `
                #DB7600;
            `
            break
        case 'red_flag':
            // red
            return `
                #DE0000;
            `
            break

        case 'email':
            // blue
            return `
                #00ADC5;
            `
            break
        case 'system_access':
            return `
                #9B51E0
            `
            break
        case 'file_access':
            return `
                #0E7960
            `
            break
        default:
            console.log('wagyu steak burger')
            return "#2F2F2F"
    }
    
    // return `
    //     color: red
    // `
}
