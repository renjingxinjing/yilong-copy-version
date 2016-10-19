$(function(){
    //banner上的输入盒子模块开始
    //banner上的输入盒子左侧tab栏逻辑开始
    $(".itemsBox>.leftitem a").each(function (idx, val) {
        $(this).on("click", function () {
            var index = $(this).index();
            $(this).addClass("current").siblings("a").removeClass("current");
            $(".rightitem").children().eq(index).removeClass("dpn").siblings().addClass("dpn");
        });
    });
    //以下方式也是可以的，不过体验不好
    // $(".itemsBox>.leftitem a").on("click",function(){
    //     console.log($(this));
    //           $(this).on("click",function(){
    //         $(this).addClass("current").siblings("a").removeClass("current");
    //         console.log($(this));
    //     });
    // })
    // 以上方式也是可以的，不过体验不好
    //banner上的输入盒子左侧tab栏逻辑结束
    //banner上的输入盒子酒店和机票逻辑开始
    // 酒店逻辑开始
    $(".hotel-model .top a").on("click", function () {
        var idx = $(this).index();
//            console.log(idx);
        $(this).addClass("current").siblings("a").removeClass("current");
        $(".hotel-model .containt").eq(idx).removeClass("dpn").siblings(".containt").addClass("dpn");
        // console.log()
    })
    // 酒店逻辑结束
    // 机票逻辑开始
    $(".tickets-model .top a").on("click", function () {
        var idx = $(this).index();
//            console.log(idx);
        $(this).addClass("current").siblings("a").removeClass("current");
        $(".tickets-model .containt").eq(idx).removeClass("dpn").siblings(".containt").addClass("dpn");
        // console.log()
    })
    // 机票逻辑结束
    //banner上的输入盒子酒店和机票逻辑结束
    //banner上的输入盒子手机和婚纱模块轮播图逻辑开始
    var count1 = 0;
    var countp = 0;
    var timer;
    //鼠标进入和进过事件
    $(".phone-ban .siyuan-slide").on("mouseover mouseenter", function () {
        clearInterval(timer);
        $(".itemsBox .rightitem").addClass("add-phone-ban");
        var step = $(this).width();
        timer = setInterval(function () {
            if (countp >= 40) {
                countp = 0;
            }
            countp++;
            //边框图片
            $(".itemsBox .rightitem").css({
                "background-image": "url(images/backgound-image/" + countp + ".jpg)",
                "background-repeat": "no-repeat",
                "background-size": "100% 100%"
            });
            //轮播逻辑
            if (count1 === -9680) {
                $(".phone-ban .siyuan-slide ul").css("left", 0);
                count1 = 0;
            }
            count1 -= step;
            if (count1 >= -9680) {
                $(".phone-ban .siyuan-slide ul").animate({"left": count1}, 300);

            } else {
                $(".phone-ban .siyuan-slide ul").css("left", 0);
                count1 = 0;
            }
        }, 2000)

    });
    //鼠标离开事件
    $(".phone-ban .siyuan-slide").on("mouseleave", function () {
        clearInterval(timer);
        $(".phone-ban .siyuan-slide ul").css("left", 0);
        $(".itemsBox .rightitem").removeClass("add-phone-ban").css("background", "white");
        countp = 0;
        count1 = 0;
    });

    //banner上的输入盒子手机和婚纱模块轮播图逻辑结束
    //banner上的输入盒子模块结束
    //主轮播图大banner逻辑开始
    var count = 1;
    var timer1;
//        var flag = true;
    slide();
    function slide() {
        clearInterval(timer1);
        timer1 = setInterval(function slide() {
            $("#slide ul li").eq(count).animate({"opacity": 1}, 1000);
            $("#slide ul li").eq(count).siblings("li").animate({"opacity": 0}, 1000);
            $(".mainnav>ol>li").eq(count).addClass("current").siblings("li").removeClass("current");
            count++;
            if (count > 4) {
                count = 0;
            }
        }, 4000);
    }

    $("#slide ul li").mouseenter(function () {
        clearInterval(timer1);
    });
    $("#slide ul li").mouseleave(function () {
        slide();
    });
    $(".mainnav ol").mouseenter(function () {
        clearInterval(timer1);
    })
    $(".mainnav ol li").mouseenter(function () {
        var index = $(this).index();
        $(this).addClass("current").siblings("li").removeClass("current");
        $("#slide ul li").stop();
        $("#slide ul li").eq(index).animate({"opacity": 1}, 1000).siblings("li").animate({"opacity": 0}, 1000);
        count = index;
    });
    $(".mainnav ol").mouseleave(function () {
        $(".mainnav ol li").eq(count).addClass("current").siblings("li").removeClass("current");
    });
    //$(".mainnav ol li").on("click", function () {
    //    var index = $(this).index();
    //    $(this).addClass("current").siblings("li").removeClass("current");
    //    $("#slide ul li").stop();
    //    $("#slide ul li").eq(index).animate({"opacity": 1}, 1000).siblings("li").animate({"opacity": 0}, 1000);
    //    count = index;
    //});
    //主轮播图大banner逻辑结束
    //国内详情版块Ajax交互部分逻辑开始
    $("#content-top h3 span").each(function (index, element) {
        $(this).on("click", function () {
            console.log(index);
            var temp = index * 4;
            $(this).addClass("current").siblings("span").removeClass("current");
            $.ajax({
                type: "post",
                url: "php/index.php",
                dataType: "json",
                beforeSend: function () {
                    // alert("发送前逻辑");
                },
                success: function (info) {
                    var html = '';
                    // html += '<ul>';
                    for (var i = 0; i < info.length; i++) {
                        if (i >= temp && i < temp + 4) {
                            var item = info[i];
                            html += '<li>';
                            html += '<div class="mask">';
                            html += '<a href="#">';
                            html += '<img src="' + item.src + '" alt=""/>';
                            html += '</a>';
                            html += '<span>' + item.span + '</span>';
                            html += '</div>';
                            html += '<p>' + item.p + '</p>';
                            html += '</li>';
                        };

                    }
                    // html += '</ul>';
                    $("#content-top ul").html(html);
                    // <img src="./images/inner-pic/hbtl-zhoushan.jpgalt=&quot;meiyoutu&quot;">
                },
                error: function (err, errmsg) {
                    alert("出错了!!!\n请检查网络及服务器开启情况!");
                    console.log(errmsg);
                },
                complete: function () {
                    // alert("执行完毕");
                }
            })
        })

    })
    //国内详情版块Ajax交互部分逻辑结束
    //旅游指南左侧tab切换功能逻辑开始
    $("#tab-pic .but li").mouseenter(function () {
        var index = $(this).index();
        $(this).addClass("current").siblings("li").removeClass("current").parent().siblings("ul").children("li").eq(index).addClass("current").siblings("li").removeClass("current");
    })
    //旅游指南左侧tab切换功能逻辑结束
})