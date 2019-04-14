import $ from 'jquery';

export function sliderLabel(){
var el, newPoint, newPlace, offset, width;

// Select all range inputs, watch for change
$("input[type='range']").change(function() {

 // Cache this for efficiency
 el = $(this);

 // Measure width of range input
 width = el.width();

 // Figure out placement percentage between left and right of input
 newPoint = (el.val() - el.attr("min")) / (el.attr("max") - el.attr("min"));

  offset = -1;
 var bias = width * 0.03 + 30;

 // Prevent bubble from going beyond left or right (unsupported browsers)
 if (newPoint < 0) { newPlace = - bias; }
 else if (newPoint > 1) { newPlace = width + bias; }
 else { newPlace = width * newPoint + bias; offset -= newPoint; }

console.log(newPoint, offset)
 // Move bubble
 el
   .next("output")
   .css({
     left: newPlace,
     marginLeft: newPoint <0||Number.isNaN(newPoint) ?-100:offset + "%"
   })
     .text(el.val());
 })
 // Fake a change to position bubble at page load
 .trigger('change');
};
