/**
 * Created by CPS on 2017/4/2.
 */
$(document).ready(function () {

    $(function () {
        //        1.全局变量等
        var curIndex = 0, //当前index
            imgLen = $(".imgList li").length; //图片总数
//        2.自动切换定时器处理
        // 定时器自动变换4秒每次
        var autoChange = setInterval(function () {
            if (curIndex < imgLen - 1) {
                curIndex++;
            } else {
                curIndex = 0;
            }
            //调用变换处理函数
            changeTo(curIndex);
        }, 2500);
//        3.为左右箭头添加事件处理

//        左箭头
        //左箭头滑入滑出事件处理
        $("#prev").hover(function () {
            //滑入清除定时器
            clearInterval(autoChange);
        }, function () {
            //滑出则重置定时器
            autoChangeAgain();
        });
        //左箭头点击处理
        $("#prev").click(function () {
            //根据curIndex进行上一个图片处理
            curIndex = (curIndex > 0) ? (--curIndex) : (imgLen - 1);
            changeTo(curIndex);
        });
//        右箭头
        //右箭头滑入滑出事件处理
        $("#next").hover(function () {
            //滑入清除定时器
            clearInterval(autoChange);
        }, function () {
            //滑出则重置定时器
            autoChangeAgain();
        });
        //右箭头点击处理
        $("#next").click(function () {
            curIndex = (curIndex < imgLen - 1) ? (++curIndex) : 0;
            changeTo(curIndex);
        });
//        其中autoChangeAgain()就是一个重置定时器函数
//清除定时器时候的重置定时器--封装
        function autoChangeAgain() {
            autoChange = setInterval(function () {
                if (curIndex < imgLen - 1) {
                    curIndex++;
                } else {
                    curIndex = 0;
                }
                //调用变换处理函数
                changeTo(curIndex);
            }, 2500);
        };

//        其中changeTo()就是一个图片切换的处理函数
        function changeTo(num) {
            var goLeft = num * 530;
            $(".imgList").animate({left: "-" + goLeft + "px"}, 1000);
            $(".infoList").find("li").removeClass("infoOn").eq(num).addClass("infoOn");
            $(".indexList").find("li").removeClass("indexOn").eq(num).addClass("indexOn");
        }

//        每传入一个图片序号，则按理进行goLeft

//        4.为右下角的那几个li 按钮绑定事件处理
//对右下角按钮index进行事件绑定处理等
        $(".indexList").find("li").each(function (item) {
            $(this).click(function () {
                clearInterval(autoChange);
                changeTo(item);
                curIndex = item;
                autoChangeAgain(curIndex);
            });
        });
    })

    /*警员风采跑马灯*/
    $(function () {
        $("#jyfc_content").fsrPMD({
            Event: 'mouseover',        //事件
            Id: 'jyfc_content',     //容器ID
            Bq: 'li',               //复制html标签
            Fx: "left",             //方向
            Time: 40
        });
    });


    /*新闻栏目*/
    $(function () {
        $("#news_title li").eq(0).css({"color": "#fff", "background": "#68768a"});
        $("#myTabContent li").eq(0).css({"display": "block", "": ""}).siblings().css({"display": "none", "": ""});

        $("#news_title li").click(function () {
            var index = $("#news_title li").index(this);
            $("#news_title li").eq(index).css({
                "background": "#68768a",
                "color": "#fff"
            }).siblings().css({"background": "#fff", "color": "#68768a"});
            $("#myTabContent>li").eq(index).css({"display": "block", "": ""}).siblings().css({
                "display": "none",
                "": ""
            });
        });
    });


    /*信息公开栏*/
    $(function () {
        $(".xxgk_tab_title li").eq(0).css({"color": "#fff", "background": "#68768a"});
        $(".xxgk_tab_list>li").eq(0).css({"display": "block", "": ""}).siblings().css({"display": "none", "": ""});
        $(".xxgk_tab_title li").click(function () {
            var index1 = $(".xxgk_tab_title li").index(this);
            $(".xxgk_tab_title li").eq(index1).css({
                "color": "#fff",
                "background": "#68768a"
            }).siblings().css({"color": "#68768a", "background": "#fff"});
            $(".xxgk_tab_list>li").eq(index1).css({"display": "block", "": ""}).siblings().css({
                "display": "none",
                "": ""
            });
        });
    });


    // 警方通缉照片跑马灯
    $(function () {
        $("#jftj_pic").fsrPMD({
            Event: 'mouseover',        //事件
            Id: 'jftj_pic',     //容器ID
            Bq: 'li',               //复制html标签
            Fx: "left",             //方向
            Time: 40
        });
    });

    // 快速查询清空
    $(function () {
        $(".rewrite").click(function () {
            var index = $(".rewrite").index(this);
            switch (index) {
                case 0:
                    $(".ksxctd_cx ul li:eq(0) form input").val("");
                    break;
                case 1:
                    $(".ksxctd_cx ul li:eq(1) form input").val("");
                    break;
                case 2:
                    $(".ksxctd_cx ul li:eq(2) form input").val("");
                    break;
                case 3:
                    $(".ksxctd_cx ul li:eq(3) form input").val("");
                    break;
                default:
                    break;
            }
            ;
        });
    });

    //警民互动公告列表
    $(function () {
        $(".hdlb_title li").eq(0).css({"background": "#fff", "color": "#333"}).siblings().css({
            "background": "#e8e8e8",
            "color": "#333"
        });
        $(".hdlb_list_hz>li").eq(0).css("display", "block").siblings().css("display", "none");
        $(".hdlb_title li").mouseenter(function () {

            var index = $(".hdlb_title li").index(this);
            $(".hdlb_title li").eq(index).css({
                "background": "#fff",
                "color": "#333"
            }).siblings().css({"background": "#e8e8e8", "color": "#333"});
            $(".hdlb_list_hz>li").eq(index).css("display", "block").siblings().css("display", "none");
        });
    });

});


