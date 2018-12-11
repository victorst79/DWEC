$("document").ready( () => {
    // Exercise 5
    $("#ex1").click( () => {
        $("ul li:first").hide();
    });
    
    // Exercise 8
    $("div h3").css("font-size","15px");
    
    $("div h3").animate( () => {
        fontsize: "15px";
    },2000);

    $("div h3").click( () => {
        $(this.siblings('p')).toggle();
    });
});