var entries = ["first", "second", "third"];



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

    var file = "entries/first";

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

    $("#blogposts").append("<ul>");
    for (var entry in entries) {
        $("#blogposts").append("<li><a onclick=\"blog('" + entries[entry] + "');\">" + entries[entry] + "</a></li>");
    }
    $("#blogposts").append("</ul>");

    about();

});
