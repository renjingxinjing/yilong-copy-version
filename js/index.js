$(function(){
    //banner�ϵ��������ģ�鿪ʼ
    //banner�ϵ�����������tab���߼���ʼ
    $(".itemsBox>.leftitem a").each(function (idx, val) {
        $(this).on("click", function () {
            var index = $(this).index();
            $(this).addClass("current").siblings("a").removeClass("current");
            $(".rightitem").children().eq(index).removeClass("dpn").siblings().addClass("dpn");
        });
    });
    //���·�ʽҲ�ǿ��Եģ��������鲻��
    // $(".itemsBox>.leftitem a").on("click",function(){
    //     console.log($(this));
    //           $(this).on("click",function(){
    //         $(this).addClass("current").siblings("a").removeClass("current");
    //         console.log($(this));
    //     });
    // })
    // ���Ϸ�ʽҲ�ǿ��Եģ��������鲻��
    //banner�ϵ�����������tab���߼�����
    //banner�ϵ�������ӾƵ�ͻ�Ʊ�߼���ʼ
    // �Ƶ��߼���ʼ
    $(".hotel-model .top a").on("click", function () {
        var idx = $(this).index();
//            console.log(idx);
        $(this).addClass("current").siblings("a").removeClass("current");
        $(".hotel-model .containt").eq(idx).removeClass("dpn").siblings(".containt").addClass("dpn");
        // console.log()
    })
    // �Ƶ��߼�����
    // ��Ʊ�߼���ʼ
    $(".tickets-model .top a").on("click", function () {
        var idx = $(this).index();
//            console.log(idx);
        $(this).addClass("current").siblings("a").removeClass("current");
        $(".tickets-model .containt").eq(idx).removeClass("dpn").siblings(".containt").addClass("dpn");
        // console.log()
    })
    // ��Ʊ�߼�����
    //banner�ϵ�������ӾƵ�ͻ�Ʊ�߼�����
    //banner�ϵ���������ֻ��ͻ�ɴģ���ֲ�ͼ�߼���ʼ
    var count1 = 0;
    var countp = 0;
    var timer;
    //������ͽ����¼�
    $(".phone-ban .siyuan-slide").on("mouseover mouseenter", function () {
        clearInterval(timer);
        $(".itemsBox .rightitem").addClass("add-phone-ban");
        var step = $(this).width();
        timer = setInterval(function () {
            if (countp >= 40) {
                countp = 0;
            }
            countp++;
            //�߿�ͼƬ
            $(".itemsBox .rightitem").css({
                "background-image": "url(images/backgound-image/" + countp + ".jpg)",
                "background-repeat": "no-repeat",
                "background-size": "100% 100%"
            });
            //�ֲ��߼�
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
    //����뿪�¼�
    $(".phone-ban .siyuan-slide").on("mouseleave", function () {
        clearInterval(timer);
        $(".phone-ban .siyuan-slide ul").css("left", 0);
        $(".itemsBox .rightitem").removeClass("add-phone-ban").css("background", "white");
        countp = 0;
        count1 = 0;
    });

    //banner�ϵ���������ֻ��ͻ�ɴģ���ֲ�ͼ�߼�����
    //banner�ϵ��������ģ�����
    //���ֲ�ͼ��banner�߼���ʼ
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
    //���ֲ�ͼ��banner�߼�����
    //����������Ajax���������߼���ʼ
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
                    // alert("����ǰ�߼�");
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
                    alert("������!!!\n�������缰�������������!");
                    console.log(errmsg);
                },
                complete: function () {
                    // alert("ִ�����");
                }
            })
        })

    })
    //����������Ajax���������߼�����
    //����ָ�����tab�л������߼���ʼ
    $("#tab-pic .but li").mouseenter(function () {
        var index = $(this).index();
        $(this).addClass("current").siblings("li").removeClass("current").parent().siblings("ul").children("li").eq(index).addClass("current").siblings("li").removeClass("current");
    })
    //����ָ�����tab�л������߼�����
})