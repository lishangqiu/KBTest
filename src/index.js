import countries from './countries';
import $ from "jquery";
const normalColor = "#c23f3f";
const hoverColor = "#000";
var currCountry;
$(function () {
    $("#world_map").append('<svg xmlns="http://www.w3.org/2000/svg" width="1000px" viewBox="0 0 2000 1001" style="max-width:100%;">');
    $("svg").append(`<rect width="100%" height="100%" fill="#009dc4"/>`);
    countries.map((i) => {
        $("svg").append(`<path style="fill:${normalColor};fill-rule:evenodd;" stroke-width: "1" stroke="#ffffff" key="${i.id}" d="${i.shape}"></path>`);
        $("#world_map").html($("#world_map").html());
    });
    // Sets the sets stuff when mouse is hovering over a country
    $("path").on('mouseover', (e) => {
        e.target.style.fill = hoverColor;
        currCountry = e.target;
        $("#countryTime p").text(currCountry.getAttribute("key"));
    });
    $("path").on('mouseout', (e) => { console.log("adsfhkj"); e.target.style.fill = normalColor; currCountry = null; });
    // Make label follow mouse
    $(document).on('mousemove', (e) => {
        if (currCountry != null) {
            $("#countryTime").show();
            $("#countryTime").css({ left: e.pageX, top: e.pageY });
        }
        else {
            $("#countryTime").hide();
        }
    });
});
//# sourceMappingURL=index.js.map