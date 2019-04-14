import React, {Component} from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import $ from 'jquery';

const TopnavPizza = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content:space-round;
    width: 100%;
    padding-top: 15px;
    ${'' /* overflow: hidden; */}
`

const NavPizza = styled.div`
`

const LogoPizza = styled.div`
    margin-left: 35px;
    margin-right: 35px;
    font-size: 0.8em;
    font-family: 'IBM Plex Mono';
    color: #00ADC5;
`

const SearchPizza = styled.div`
    margin-left: 180px;
`

const SearchInput = styled.input`
    padding-left: 5px;
    border: none;
    margin-left: 5px;
    margin-right: 5px;
    background-color: #2F2F2F;
    color: #696969;
`

const SearchBtn = styled.button`
    padding: 0;
    border: none;
    background: none;
    color: #696969;
    font-family: 'IBM Plex Mono'
`

class Topnav extends Component {
    constructor(props) {
        super(props);
        this.state = {
          searchInput: "",
          entityEntity: "",
          startDateShow: "",
          endDateShow: "",
          startDate: "",
          endDate: "",
          realStart: "",
          realEnd: ""
        };
      }
      handleInput(value){
        this.setState({
          searchInput: value
        })
      }
      handleEntity(value){
        this.setState({
          searchEntity: value
        })
      }
      handleStartChange(date) {
        var format_date=moment(date).format("YYYYMMDD");
        this.setState({
            startDate: date,
            realStart: format_date
          });
      }
      handleEndChange(date) {
        let format_date=moment(date).format("YYYYMMDD");
        this.setState({
          endDate: date,
          realEnd: format_date
        });
      }
      searchClick(){
        let url="";
         let date_data={"start": this.state.realStart, "end": this.state.realEnd}
        //  console.log(this.props);
         this.props.DateChangeAction(date_data);
        ///aggview?start_date=xxx&end_date=xxx&dept=xxx,yyy&entity=xxx,yyy
        if(this.state.searchInput==="" && this.state.searchEntity==="")
          url = "/aggview?start_date="+this.state.realStart+"&end_date="+this.state.realEnd;
        else {
          url = "/aggview?start_date="+this.state.realStart+"&end_date="+this.state.realEnd+"&dept="+this.state.searchInput+"&entity="+this.state.searchEntity;
        }

        //Uncomment to make it locally
        // alert("test");
        // let data=test_data;
        // this.props.UpdateAction(data);
        // let cycles=data.time_views.length-1;
        // this.props.TimeChangeAction(cycles);
        // this.props.UpdateCountAction();
        //
        // this.props.UpdateAction(test_data);
        // this.props.RangerAction(0);
        // this.props.UpdateCountAction();
        // 
        // let dates=[];
        // for(var i=0; i<data.time_views.length; i++){
        //    let item={}
        //    item["date"]=data.time_views[i]["date"]
        //    item["cycle"]=data.time_views[i]["cycle"]
        //    dates.push(item)
        // }
        // let start_date={
        //    "date": data.time_views[0]["date"],
        //    "cycle": data.time_views[0]["cycle"]
        // }
        // let end_date={
        //    "date": data.time_views[data.time_views.length-1]["date"],
        //    "cycle": data.time_views[data.time_views.length-1]["cycle"]
        // }
        // let final={}
        // final["start"]=start_date
        // final["end"]=end_date;
        // final["dates"]=dates;
        // this.props.StartEndDateAction(final)

          // alert(url);
          //Uncomment to make it to real production
          $.ajax({
            url: url,
            type: "GET",
            success: function(data){
                alert("Success: "+ url);
                data=JSON.parse(data);
                let new_date={
                  "start": data.start_date,
                  "end": data.end_date
                }
                this.props.DateChangeAction(new_date);
                this.props.UpdateAction(data);
                let cycles=data.time_views.length-1;
                this.props.TimeChangeAction(cycles);
                this.props.UpdateCountAction();
                this.props.DeptCntAction(data.time_views[0].departments.length)

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
            }.bind(this),
            error: function(xhr, status, err){

              alert("Failed!")
            }
          });
      }

    render() {
        let linkStyles = {
            'margin-left' : '45px',
            'margin-right': '45px',
            'text-decoration': 'none',
            'color': 'white'
            }

        return (
            <TopnavPizza>

                <LogoPizza>SMART-i</LogoPizza>
                <NavPizza>
                    <span to='./listview' style={linkStyles}>LIST</span>
                    <span to='./departview' style={linkStyles}>DEPARTMENT</span>
                    <span to='./graphview' style={linkStyles}>GRAPH</span>
                </NavPizza>
                <SearchPizza>
                    <SearchInput
                        type='text'
                        name='search_id'
                        defaultValue={this.state.searchInput}
                        onChange={(event)=>this.handleInput(event.target.value)}>
                    </SearchInput>
                    <SearchInput
                        type='text'
                        name='entity_id'
                        defaultValue={this.state.entityEntity}
                        onChange={(event)=>this.handleEntity(event.target.value)}>
                    </SearchInput>
                    {/* <button>ADD</button> */}
                    {/* <SearchInput type='text' name='search_id' defaultValue='START' ></SearchInput>
                    <SearchInput type='text' name='search_id' defaultValue='END' ></SearchInput> */}
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={(date)=>this.handleStartChange(date)}
                        placeholderText="Start Date"
                    />
                    <DatePicker
                        selected={this.state.endDate}
                        onChange={(date)=>this.handleEndChange(date)}
                        placeholderText="End Date"
                    />
                    <SearchBtn onClick={()=>this.searchClick()}>SEARCH</SearchBtn>
                </SearchPizza>

            </TopnavPizza>
        )
    }
}

export default Topnav
