(function () {
    $(window).scroll(function(){
        var currentScroll = $(this).scrollTop();
        if ($(this).scrollTop() > 0){
            $("#header_big").slideUp(1000);
            $("#header_small").slideDown(1000);

            $("#site").css("margin-top", "50px");

            //$("#left_bar").css("display", "none");
            //$("#content").css("margin-left", "15%");
        } else {
            $("#header_small").stop(true, true);
            $("#header_small").hide();
            $("#header_big").stop(true, true);
            $("#header_big").show();

            $("#site").css("margin-top", "200px");

            //$("#left_bar").css("display", "");
            //$("#content").css("margin-left", "");
        }
    });
}());


var gallery = function () {

};