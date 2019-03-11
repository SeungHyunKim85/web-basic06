$(".btn1").click(function(e){
    e.preventDefault();
    $(".mockup-1").show()
    $(".mockup-2").hide()
    $(".mockup-3").hide()
    $(".mockup-4").hide()
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