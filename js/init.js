//平滑滚动
if (!(navigator.userAgent.indexOf('Firefox') >= 0) && !(navigator.userAgent.indexOf('MSIE') >= 0)&& !(navigator.userAgent.indexOf('MSIE') >= 0) && !(navigator.userAgent.indexOf('Trident') >= 0)){
    $('body').smoothWheel();
}

var controller = new ScrollMagic();

var twCloth1 = TweenMax.to('.man', 1, {y:$(window).height(), ease: Linear.easeNone});
var c1Scene = new ScrollScene({triggerElement: '.page1 .t-center', duration:$(window).height()}).setTween(twCloth1).addTo(controller);



(function(){
    var nobody1 = TweenMax.from('.shadow1', 1, {x: -1000, ease: Linear.easeNone});
    new ScrollScene({triggerElement:'.page1 .t-top', duration: $(window).height()/2}).setTween(nobody1).addTo(controller);
    var nobody2 = TweenMax.to('.shadow1', 1, {x: -1000, ease: Linear.easeNone});
    new ScrollScene({triggerElement:'.page1 .t-center', duration: $(window).height()/2}).setTween(nobody2).addTo(controller);
})();

(function(){
    var nobody1 = TweenMax.from('.shadow2', 1, {x: 1000, ease: Linear.easeNone});
    new ScrollScene({triggerElement:'.page1 .t-top', duration: $(window).height()/2}).setTween(nobody1).addTo(controller);
    var nobody2 = TweenMax.to('.shadow2', 1, {x: 1000, ease: Linear.easeNone});
    new ScrollScene({triggerElement:'.page1 .t-center', duration: $(window).height()/2}).setTween(nobody2).addTo(controller);
})();

!function(){
    var nobody1 = TweenMax.from('.book', 1, {x: -700, ease: Linear.easeNone});
    new ScrollScene({triggerElement:'.page1 .t-top', duration: $(window).height()/2}).setTween(nobody1).addTo(controller);
    var nobody2 = TweenMax.to('.book', 1, {x: -700, ease: Linear.easeNone});
    new ScrollScene({triggerElement:'.page1 .t-center', duration: $(window).height()/2}).setTween(nobody2).addTo(controller);
}();
!function(){
    var nobody1 = TweenMax.from('.dog', 1, {x: -700, ease: Linear.easeNone});
    new ScrollScene({triggerElement:'.page1 .t-top', duration: $(window).height()/2}).setTween(nobody1).addTo(controller);
    var nobody2 = TweenMax.to('.dog', 1, {x: -700, ease: Linear.easeNone});
    new ScrollScene({triggerElement:'.page1 .t-center', duration: $(window).height()/2}).setTween(nobody2).addTo(controller);
}();

!function(){
    var nobody1 = TweenMax.from('.book2', 1, {x: 700, ease: Linear.easeNone});
    new ScrollScene({triggerElement:'.page .t-top', duration: $(window).height()/2}).setTween(nobody1).addTo(controller);
    var nobody2 = TweenMax.to('.book2', 1, {x: 700, ease: Linear.easeNone});
    new ScrollScene({triggerElement:'.page1 .t-center', duration: $(window).height()/2}).setTween(nobody2).addTo(controller);
}();

!function(){
    var nobody1 = TweenMax.from('.book3', 1, {x: 500, ease: Linear.easeNone});
    new ScrollScene({triggerElement:'.page .t-top', duration: $(window).height()/2}).setTween(nobody1).addTo(controller);
    var nobody2 = TweenMax.to('.book3', 1, {x: 500, ease: Linear.easeNone});
    new ScrollScene({triggerElement:'.page1 .t-center', duration: $(window).height()/2}).setTween(nobody2).addTo(controller);
}();

(function(){
    var twCloth4 = TweenMax.fromTo('.man2', 1, {y: -1 * $(window).height(), ease: Linear.easeNone}, {y: $(window).height(), ease: Linear.easeNone});
    var c4Scene = new ScrollScene({triggerElement:'.page1 .t-center', duration: $(window).height()*2}).setTween(twCloth4).addTo(controller);
})();

