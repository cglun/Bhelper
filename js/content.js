$(document).ready(function () {

    //屏蔽用户的代码
    function filterV() {
        let up =null;
        let title = null;

        chrome.runtime.sendMessage({greeting: "getUp"}, function (n) {
            up = n;
        })

        chrome.runtime.sendMessage({greeting: "getTitle"}, function (n) {
            if (n!=null) {
                title = n.split("，");
            }

        })
        setTimeout(function () {
            $(".video-list li").each(function () {
                let u = $(this).find(".up-name").text();
                let t = $(this).find(".title").text();
               // console.log("hide" + up+$(this).index())

                if(up!=null){
                    if (up.indexOf(u) != -1) {
                     //   console.log($(this))
                        $(this).hide()
                     //   $(this).css("background","black")

                    }
                }


               // console.log(title)
                if (title != null) {
                    for (i in title) {
                        if (t.indexOf(title[i]) != -1) {
                            $(this).hide()
                        }
                    }
                }


            })
        }, 50)


    }

    filterV();


    $(".filter-wrap").after("<div class='panel panel-default'><div class='panel-heading'><h3 class='panel-title'>欢迎使用B管家<span style='font-size: 14px'>(v1.1.6)</span>    </h3>     </div><div  id='welcomyou' class='panel-body'></div> ");



    $.get("https://www.yehei.top/notice.json",function (res) {

        $("#welcomyou").html( res['notice']+"<a href='https://message.bilibili.com/#/whisper/mid3904143' id='quanxiangou' target='_blank' style='font-size: 14px;color: #3370b7;text-decoration: underline; '  >意见反馈</a>");


    })
    setTimeout(function () {
        $(".message-list").append("<div data-v-d5403732=\"\" data-v-4de4ff28=\"\" class=\"msg-item not-me\"><a data-v-d5403732=\"\" href=\"//space.bilibili.com/286003965\" title=\"callme厉害y\" target=\"_blank\" class=\"avatar\" style=\"background-image: url(https://i0.hdslb.com/bfs/face/899abc82387b3a2f460a600787d673411d7764df.jpg@30w_30h_1c.webp);\"></a><!----><div data-v-d5403732=\"\" class=\"message\"><div data-v-d5403732=\"\" data-key=\"7060018351665062094\" class=\"message-content not-img\">你好，留下你要说的话。</div><!----><!----><!----><!----></div></div>")
    }, 1500);


    function reloadHtml(t){
        setTimeout(function () {
            window.location.reload();
        },t)
    }

    //点击刷新操作
    $(".pagination-btn").click(function () {
       reloadHtml(500);


    })

    $("#all-list li").click(function () {
        reloadHtml(500);
    })




})