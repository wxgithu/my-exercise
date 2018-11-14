$(".tab").on("mouseover","li",function(){
    var $li=$(this);
    var i=$li.attr("toggle-target");
    $(".box"+i).addClass("show");
    $(".box"+i).siblings().removeClass("show");
})
$(".user-name>li:first-child").on("mouseover",function(){
    var $div=$(this).children().last();
        $div.show();
})
.on("mouseout",function(){
    var $div=$(this).children().last();
    $div.hide();
})
$(".user-name li:nth-child(2)").on("mouseover",function(){
    var $div=$(this).children().last();
    $div.show();
})
.on("mouseout",function(){
    var $div=$(this).children().last();
    $div.hide();
})



