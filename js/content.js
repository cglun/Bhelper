$("document").ready(function () {

    $cur=$(".n-statistics");
    //关注数
   $(this).find(".space-attention").text("116");

   //粉丝数
    $(this).find(".space-fans").text("1.6亿");

    //获赞数
     $(this).find(".n-bf .n-data-v").eq(0).text("680.8w");

    //播放
    $(this).find(".n-bf .n-data-v").eq(1).text("17.3亿");

    //阅读
    $(this).find(".n-bf .n-data-v").eq(2).text("0");

    //年度大会员
    $(".h-basic .h-vipType").text("世纪大会员")


})