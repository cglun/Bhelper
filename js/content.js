
$(document).ready(function () {



    cur=$("#navigator .n-statistics");




    //关注数
   cur.find(".space-attention").text("116");

   //粉丝数
    cur.find(".space-fans").text("1.6亿");

    //获赞数
     cur.find(".n-bf .n-data-v").eq(0).text("680.8w");

    //播放
    cur.find(".n-bf .n-data-v").eq(1).text("17.3亿");

    //阅读
    cur.find(".n-bf .n-data-v").eq(2).text("0");

    //年度大会员
    $(".h-basic .h-vipType").text("世纪大会员");



    console.log("李化云bilibili")

})
