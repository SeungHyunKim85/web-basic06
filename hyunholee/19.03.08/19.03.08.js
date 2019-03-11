$(".btn1").click(function(e){
    e.preventDefault();
    $("img/mockup-1.png").show()
    $("img/mockup-2.png").hide()
    $("img/mockup-3.png").hide()
    $("img/mockup-4.png").hide()
});

$(".btn2").click(function(e){
    e.preventDefault();
    $(".mockup-1").hide()
    $(".mockup-2").show()
    $(".mockup-3").hide()
    $(".mockup-4").hide()
});

$(".btn3").click(function(e){
    e.preventDefault();
    $(".mockup-1").hide()
    $(".mockup-2").hide()
    $(".mockup-3").show()
    $(".mockup-4").hide()
});

$(".btn4").click(function(e){
    e.preventDefault();
    $(".mockup-1").hide()
    $(".mockup-2").hide()
    $(".mockup-3").hide()
    $(".mockup-4").show()
});