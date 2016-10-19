/*
* @Author: Administrator
* @Date:   2016-09-01 21:36:25
* @Last Modified by:   Administrator
* @Last Modified time: 2016-09-13 18:26:51
*/
$(function(){
	//手机验证匹配
	 var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
	 // 邮箱验证匹配
	 var reg1 = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	 // 密码强度验证匹配
	 var reg2 = /^[A-Za-z0-9]{6,30}$/
     var reg3 = /^[0-9]{6,30}$/;
     var reg4 = /^[a-zA-Z]{6,30}$/;
     // 手机验证逻辑
	$(".main-cont .right").focus(function(){

		if($(this).val() === "") {
			$(this).next("span").text("* 请正确填写您的手机号，以便及时确认预订信息 *");
			$(this).next("span").css("color","grey");
		}
	});
	$(".main-cont .right").blur(function(){
	    
		if($(this).val() === "") {
			$(this).next("span").text("");
		} else if(!reg.test($(this).val())) {
			$(this).next("span").text("* 请输入正确的手机号 *");
			$(this).next("span").css("color","red");
		} else {
			$(this).next("span").text("");
		}
	});
	// 验证码填写提示逻辑
	 $("#check").focus(function(){
        $(".check-code").text("* 请填写接收到的手机验证码 *");
    });
    $("#check").blur(function(){
        $(".check-code").text("");
    });
    // 验证码发送验证逻辑
    $(".checkBtn").on("click",function(){
        if(!reg.test($(".main-cont .right").val())) {
            $(".main-cont .right").next("span").text("* 请输入正确的手机号 *");
            $(".main-cont .right").next("span").css("color","red");
        }
    });
    // 邮箱验证逻辑
    $("input[type=email]").blur(function(){
    	if($(this).val() === ""){
    		$(".email-check").text("");
    	} else if(!reg1.test($(this).val())) {
	        $(".email-check").text("* 邮箱输入错误，请核对后重新输入 *");
	        $(".email-check").css("color","red");
	    };
    });
    // 密码验证逻辑
    $("#password").focus(function(){
    $(".password").text("* 6-30个字符或数字组成 *");
    $(".password").css("color","grey");
   });
   $("#password").blur(function(){
        if($(this).val() === ""){
            $(".password").text("");
            $(".password").css("color","red");
            $(".tips").css("display","none");
        } else if(reg3.test($("#password").val())){
            $(".tips").css("display","block");
            $(".bef").css("backgroundColor","green");
            $(".aft").css("backgroundColor","transparent")
            $(".tips em").text("密码强度: 弱");
        } else if(reg4.test($("#password").val())){
            $(".tips").css("display","block");
            $(".bef").css("backgroundColor","green");
            $(".aft").css("backgroundColor","transparent")
            $(".tips em").text("密码强度: 弱");
        } else if(reg2.test($("#password").val())){
            $(".tips").css("display","block");
            $(".bef").css("backgroundColor","red");
            $(".aft").css("backgroundColor","red");
            $(".tips em").text("密码强度: 强");
            $(".password").text("");
            $(".password").css("color","green");
        } else {
        	
            $(".password").text("* 6-30个字符或数字组成，请重新输入 *");
            $(".password").css("color","red");
           
        };
   });
   // 第二次密码输入验证逻辑
   $("#password-check").blur(function(){
		if ($(this).val() === ""){
    		$(".password-check ").text("");
    	} else if ($(this).val() !== $("#password").val()){
    		$(".password-check ").text("* 两次密码输入不一致，请重新输入 *").css("color","red");
    	} else {
    			$(".password-check ").text("");
    	};
   });
    // 手机下拉框
    $(".btn").on("click",function(){
        var temp = $(".area-phone").css("display");
        if(temp == "none"){
            $(".area-phone").css("display","block");
        } else {
            $(".area-phone").css("display","none");
        };
    });
    // 艺龙卡拥有情况逻辑
    $(".haveCard #haveCard").on("click",function(){
        var flag = $(".haveCard #haveCard").prop("checked");
        console.log(flag);
        if(flag){
            $(".haveCard dl").css("display","block");
        } else {
            $(".haveCard dl").css("display","none");
        };
    });
    // 出行习惯情况逻辑
    $(".regular").on("click",function(){
        var temp = $(".tan-out").css("display");
        if(temp == "none"){
            $(".tan-out").css("display","block");
        } else {
            $(".tan-out").css("display","none");
        };

    });
    // 查看协议情况逻辑
    $(".accept-item a").on("click",function(){
        var temp = $(".items").css("display");
        if(temp == "none"){
            $(".items").css("display","block");
        } else {
            $(".items").css("display","none");
        };

    });
    // 注册按钮点击判断逻辑
   $(".register").on("click",function(){
        $(this).val("同意条款并注册");
        if($(".main-cont .right").val() ===""){
            $(".main-cont .right").next("span").text("* 手机号码不能为空 *").css("color","red");
        }
        if($("#check").val() ===""){
            $(".check-code").text("* 请填写手机验证码 *").css("color","red");
        }
        if(!$("#itemsa").prop("checked")){
            $(".read-item").text("* 请认真阅读相关条款并勾选 *").css("color","red");
        }
        if(!$("#itemsa").prop("checked") ||  $(".main-cont .right").val() ==="" || $("#check").val() ===""){   
                return;
        };

    });
})