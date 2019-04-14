let store_data={

}

export default function (state = store_data, action) {
    switch (action.type) {
        case 'UPDATE_DEPT_ACT':
            console.log("entered");
            let data=action.payload;
            store_data=data.time_views;
            for(var x=0; x<store_data.length; x++){
                while(store_data[x].departments.length<12){
                  store_data[x].departments.push(
                    {
                      "id": "NA",
                      "num_alerts": 0,
                      "score": 0,
                      "severity": 0,
                      "display": "none",
                      "entities": []
                    }
                  )
                }
                for(var i=0; i<store_data[x].departments.length; i++){

                    let severity=store_data[x].departments[i].severity
                    let color;

                    let num = Math.floor(Math.random()*4)

                    switch(severity) {
                    // switch(num) {

                        case 0:
                          color='#009933'
                          break
                        case 1:
                          color='#ffcc00'
                          break
                        case 2:
                          color='#ff6600'
                          break
                        case 3:
                          color='#cc0000'
                          break
                        default:
                          console.log('bad severity depart');
                          // console.log(d)
                          color='rgb(255,255,255)'
                      }


                    store_data[x].departments[i].color=color;
                    // if(i%2==0) store_data[x].departments[i].display="block"
                    if(store_data[x].departments[i].display===undefined){
                      store_data[x].departments[i].display="block"
                    }

                    // for(var j=0; j<store_data[x].departments[i].entities.length; j++)
                    //     store_data[x].departments[i].entities[j]["score"]=Math.random()*100;
                }

            }
            console.log(store_data[0]);
            return store_data[0];
        case 'RANGER_ACT':
            let index=action.payload;
            return store_data[index];
        default:
            return state
    }
}
