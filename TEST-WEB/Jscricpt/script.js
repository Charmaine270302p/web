 var  imgthree = "BUILT YEAR";
var  imgfour = "BED ROOMS";
var  imgfive = "BATH ROOMS";
var  imgsix = "CAR PARKING";

$(".property .imgthree").click(function(){
    $(".property p:first").html(imgthree);
    $(".property p:last").html("2026");

    $(".property .imgthree").css({height :"160px"});
    $(".property .imgfour").css({height :"120px"});
    $(".property .imgfive").css({height :"120px"});
    $(".property .imgsix").css({height :"120px"});
  
    
});

$(".property .imgfour").click(function(){
    $(".property p:first").html(imgfour);
    $(".property p:last").html("2");

    $(".property .imgthree").css({height :"120px"});
    $(".property .imgfour").css({height :"160px"});
    $(".property .imgfive").css({height :"120px"});
    $(".property .imgsix").css({height :"120px"});
   
    
});

$(".property .imgfive").click(function(){
    $(".property p:first").html(imgfive);
    $(".property p:last").html("2");

    $(".property .imgthree").css({height :"120px"});
    $(".property .imgfour").css({height :"120px"});
    $(".property .imgfive").css({height :"160px"});
    $(".property .imgsix").css({height :"120px"});
 
    
});

$(".property .imgsix ").click(function(){
    $(".property p:first").html(imgsix);
    $(".property p:last").html("2");
    
    $(".property .imgthree").css({height :"120px"});
    $(".property .imgfour").css({height :"120px"});
    $(".property .imgfive").css({height :"120px"});
    $(".property .imgsix").css({height :"160px"});
  
 
    
});


$("#vec").click(function(){

    $("body").toggleClass("dark-theme")
    
    });
    

$(function(){

    $(".toggle-button").on("click",function(){
    $(".navbar-links").toggle(50)

    });
        
    });
        




