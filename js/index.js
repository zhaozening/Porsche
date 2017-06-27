/**
 * Created by Administrator on 2017/3/20.
 */
$(function(){
    $(".city_bottom").hover(
        function(){
            $(this).children(".city_menu").show();
        }
        ,
        function(){
            $(this).children(".city_menu").hide();
        }
    );
    $(".list_menu li").hover(
        function(){
            $(this).addClass("li")
        },
        function(){
            $(this).removeClass("li")
        }
    );
    $(".nav_list1>li").hover(
        function () {
            $(this).children(".nav_list2").show();
            $(this).children("a").addClass("hover_a");

        },
        function () {
            $(this).children(".nav_list2").hide();
            $(this).children("a").removeClass("hover_a");
        }
    );
    $(".nav_list2>li").hover(
        function () {
            $(this).addClass("hover1")
        },
        function () {
            $(this).removeClass("hover1")
        }
    );
    $("li").hover(
        function () {
            $(this).children("ul").show()
        },
        function () {
            $(this).children("ul").hide()
        }
    );
    $(".nav_list3 li").hover(
        function () {
            $(this).children(".porsche").show();
            $(this).addClass("hover_li")
        },
        function () {
            $(this).children(".porsche").hide();
            $(this).removeClass("hover_li");
        }
    );
    $(".p_left li").hover(
        function () {
            $(this).children("a").addClass("a_im");
        },
        function () {
            $(this).children("a").removeClass("a_im");
        }
    );
    $(".li_index").hover(
        function () {
            $(this).css({"background":"red"});
            $(this).children("a").children("span").stop().animate({"margin-left":"10px"},200)
        }
        ,
        function () {
            $(this).css({"background":"darkred"});
            $(this).children("a").children("span").stop().animate({"margin-left":"7px"},200)

        }
    );
    $(".banner").hover(
        function () {
            $(".banner_left").stop().fadeIn();
            $(".banner_right").stop().fadeIn();
        },
        function () {
            $(".banner_left").stop().fadeOut();
            $(".banner_right").stop().fadeOut();
        }
    );

        $(".banner_list").kxbdSuperMarquee({

            distance:1349,
            time:2,
            direction:'left',
            navId:'.banner_num',
            btnGo:{left:'.banner_right',right:'.banner_left'},

});
    $(".city").hover(
        function () {
            $(".banner").css({"opacity":"0.5"})
        },
        function () {
            $(".banner").css({"opacity":"1"})
        }
    );
    $(".nav_list1").hover(
        function () {
            $(".banner").css({"opacity":"0.5"})
        },
        function () {
            $(".banner").css({"opacity":"1"})
        }
    );
        $(".nav_list2").hover(
            function () {
                $(".banner").css({"opacity":"0.5"})
            },
            function () {
                $(".banner").css({"opacity":"1"})
            }
        );
    $(".nav_list3").hover(
        function () {
            $(".banner").css({"opacity":"0.5"})
        },
        function () {
            $(".banner").css({"opacity":"1"})
        }
    );
    $(".banner_left").hover(
        function () {
            $(this).addClass("banner_hover")
        },
        function () {
            $(this).removeClass("banner_hover")
        }
    );
    $(".banner_right").hover(
        function () {
            $(this).addClass("banner_hover")
        },
        function () {
            $(this).removeClass("banner_hover")
        }
    );
    // -------
    $(".center_inner li").hover(
        function () {
            $(this).children("a").show();
        },
        function () {
            $(this).children("a").hide();
        }
    );
    $(".car_list .li_inner").hover(
        function () {
            $(this).addClass("car_list_hover");
            $(this).children(".car_div").show().addClass("car_div_hover")
        },
        function () {
            $(this).removeClass("car_list_hover");
            $(this).children(".car_div").hide().removeClass("car_div_hover")
        }
    );
    $(".car_div a").hover(
        function () {
            $(this).css("color","darkred")
        },
        function () {
            $(this).css("color","black")
        }
    );
    $(".content_only").hover(
        function () {
            $(this).children("a").children("p").addClass("p_hover")
        },
        function () {
            $(this).children("a").children("p").removeClass("p_hover")
        }
    );
    // --------
    $(".web_top").kxbdSuperMarquee({

        distance:382,
        time:6.3,
        direction:'left',
        // navId:'.banner_num',
        // btnGo:{left:'.banner_right',right:'.banner_left'},

    });
    $(".web_left").kxbdSuperMarquee({

        distance:145,
        time:5.2,
        direction:'bottom',
        // navId:'.banner_num',
        // btnGo:{left:'.banner_right',right:'.banner_left'},

    });
    $(".web_right").kxbdSuperMarquee({

        distance:189,
        time:3.5,
        direction:'right',
        // navId:'.banner_num',
        // btnGo:{left:'.banner_right',right:'.banner_left'},

    });
    $(".web_more").hover(
        function () {
            $(this).addClass("web_more_")
        },
        function () {
            $(this).removeClass("web_more_")
        }
    );
    $(".shejiao a").hover(
        function () {
            $(this).addClass("a_shejiao")
        },
        function () {
            $(this).removeClass("a_shejiao")
        }
    );
    $(".fenxiang img").hover(
        function () {
            $(this).css("opacity","0.7")
        }
        ,function () {
            $(this).css("opacity","1")
        }
    );
    $(".shejiao").hover(
        function () {
            $(this).children(".fenxiang").show();
        },
        function () {
            $(this).children(".fenxiang").hide();
        }
    );
    $(".guanzhu a").hover(
        function () {
            $(this).children("span").show()
        },
        function () {
            $(this).children("span").hide()
        }
    );
    $(".btn1 p").click(
        function () {
            $(this).next().slideToggle()
        }
    );
    $(".btn_1 li").click(
        function () {
            var txt=$(this).text();
            $(this).parent().prev().text(txt);
            $(this).parent().slideUp()
        }
    )














});



