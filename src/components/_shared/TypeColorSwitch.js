export default function TypeColorSwitch(type) {

    switch(type) {
        case 'network_connection':
            // yellow
            return `
                color: #F0F518;
            `
            break
        case 'login':
            //  orange
            return `
                color: #DB7600;
            `
            break
        case 'red_flag':
            // red
            return `
                color: #DE0000;
            `
            break

        case 'email':
            // blue
            return `
                color: #00ADC5;
            `
            break
        case 'system_access':
            return `
                color: #9B51E0
            `
            break
        case 'file_access':
            return `
                color: #0E7960
            `
            break
        default:
            console.log('wagyu steak')
    }
    
    // return `
    //     color: red
    // `
}
