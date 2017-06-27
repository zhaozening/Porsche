/**
 * Created by Administrator on 2017/3/28.
 */

$(function () {
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
    );



    $(".tittle1").hover(
        function () {
            $(".impo,.tittle1_a").show();

        },
        function () {
            $(".impo,.tittle1_a").hide();
        }
    );
    $(".tittle1_a").hover(
        function () {
            $(this).css("background","#990000")
        },
        function () {
            $(this).css("background","#212121")
        }
    );
    $(".tittle2").hover(
        function () {
            $(this).addClass("tittle2_hover");
        }
        ,
        function () {
            $(this).removeClass("tittle2_hover");
        }
    );
    $(".tittle__2 a").hover(
        function () {
            $(this).addClass("a_2")
        },
        function () {
            $(this).removeClass("a_2")
        }
    );
    $(".tittle2").hover(
        function () {
            $(this).children(".tittle__2").show()
        },
        function () {
            $(this).children(".tittle__2").hide()
        }
    );
    $(".shaixuan li").click(
        function () {
            $(this).children(".input").toggleClass("input_hover");
            $(this).children(".text").toggleClass("text_hover");
            var form=$(this).children(".text").text();
            $(".xuan").append(form+"&nbsp;,&nbsp;&nbsp;")
        }
    );
    $(".input_111").hover(
        function () {
            $(this).css("background","#cc0000")
        }
        ,
        function () {
            $(this).css("background","#3e4146")
        }
    );
    $(".input_111").click(
        function () {
            $(".xuan").text("");
            $(".input").removeClass("input_hover");
            $(".text").removeClass("text_hover");


        }
    );
    // $(".main_top p").click(
    //     function () {
    //
    //         $(".fu").relaceWith("<span class='.fu'>-</span>>")
    //     }
    // )
    $(".main_top p").click(
        function () {
            $(".shaixuan").stop().slideToggle()
        }
    );
    $(".banner_list_car").hover(
        function () {
            $(this).children(".posi").show();
            $(this).css({"border": "1px solid #cbcbcb","border-bottom": "4px solid #cc0000","border-top":"1px solid white"});
            $(this).children("a").children("span").css("color","#cc0000");
        }
        ,
        function () {
            $(this).children(".posi").hide();
            $(this).css({"border": "1px solid white","border-bottom": "4px solid white"});
            $(this).children("a").children("span").css("color","black")
        }
    );
    $(".posi a").hover(
        function () {
            $(this).css("color","#cc0000")
        },
        function () {
            $(this).css("color","black")
        }
    );
    $(".banner_more li").hover(
        function () {
            $(this).children("a").css("color","#cc0000")
        },
        function () {
            $(this).children("a").css("color","black")
        }
    );



    $(window).scroll(
        function () {
            var win=$(window).scrollTo();
            if (win>=186){
                $(".tittle_po").addClass("tittle_po_f");
            }
        }
    );

    // $(window).scroll(
    //     function(){
    //         //垂直滚动条滚动的距离
    //         var s=$(window).scrollTo();
    //         // console.log(s);
    //         if(s>=186){
    //             $(".tittle_po").addClass("tittle_po_f");
    //         }
    //
    //     });


    // $(".tittle_po")










});