import React, {Component} from 'react'
import styled from 'styled-components'

import Layout from '../components/_shared/Layout'
import PageIntro from '../components/_shared/PageInfo'
// import NodeProfileDept from '../components/_shared/NodeProfileDept'
import NodeProfileDeptCon from "../redux/containers/NodeProfileDeptCon"
import TimelineCon from '../redux/containers/TimelineCon'

import HeatmapCellCon from '../redux/containers/HeatmapCellCon'
import HeatmapGroupCon from '../redux/containers/HeatmapGroupCon'
import test_data from "./data";
import jie_fake_node from '../data/jie/infoView'
import info_new from '../data/jie/infoViewUpdate'

import $ from 'jquery';

const ListViewContentPizza = styled.div`
    height: auto;
    max-height: 400px;
    overflow: visible
`

const PageTitle = styled.h1`
  font-family: 'IBM PLex Mono';
  margin-left: 2%;
  margin-bottom: 5px
`

const PageText = styled.p`
`
let divStyles = {
    'margin-top': '2%',
    'margin-bottom': '1%'
  }
  
  let textStyles = {
    // 'margin-top': '0',
    'margin-bottom': '5px',
    'margin-left': '2%',
    'font-family': 'IBM Plex Mono'
    // 'margin-top': '2%,
  }

class DepartView extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      id: 'departGroup',
      data: []
    }
  }
    state = {
        pageIntroContent: {
            title: 'DEPART VIEW',
            timeRange: '03-13-2018',
            briefing: 'All Clear.'
        },
        showNodeProfile: false,
        departData: {}
    }
    handleClick = () => {
        this.setState(prevState => ({showNodeProfile: !prevState.showNodeProfile}))
    }

    callUpdate = updateProps => {
        // $("#depart_output").val(0);
        // $("input[type='range']").next("output").val(0);
        // console.log("input[type='range']: ", $("#depart_output").val());
        // alert(JSON.stringify($("input[type='range']")))
        //Uncomment to make it locally
        // alert("test");
        let data=test_data;
        this.props.UpdateAction(data);
        let cycles=data.time_views.length-1;
        this.props.TimeChangeAction(cycles);
        this.props.UpdateCountAction();
        
        this.props.UpdateAction(test_data);
        this.props.RangerAction(0);
        this.props.UpdateCountAction();
        
        let dates=[];
        for(var i=0; i<data.time_views.length; i++){
           let item={}
           item["date"]=data.time_views[i]["date"]
           item["cycle"]=data.time_views[i]["cycle"]
           dates.push(item)
        }
        let start_date={
           "date": data.time_views[0]["date"],
           "cycle": data.time_views[0]["cycle"]
        }
        let end_date={
           "date": data.time_views[data.time_views.length-1]["date"],
           "cycle": data.time_views[data.time_views.length-1]["cycle"]
        }
        let final={}
        final["start"]=start_date
        final["end"]=end_date;
        final["dates"]=dates;
        this.props.StartEndDateAction(final)

          // alert(url);
          //Uncomment to make it to real production
            //Start with real api
        //  let url_info=this.props.GeneralSearchReducer;
        //  let start = url_info.start;
        //  let end = url_info.end;
        //  let depart = "";
        //  let entity = "";
        //  // alert(url_info.depart.length+";"+url_info.depart.length)
        //  if(url_info.depart.length!==0) depart=url_info.depart.join(';');
        //  if(url_info.entity.length!==0) entity=url_info.entity.join(';');
        //  let url = "/aggview?start_date="+start+"&end_date="+end+"&dept="+depart+"&entity="+entity;
        //  alert(url)
        //   $.ajax({
        //     url: url,
        //     type: "GET",
        //     success: function(data){
        //         alert("Success: "+ url);
        //         data=JSON.parse(data);
        //         let new_date={
        //           "start": data.start_date,
        //           "end": data.end_date
        //         }
        //         this.props.DateChangeAction(new_date);
        //         this.props.UpdateAction(data);
        //         let cycles=data.time_views.length-1;
        //         this.props.TimeChangeAction(cycles);
        //         this.props.UpdateCountAction();
        //         this.props.DeptCntAction(data.time_views[0].departments.length)

        //         let dates=[];
        //         for(var i=0; i<data.time_views.length; i++){
        //            let item={}
        //            item["date"]=data.time_views[i]["date"]
        //            item["cycle"]=data.time_views[i]["cycle"]
        //            dates.push(item)
        //         }
        //         let start_date={
        //            "date": data.time_views[0]["date"],
        //            "cycle": data.time_views[0]["cycle"]
        //         }
        //         let end_date={
        //            "date": data.time_views[data.time_views.length-1]["date"],
        //            "cycle": data.time_views[data.time_views.length-1]["cycle"]
        //         }
        //         let final={}
        //         final["start"]=start_date
        //         final["end"]=end_date;
        //         final["dates"]=dates;
        //         this.props.StartEndDateAction(final)
        //     }.bind(this),
        //     error: function(xhr, status, err){

        //       alert("Failed!")
        //     }
        //   });
      }

    render() {
        return(
            <Layout update={this.callUpdate}>
                <div className='layoutPizza'>
                    <div style={divStyles}>
                    <h2 style={textStyles}>DEPARTMENT MAP</h2>
                    <p style={textStyles}>{this.props.DateReducer}</p>
                    <p style={textStyles}></p>
                    </div>
                    <HeatmapGroupCon 
                        dataMap={this.props.FirstReducer}
                        // update={this.callUpdate}

                        // // this.props.update
                    >DepartPizza</HeatmapGroupCon>
                    <TimelineCon/>
                    <ListViewContentPizza>
                        <NodeProfileDeptCon

                            // show={this.state.showNodeProfile}
                            // zuchuanFunc={this.handleClick}
                            // nodeId={this.state.selectedEntityId}
                            // start={this.state.start}
                            // end={this.state.end}

                            // nodeData = {this.state.nodeData}
                        />
                    </ListViewContentPizza>
                </div>

            </Layout>
        )
    }
}

export default DepartView;