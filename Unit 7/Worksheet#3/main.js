$("document").ready( function(){
    // 1
    $("#primero td:gt(1)").css("background-color","red");
    $("#primero td:lt(2)").css("background-color","cyan");
    
    // 3
    $("#tercero td:empty").css("background-color","yellow")

    // 7
    $("button#start").click(function(){
        $("#ani1").animate({left: "200px"}, "slow");
        $("#ani2");
        $("#ani3");
    });

    $("button#stop").click(function(){
        $("#ani1").stop();
        $("#ani2").stop();
        $("#ani3").stop();
    });
});