$("document").ready( () => {
    // Exercise 5
    $("#ex1").click( () => {
        $("ul li:first").hide();
    });
    
    // Exercise 8
    // a
    $("div h3").css("font-size","15px");
    
    // $("div h3").animate( () => {
    //     fontsize: "15px";
    // },2000);

    // b
    $("div h3").click( function(){
        $(this).siblings("p").toggle();
    });

    // c
    $("div p").mouseenter( function(){
        $(this).css("background-color","red");
    });

    $("div p").mouseleave( function(){
        $(this).css("background-color","white");
    });
});