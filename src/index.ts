import countries from './countries';
import countryNames from './countryNames';
import $ from "jquery";

const normalColor : string = "#c23f3f";
const hoverColor : string = "#000";
const oceanColor : string = "#ADD8E6";

const hoverOffsetX = 10;
const hoverOffsetY = 10;

var currCountry : any;
$(function() {
  $("#world_map").append('<svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 2000 1001" style="max-height:100%;">');
  $("svg").append(`<rect width="100%" height="100%" fill="${oceanColor}"/>`)
  
  countries.map((i) => {
    $("svg").append(`<path style="fill:${normalColor};fill-rule:evenodd;" stroke-width: "1" stroke="#ffffff" key="${i.id}" d="${i.shape}"></path>`);
    $("#world_map").html($("#world_map").html());
  });

  // Sets the sets stuff when mouse is hovering over a country
  $("path").on('mouseover', (e)=>{
    e.target.style.fill=hoverColor; 
    currCountry = e.target; 
    $("#countryTime p").text(countryNames[currCountry.getAttribute("key")]);
  });

  $("path").on('mouseout', (e)=>{
    e.target.style.fill=normalColor; currCountry = null;
  });

  // Make label follow mouse
  $(document).on('mousemove', (e)=>{
    if (currCountry!=null){
      $("#countryTime").show();
      $("#countryTime").css({left: e.pageX+hoverOffsetX, top: e.pageY+hoverOffsetY});
      $("#countryTime p").html()
    }
    else{
      $("#countryTime").hide();
    }
  });
});