//添加页面物理键退出事件

    document.addEventListener("plusready", function() {
        // 注册返回按键事件
        plus.key.addEventListener('backbutton', function() {
        // 事件处理
            plus.nativeUI.confirm("双击将退出程序？", function(event) {
                if (event.index) {
                    plus.runtime.quit();
                }
            },null, ["取消", "确定"]);
        }, false);
    });
