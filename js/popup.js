$(document).ready(function () {
    $.get("https://yehei.top/notice.json", function (res) {
        $(".panel-body.notice").html(res["notice"])

    });

    function getAll() {

        chrome.storage.sync.get("name", function (up) {


            if ((typeof up.name != "undefined")) {
                $(".form-control.upname").val(up.name)
            }

        })
        chrome.storage.sync.get("bititle", function (up) {


            if ((typeof up.bititle != "undefined")) {
                $(".form-control.bizhantitle").val(up.bititle)
            }

        })
    }

    getAll();

    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

        getAll();

        if (request.greeting == "getUp") {
            console.log(222)


            sendResponse(n);
        }

    })

    function toast() {
        setTimeout(function () {
            $(".cgsave").hide()
        }, 2000)
    }

    $(".delete-all").click(function () {
        $('#myModal').modal("show");

    })


    $(".modal-footer .btn-danger").click(function () {
        $("#myModal").modal("hide");
        chrome.storage.sync.clear(function (obj) {

            $(".form-control.upname").val("")
            $(".form-control.bizhantitle").val("")

        });

    })


    //保存数据
    function save() {
        let n = $(".form-control.upname").val();
        let t = $(".form-control.bizhantitle").val();
        if (n.trim() == "") {
            n = null;
        }
        if (t.trim() == "") {
            t = null;
        }

        chrome.storage.sync.set({
            "name": n,
            "bititle": t
        }, function () {
            $(".cgsave").show()

            toast()
        });
        chrome.runtime.sendMessage({greeting: "getUp"}, function (n) {

        })


        setTimeout(function () {
            getAll();
        }, 300)


    }


    $(".btn.tianjia").click(function () {
        save();
    })

    $.get('https://member.bilibili.com/x2/creative/h5/calendar/event?ts=0', function (res) {
        let u = res['data']['pfs'];
        if (u == null) {
            $("h6").html('<img src="images/nologin.png" style="width: 20px" alt="b站">   <a href="https://www.bilibili.com/" target="_blank">前往B站登录</a>     ')
        } else {
            $(".biuser").text("注册时间：" + u['profile']['name'])
            $("h6").html('<img style="width: 20px;height: 20px;border-radius:50%" src=' + u['profile']['face'] + ' alt="b站">' + '<span style="padding-left:4px;color: #000000;"  >' + u['profile']['name'] + '</span>  [当前用户]');
            let timestamp = u['profile']['jointime'];
            $("#jointime span").text(timestampToTime(timestamp));
        }

        function timestampToTime(timestamp) {
            //时间戳为10位需*1000，时间戳为13位的话不需乘1000
            var date = new Date(timestamp * 1000);
            Y = date.getFullYear() + '-';
            M = (date.getMonth() + 1 < 10 ? ('0' + (date.getMonth() + 1) + '-') : (date.getMonth() + 1) + '-');
            D = date.getDate() < 10 ? '0' + date.getDate() + '【' : date.getDate() + '【';
            h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
            m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
            s = date.getSeconds() < 10 ? '0' + date.getSeconds() + '】' : date.getSeconds() + '】';
            return Y + M + D + h + m + s;
            //return D;
        }


    })


})