(function(){
    var twCloth4 = TweenMax.fromTo('.man3', 1, {y:-1*$(window).height(), ease: Linear.easeNone}, {y: $(window).height(), ease: Linear.easeNone});
    var c4Scene = new ScrollScene({triggerElement:'.page2 .t-center', duration: $(window).height()*2}).setTween(twCloth4).addTo(controller);
})();

(function(){

    var twCloth5 = TweenMax.from('.fa', 1, {y: -1 * $(window).height(), ease: Linear.easeNone});
    var c5Scene = new ScrollScene({triggerElement:'.page3 .t-center', duration: $(window).height()}).setTween(twCloth5).addTo(controller);

})();

!function(){
    var twPaperPre4 = TweenMax.from('.chari', 1, {x: -0.3 * $(window).width(), ease: Linear.easeNone});
    var paperPre4Scene = new ScrollScene({triggerElement:'.page2 .t-top', duration: $(window).height()/2}).setTween(twPaperPre4).addTo(controller);
    var twPaper4 = TweenMax.to('.chari', 1, {x: -0.3 * $(window).width(), ease: Linear.easeNone});
    var paper4Scene = new ScrollScene({triggerElement:'.page2 .t-center', duration: $(window).height()/2}).setTween(twPaper4).addTo(controller);

}();

//纸张5
var twPaperPre5 = TweenMax.from('.note', 1, {x: -0.2 * $(window).width(), ease: Linear.easeNone});
var paperPre5Scene = new ScrollScene({triggerElement:'.page2 .t-top', duration: $(window).height()/2}).setTween(twPaperPre5).addTo(controller);
var twPaper5 = TweenMax.to('.note', 1, {x: -0.2 * $(window).width(), ease: Linear.easeNone});
var paper5Scene = new ScrollScene({triggerElement:'.page2 .t-center', duration: $(window).height()/2}).setTween(twPaper5).addTo(controller);
//纸张6
var twPaperPre6 = TweenMax.from('.ga', 1, {x: 0.2 * $(window).width(), ease: Linear.easeNone});
var paperPre6Scene = new ScrollScene({triggerElement:'.page2 .t-top', duration: $(window).height()/2}).setTween(twPaperPre6).addTo(controller);
var twPaper6 = TweenMax.to('.ga', 1, {x: 0.2 * $(window).width(), ease: Linear.easeNone});
var paper6Scene = new ScrollScene({triggerElement:'.page2 .t-center', duration: $(window).height()/2}).setTween(twPaper6).addTo(controller);

var twBriefcasePre2 = TweenMax.from('.clock', 1, {x: 0.5*$(window).width(),ease:Linear.easeNone});
var briefcasePre2Scene = new ScrollScene({triggerElement: '.page2 .t-top', duration:$(window).height()/2}).setTween(twBriefcasePre2).addTo(controller);
var twBriefcase2 = TweenMax.to('.clock', 1, {x: 0.5*$(window).width(), ease:Linear.easeNone});
var briefcase2Scene = new ScrollScene({triggerElement: '.page2 .t-center', duration:$(window).height()}).setTween(twBriefcase2).addTo(controller);

