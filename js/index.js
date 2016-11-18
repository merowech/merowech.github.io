var entries = [[1, "Start"], [2, "Tod"], [3, "Okkultismus"],
                [4, "Philosophisches Denken"], [5, "Logik"]];



var blog = function(name) {

    var file = "entries/"+name;

    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                 for (var entry in entries) {
                    $("#"+entries[entry]).removeClass("highlight");
                 }

                var allText = rawFile.responseText;
                // allText = scaleToWidth(allText, 80);
                var split_text = allText.split("\n");

                var html = "<div>";
                for (var i in split_text) {
                    html += "<span class='linenumber'>" + i + "</span>";
                    html += "<span>" + split_text[i] + "</span><br>";
                }
                html += "</div>";

                $("#content_main").html(html);

                $("#"+name).addClass("highlight");
            }
        }
    }
    rawFile.send(null);

};

var scaleToWidth = function(text, line_length) {
    var splits = text.split(/^\n/gm);

    var container_helper = $('<span></span>').css({display:'none'}).appendTo($('body'));
    line_length = line_length*8;
    console.log(line_length);

    var ret = "";
    for (var i = 0; i < splits.length; i++) {
        splits[i] = splits[i].replace(/\n/g, " ");
        var words = splits[i].split(" ");
        var temp = "";
        var temp_res = "";

        for (var j = 0; j < words.length; j++) {
            if (container_helper.text(temp + words[j] + " ").width() > line_length) {
                temp_res += temp + "\n";
                temp = "";
            }
            temp += words[j] + " ";
        }
        temp_res += temp + "\n";
        ret += temp_res + "\n";
    }

    return ret;
};

$(document).ready(function() {

    $("#left_bar").append("<ul id=\"blogposts\">");
    for (var entry in entries) {
        $("#blogposts").append("<li id=\""+entries[entry][0]+"\"><a onclick=\"blog('" + entries[entry][0] + "');\">" + entries[entry][1] + "</a></li>");
    }
    $("#left_bar").append("</ul>");

    blog(1);

});
