//右键弹出的菜单
chrome.contextMenus.create({
    title: "B管家",
    contexts: ["page"],
    onclick: theFunctionToRun
})

function theFunctionToRun() {
    console.log('欢迎使用B管家');
    alert('欢迎使用B管家');

}



let c = '';
let user = '';
let vip = '';

let n = '';
let bt = '';

//屏蔽的用户
function getAll() {

    chrome.storage.sync.get("name", function (up) {


        n = up.name;

    })

    chrome.storage.sync.get("bititle", function (up) {


        bt = up.bititle;

    })


}

getAll();


//权限检测


function getUser() {
    $.get('https://member.bilibili.com/x2/creative/h5/calendar/event?ts=0', function (res) {
        let u = res['data']['pfs'];
        if (u != null) {
            user = u['profile'];
        }
    })
}

getUser();

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.greeting == "c") {




        } else if (request.greeting == "getUser") {
            getUser();
            sendResponse(user)
        } else if (request.greeting == "getVip") {
            getVip();
            sendResponse(vip);
        } else if (request.greeting == "getUp") {
            getAll();
            sendResponse(n)
        } else if (request.greeting == "getTitle") {
            getAll();
            sendResponse(bt);
        }
    });








