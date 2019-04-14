let agg_graph=
{
    "nodes":[
    ],
    "links":[
    ]
}
let time_graphs=[]

let edge_filters={
    own: true,
    access: true,
    login: true,
    email: true,
    within: true
}

export default function (state = agg_graph, action) {

    switch (action.type) {
        case 'INIT_STATE':
            agg_graph=action.payload;
            for(var i=0; i<agg_graph.links.length; i++){
                agg_graph.links[i].bk_color=agg_graph.links[i].color;

            }
            for(var i=0; i<agg_graph.nodes.length; i++)
              agg_graph.nodes[i].color="#ffffff";
            return agg_graph;
        case "EDGE_FILTER_ACT":
            edge_filters=action.payload;
            for(var i=0; i<agg_graph.links.length; i++){
                if(agg_graph.links[i].time_flag===true) continue;
                for(var key in edge_filters){
                    if(agg_graph.links[i].label===key && edge_filters[key]===false){
                        agg_graph.links[i].color="rgba(255,255,255,0.5)";
                    }
                    if(agg_graph.links[i].label===key && edge_filters[key]===true){
                        agg_graph.links[i].color=agg_graph.links[i].bk_color;
                    }
                }
            }
            return agg_graph;
        case "UPDATE_GRAPH_ACT":
            let data=action.payload;
            // console.log(data);
            agg_graph=data.agg_graph;
            time_graphs=data.time_graphs;
            // console.log(agg_graph);
            // console.log(time_graphs);
            let first_graph=time_graphs[0].graph;

            for(var i=0; i<agg_graph.nodes.length; i++){

              if(agg_graph.nodes[i].label==="ip")
                  agg_graph.nodes[i].shape="dodecahedron";
              else if(agg_graph.nodes[i].label==="user")
                  agg_graph.nodes[i].shape="sphere";
              else if(agg_graph.nodes[i].label==="department")
                  agg_graph.nodes[i].shape="torus";
              else if(agg_graph.nodes[i].label==="shared folder")
                //   agg_graph.nodes[i].shape="cylinder";
                  agg_graph.nodes[i].shape="cone";
              else if(agg_graph.nodes[i].label==="subnet")
                  agg_graph.nodes[i].shape="torusgeometry";

                agg_graph.nodes[i].color="rgba(255,255,255,0.5)";
                for(var j=0; j<first_graph.nodes.length; j++){
                    if(agg_graph.nodes[i].id===first_graph.nodes[j].id){
                        if(first_graph.nodes[j].severity===0)
                            agg_graph.nodes[i].color="#2ecc40";
                        else if(first_graph.nodes[j].severity===1)
                            agg_graph.nodes[i].color="#ffdc00";
                        else if(first_graph.nodes[j].severity===2)
                            agg_graph.nodes[i].color="#ffb51b";
                        else if(first_graph.nodes[j].severity===3)
                            agg_graph.nodes[i].color="#ff4136";
                        else if(first_graph.nodes[j].severity===4)
                            agg_graph.nodes[i].color="#ff4136";

                        // if(first_graph.nodes[j].label==="ip")
                        //     agg_graph.nodes[i].shape="dodecahedron";
                        // else if(first_graph.nodes[j].label==="user")
                        //     agg_graph.nodes[i].shape="cone";
                        // else if(first_graph.nodes[j].label==="department")
                        //     agg_graph.nodes[i].shape="torus";
                        // else if(first_graph.nodes[j].label==="shared folder")
                        //     agg_graph.nodes[i].shape="cylinder";
                        // else if(first_graph.nodes[j].label==="subnet")
                        //     agg_graph.nodes[i].shape="torusgeometry";
                        agg_graph.nodes[i].bk_color=agg_graph.nodes[i].color;

                    }
                }
                // agg_graph.nodes[i].color="#FFFFFF";
            }

            for(var i=0; i<agg_graph.links.length; i++){
                agg_graph.links[i].time_flag=true;
                if(agg_graph.links[i].label==="own")
                    agg_graph.links[i].bk_color="green";
                else if(agg_graph.links[i].label==="access")
                    agg_graph.links[i].bk_color="yellow";
                else if(agg_graph.links[i].label==="within")
                    agg_graph.links[i].bk_color="orange";
                else if(agg_graph.links[i].label==="email")
                    agg_graph.links[i].bk_color="red";
                else if(agg_graph.links[i].label==="login")
                    agg_graph.links[i].bk_color="white";

                agg_graph.links[i].curvature=0.3;
                agg_graph.links[i].color="rgba(255,255,255,0.5)";
                for(var j=0; j<first_graph.links.length;j++){
                    if(agg_graph.links[i].id===first_graph.links[j].id){
                        if(first_graph.links[j].label==="own")
                            agg_graph.links[i].color="green";
                        else if(first_graph.links[j].label==="access")
                            agg_graph.links[i].color="yellow";
                        else if(first_graph.links[j].label==="within")
                            agg_graph.links[i].color="orange";
                        else if(first_graph.links[j].label==="email")
                            agg_graph.links[i].color="red";
                        else if(first_graph.links[j].label==="login")
                            agg_graph.links[i].color="white";
                        agg_graph.links[i].time_flag=false;
                    }

                }
            }

            return agg_graph;
        case "TIME_RANGE_ACT":
            let slider_val=action.payload;
            first_graph=time_graphs[slider_val].graph;
            for(var i=0; i<agg_graph.nodes.length; i++){
                agg_graph.nodes[i].color="rgba(255,255,255,0.5)";
                for(var j=0; j<first_graph.nodes.length; j++){
                    if(agg_graph.nodes[i].id===first_graph.nodes[j].id){
                        if(first_graph.nodes[j].severity===0)
                            agg_graph.nodes[i].color="#2ecc40";
                        else if(first_graph.nodes[j].severity===1)
                            agg_graph.nodes[i].color="#ffdc00";
                        else if(first_graph.nodes[j].severity===2)
                            agg_graph.nodes[i].color="#ffb51b";
                        else if(first_graph.nodes[j].severity===3)
                            agg_graph.nodes[i].color="#ff4136";
                        else if(first_graph.nodes[j].severity===4)
                            agg_graph.nodes[i].color="#ff4136";

                        if(first_graph.nodes[j].label==="ip")
                            agg_graph.nodes[i].shape="dodecahedron";
                        else if(first_graph.nodes[j].label==="user")
                            agg_graph.nodes[i].shape="cone";
                        else if(first_graph.nodes[j].label==="department")
                            agg_graph.nodes[i].shape="torus";
                        else if(first_graph.nodes[j].label==="shared folder")
                            agg_graph.nodes[i].shape="cylinder";
                        else if(first_graph.nodes[j].label==="subnet")
                            agg_graph.nodes[i].shape="torusgeometry";
                    }
                }
            }

            for(var i=0; i<agg_graph.links.length; i++){
                agg_graph.links[i].time_flag=true;
                // agg_graph.links[i].bk_color=agg_graph.links[i].color;
                agg_graph.links[i].curvature=0.3;
                agg_graph.links[i].color="rgba(255,255,255,0.5)";
                for(var j=0; j<first_graph.links.length;j++){
                    if(agg_graph.links[i].id===first_graph.links[j].id){
                        if(first_graph.links[j].label==="own")
                            agg_graph.links[i].color="green";
                        else if(first_graph.links[j].label==="access")
                            agg_graph.links[i].color="yellow";
                        else if(first_graph.links[j].label==="within")
                            agg_graph.links[i].color="orange";
                        else if(first_graph.links[j].label==="email")
                            agg_graph.links[i].color="red";
                        else if(first_graph.links[j].label==="login")
                            agg_graph.links[i].color="white";
                        agg_graph.links[i].time_flag=false;
                    }
                }
                for(var key in edge_filters){
                    if(agg_graph.links[i].label===key && edge_filters[key]==false)
                        agg_graph.links[i].color="rgba(255,255,255,0.5)";
                }
            }
            console.log(agg_graph);
            return agg_graph;
        default:
            return state
    }
}