!function(){
    var twPaperPre5 = TweenMax.from('.ok', 1, {x: -0.2 * $(window).width(), ease: Linear.easeNone});
    var paperPre5Scene = new ScrollScene({triggerElement:'.page3 .t-top', duration: $(window).height()/2}).setTween(twPaperPre5).addTo(controller);
    var twPaper5 = TweenMax.to('.ok', 1, {x: -0.2 * $(window).width(), ease: Linear.easeNone});
    var paper5Scene = new ScrollScene({triggerElement:'.page3 .t-center', duration: $(window).height()/2}).setTween(twPaper5).addTo(controller);
}();
!function(){
    var twPaperPre5 = TweenMax.from('.ok2', 1, {x: 0.2 * $(window).width(), ease: Linear.easeNone});
    var paperPre5Scene = new ScrollScene({triggerElement:'.page3 .t-top', duration: $(window).height()/2}).setTween(twPaperPre5).addTo(controller);
    var twPaper5 = TweenMax.to('.ok2', 1, {x: 0.2 * $(window).width(), ease: Linear.easeNone});
    var paper5Scene = new ScrollScene({triggerElement:'.page3 .t-center', duration: $(window).height()/2}).setTween(twPaper5).addTo(controller);
}();

!function(){
    var twPaperPre5 = TweenMax.from('.bg1', 1, {x: -0.2 * $(window).width(), ease: Linear.easeNone});
    var paperPre5Scene = new ScrollScene({triggerElement:'.page4 .t-top', duration: $(window).height()/2}).setTween(twPaperPre5).addTo(controller);
}();
!function(){
    var twPaperPre5 = TweenMax.from('.bg2', 1, {x: 0.2 * $(window).width(), ease: Linear.easeNone});
    var paperPre5Scene = new ScrollScene({triggerElement:'.page4 .t-top', duration: $(window).height()/2}).setTween(twPaperPre5).addTo(controller);
}();


//提交用户选择内容
$(".form-btn").click(function () {

    if ($(".prod.active").length ==0)
    {
        layer.tips('请选择产品', $(".prod") , {guide: 0,time: 3, style: ['background-color:#3fa7e9; color:#fff', '#3fa7e9']});
        return;
    }

    var name = $("#name").val();
    name = name.replace(/(^\s*)|(\s*$)/, "");
    if (name.length >= 25 || name.length < 1)
    {
        layer.tips('请输入合法的姓名', $("#name") , {guide: 0,time: 3, style: ['background-color:#3fa7e9; color:#fff', '#3fa7e9']});
        return;
    }

    var sex=$(".sex-con :radio:checked").length
    if(!sex)
    {
        layer.tips('请选择性别', $(".sex-con") , {guide: 0, time: 3,style: ['background-color:#3fa7e9; color:#fff', '#3fa7e9']});
        return;
    }

    var area=$(".area-text").text();
    if(area=="请选择")
    {
        layer.tips('请选择所在地', $(".area-text") , {guide: 0, time: 3,style: ['background-color:#3fa7e9; color:#fff', '#3fa7e9']});
        return;
    }

    var m1 = /^(1[3578][0-9]|14[57])\d{8}$/;
    var mobile = $("#mobile").val();
    mobile = mobile.replace(/(^\s*)|(\s*$)/, "");
    if(!mobile.length)
    {
        layer.tips('请填写您的手机号码', $("#mobile") , {guide: 0, time: 3,style: ['background-color:#3fa7e9; color:#fff', '#3fa7e9']});
        return;
    }
    if (!(m1.test(mobile)))
    {
        layer.tips('请输入正确的电话号码', $("#mobile") , {guide: 0, time: 3,style: ['background-color:#3fa7e9; color:#fff', '#3fa7e9']});
        $("#mobile").focus();
        return;
    }

    $(".pop-form").hide();
    $(".fix").show();

})

$(".success-ok,.success-close").click(function () {
    $(".success-con,.fix").hide();
})

$(".area").on("click",function(e){
    $(this).find(".area-list").toggle();
});

$(".area-item").on("click",function(e){
    $(".area-text").text($(this).text());
    $('#province').val($(this).text());
    $(".area-list").hide();
    return false;
})

$(document).on("click",function(e){
    if(!$(e.target).closest(".area").length)
    {
        $(".area-list").hide();
    }
});

$(".pop-close,.pop-close2").click(function () {
    $(".fix").hide();
})

;(function(){
    $('.mod-nav-right ul').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing'
    });
})();

$(".prod").click(function () {
    $(this).toggleClass("active")
})