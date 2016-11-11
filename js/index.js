var entries = [[1, "Start"], [2, "Tod"], [3, "Okkultismus"],
                [4, "Philosophisches Denken"]];



var blog = function(name) {

    var file = "entries/"+name;

    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                var split_text = allText.split("\n");

                var html = "<div>";
                for (var i in split_text) {
                    html += "<span class='linenumber'>" + i + "</span>";
                    html += "<span>" + split_text[i] + "</span><br>";
                }
                html += "</div>";

                $("#content_main").html(html);
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

    blog(1);

});
