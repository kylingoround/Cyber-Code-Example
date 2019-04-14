import $ from 'jquery'

const getAjax = props => {
    let start = props.start;
    let end = props.end;
    let input = props.input

    let temp;

    let url = "/graphview?start_date="+start+"&end_date="+end+"&dept="+input+"&entity=ip";
    let general_graph

    $.ajax({
    url: url,
    type: "GET",
    success: function(data){
        alert("Success!")   
    }.bind(this),   
    error: function(xhr, status, err){
        alert("Failed!")
    }
    });
}

export default getAjax