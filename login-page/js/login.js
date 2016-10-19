
$(function(){
    //表单里的占位符的显示和隐藏开始
    $("#username").focus(function(){
        if($(this).val() === "用户名/卡号/手机号/邮箱"){
            $(this).val("");
        }
    })
    $("#username").blur(function(){
        if($(this).val() === ""){
            $(this).val("用户名/卡号/手机号/邮箱")
        }
    })
    $("#password").focus(function(){
        if($(this).val() === "密码"){
            $(this).val("");
        }
    })

    $("#password").blur(function(){
        if($(this).val() === ""){
            $(this).val("密码")
        }
    })
    $("#inputph").focus(function(){
        if($(this).val() === "请输入手机号"){
            $(this).val("");
        }
    })

    $("#inputph").blur(function(){
        if($(this).val() === ""){
            $(this).val("请输入手机号")
        }
    })
    $("#inputd").focus(function(){
        if($(this).val() === "请输入动态密码"){
            $(this).val("");
        }
    })

    $("#inputd").blur(function(){
        if($(this).val() === ""){
            $(this).val("请输入动态密码")
        }
    })
    $(".checkcode").focus(function(){
        if($(this).val() === "验证码"){
            $(this).val("");
        }
    })

    $(".checkcode").blur(function(){
        if($(this).val() === ""){
            $(this).val("验证码")
        }
    })
    //表单里的占位符的显示和隐藏结束
    //二维码模块的显示和隐藏点击事件开始
    $(".gat .close").on("click",function(){
        $(".gat").hide();
    })
    $(".erwei-btn").on("click",function(){

    })
    $(".erwei-btn").on("click",function(){
        $(".erwei").show();
        $(".right-banner").hide();
    })
    $(".computer").on("click",function(){
        $(".right-banner").show();
        $(".erwei").hide();
    })
    //二维码模块的显示和隐藏点击事件开始结束
    //普通注册模式和手机动态密码登录模式切换开始
    $(".change").on("click",function(){
        var flag = $("#normal").prop("checked");
        if(flag){
            $(".normal-login").show();
            $(".phone-login").hide();
        } else {
            $(".normal-login").hide();
            $(".phone-login").show();
        }
    })
    //普通注册模式和手机动态密码登录模式切换结束
    //二维码上的动图
    //第一种方法
    //$(".erwei .help").on("mouseenter",function(){
    //    $(".erwei .active-pic").animate({"left": "85px","opacity": 1},50);
    //    $(".erwei .active-pic .circle").animate({"opacity": 1},300);
    //})
    //$(".erwei .help").on("mouseleave",function(){
    //    $(".erwei .active-pic").animate({"left": 0,"opacity": 0},50);
    //    $(".erwei .active-pic .circle").animate({"opacity": 0},50);
    ////})
    //第二种方法
    //$(".erwei .help").on("mouseenter",function(){
    //    $(".erwei .active-pic").fadeIn(100).animate({"left": "85px"},200);
    //    $(".erwei .active-pic .circle").fadeIn(300);
    //})
    //$(".erwei .help").on("mouseleave",function(){
    //
    //    $(".erwei .active-pic").fadeOut(200).animate({"left": 0},200);
    //    $(".erwei .active-pic .circle").fadeOut(200);
    //})
    //第三种方法
    //二维码上的动图开始
    $(".erwei .help").on("mouseenter",function(){
        $(".erwei .active-pic").show(100).animate({"left": "85px"},100);
        $(".erwei .active-pic .circle").show(300);
    })
    $(".erwei .help").on("mouseleave",function(){
        $(".erwei .active-pic").animate({"left": 0},100).hide(100);
        $(".erwei .active-pic .circle").hide(100);
    })
    //二维码上的动图结束
    //手机动态密码登录电话号码弹窗开始
    $(".phone-num-d .mainland-d").on("click",function(){
        if($(this).children(".tanchu").css("display") == "none"){
            $(this).children(".tanchu").show();
        } else {
            $(this).children(".tanchu").hide();
        }

    })
    $(".phone-num-d .mainland-d .tanchu p").on("click",function(){
        var htm = $(this).children("a").html();
        //console.log(htm);
        $(".phone-num-d .mainland-d span").html(htm);
    })
    //手机动态密码登录电话号码弹窗结束
    //通过用户名/卡号/手机号/邮箱登录验证逻辑
    $(".login-button").on("click",function(){
        var formData = $("#login-start").serialize();

            $.ajax({
                type: 'post',
                url: 'login.php',
                data: formData,
                // dataType: 'json',
                beforeSend: function () {

                    if($('.name').val() == '') {
                        // 友好提示
                        $('.tips p')
                        .fadeIn(500)
                        .delay(1500)
                        .fadeOut(500)
                        .text('用户名不能为空');
                        return false;
                    }

                    if($('.pass').val().length < 6) {
                        // 友好提示
                        $('.tips p')
                        .fadeIn(500)
                        .delay(1500)
                        .fadeOut(500)
                        .text('密码长度不能小于6位');
                        return false;
                    }

                    // 改变状态Loading
                    _this.val('正在提交...').addClass('disabled');

                },
                success: function (info) {
                    console.log(info);

                    // 检测返回结果
                    if(info.code == 10000) {
                        // 提示信息
                        alert(info.msg);

                        // 下一步操作
                        location.href = info.result;
                    }

                },
                error: function (err, errmsg) {
                    console.log(errmsg);
                },
                complete: function () {
                    // 响应完成后还原按钮状态
                    _this.removeClass('disabled').val('立即注册');
                }
            });
    })
})
