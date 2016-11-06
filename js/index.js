var entries = [[1, "Start"], [2, "Tod"], [3, "Okkultismus/Glaube"]];



var blog = function(name) {

    var file = "entries/"+name;

    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                $("#content_main").html(allText.replace(/\n/g, "<br>"));
            }
        }
    }
    rawFile.send(null);

};

var about = function() {

    var file = "entries/1";

    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                $("#content_main").html(allText.replace(/\n/g, "<br>"));
            }
        }
    }
    rawFile.send(null);

};

$(document).ready(function() {

    $("#left_bar").append("<ul id=\"blogposts\">");
    for (var entry in entries) {
        $("#blogposts").append("<li><a onclick=\"blog('" + entries[entry][0] + "');\">" + entries[entry][1] + "</a></li>");
    }
    $("#left_bar").append("</ul>");

    about();

});
