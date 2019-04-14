import React, {Component} from 'react'
import styled from 'styled-components'
import moment from 'moment'
import $ from 'jquery'

// TODO:
// - selected

import "d3-selection-multi";

// import getAjax from '../components/_utils/getAjax'

// import fake data
import jie_fake_list from '../data/jie/listView'
import ajax_fake_data from '../data/jie/listView_ajax'

import jie_fake_node from '../data/jie/infoView'

import Layout from '../components/_shared/Layout'
import PageIntro from '../components/_shared/PageInfo'
import NodeProfile from '../components/_shared/NodeProfile'

import AnomalyTable from '../components/list/AnomalyTable'
import MonitorChart from '../components/list/MonitorChart'

//////////////////////////////////////////////////

const ListViewContentPizza = styled.div`
    height: auto;
    max-height: 400px;
    overflow: visible
`

class ListView extends Component{
    state = {
        pageIntroContent: {
            title: 'LIST VIEW',
            timeRange: '03-13-2018',
            briefing: 'All Clear.'
        },
        showNodeProfile: false,
        listData: {},
        start: '20181114',
        end: '20181114',

        selectedEntityId: 'ERICLI',

        nodeData: jie_fake_node
    }

    handleClick = (props) => {
        this.setState(prevState => ({showNodeProfile: !prevState.showNodeProfile}))

        // console.log(props)
    }

    // update

    componentWillMount() {

        this.setState({listData: jie_fake_list})

        // let now = moment().format('YYYYMMDD');

        // let start = now
        // let end = now
        // let input = ''

        let url_info=this.props.GeneralSearchReducer;
        let start = url_info.start;
        let end = url_info.end;
        let depart = "";
        let entity = "";
        // alert(url_info.depart.length+";"+url_info.depart.length)
        if(url_info.depart.length!==0) depart=url_info.depart.join(';');
        if(url_info.entity.length!==0) entity=url_info.entity.join(';');

        // let url = "/listview?start_date="+start+"&end_date="+end+"&dept="+"&entity=";
        let url = "/listview?start_date="+start+"&end_date="+end+"&dept="+depart+"&entity="+entity;
        alert(url)
        $.ajax({
            url: url,
            type: "GET",
            success: function(data){

                 // for real
                // data = JSON.parse(data)
                // this.setState({listData: data})

                // for fake
                data=jie_fake_list;
                this.setState({
                    listData: jie_fake_list
                })
                // SearchInputAction
            }.bind(this),
            error: function(xhr, status, err){
                alert("Failed!")
            }
        });
    }

    callNodeUpdate = nodeId => {

        let start = this.state.start;
        let end = this.state.end;
        let entityId = nodeId;

        let url = "/infoview?entity="+entityId+"&start_date=" + start + "&end_date=" + end;

        alert(url)

        $.ajax({
        url: url,
        type: "GET",
        success: function(data){

            // this.setState({listData: ajax_fake_data})

            alert("Success!")
            data = JSON.parse(data)          // the real thing
            this.setState({
                nodeData: data,
                start: data.start_date,
                end: data.end_date
            })  // the real thing

        }.bind(this),
        error: function(xhr, status, err){
            alert("Failed!")
        }
        });
    }

    // update search bar info to state, from search bar
    // callback function for search bar child component

    // list update
    callUpdate = updateProps => {

        // let start = updateProps.start;
        // let end = updateProps.end;

        // let now = moment().format('YYYYMMDD');

        // // let input = updateProps.input;
        // if(!start) {
        //     start = now
        // }

        // if(!end) {
        //     end = now
        // }

        // let depart = updateProps.depart.join(';');
        // let entity = updateProps.entity.join(';');
        this.setState({listData: ajax_fake_data})

        let url_info=this.props.GeneralSearchReducer;
        let start = url_info.start;
        let end = url_info.end;
        let depart = "";
        let entity = "";
        if(url_info.depart.length!==0) depart=url_info.depart.join(';');
        if(url_info.entity.length!==0) entity=url_info.entity.join(';');
        let url = "/listview?start_date="+start+"&end_date="+end+"&dept="+depart+"&entity="+entity;
        alert(url)
        this.setState({
            start: start,
            end: end,
        })
        
        $.ajax({
        url: url,
        type: "GET",
        success: function(data){
            // alert("Success!")

            data = JSON.parse(data)
            this.setState({listData: data})

            // this.setState({listData: ajax_fake_data})
        }.bind(this),
        error: function(xhr, status, err){
            alert("Failed!")
        }
        });
    }

    render() {
        return (
            <Layout update={this.callUpdate}>
                <PageIntro
                    start={this.props.GeneralSearchReducer.start}
                    end={this.props.GeneralSearchReducer.end}
                >
                    {this.state.pageIntroContent}
                </PageIntro>

                <ListViewContentPizza>
                    <AnomalyTable

                        // data={this.entities}
                        data={this.state.listData.entities}
                        zuchuanFunc={this.handleClick}
                        // updateEntityIdFunc={this.updateSelectedEntity}
                        zuchuanNodeFunc={this.callNodeUpdate}

                    />
                    <MonitorChart data={this.state.listData.monitor_chart}/>
                    <NodeProfile

                        show={this.state.showNodeProfile}
                        zuchuanFunc={this.handleClick}
                        nodeId={this.state.selectedEntityId}
                        start={this.state.start}
                        end={this.state.end}

                        nodeData = {this.state.nodeData}
                    />
                </ListViewContentPizza>
            </Layout>
        )
    }
}

export default ListView;
