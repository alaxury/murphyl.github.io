(function () {
    var xhq = new XMLHttpRequest();

    var get = function (url, callback) {
        xhq.onreadystatechange = function () {
            if (xhq.readyState == 4 && xhq.status == 200) {
                //console.log(xhq.responseText)
                callback.call(this, xhq.responseText);
            }
        }
        xhq.open('GET', url, true);
        xhq.send();
    };

    var list = new Vue({
        el: '#list',
        data: {
            snippets: snippets[cats[0].name]
        }
    });
    var main;
    var renderWhiteBoard = function (snippet) {
        get(snippet.url, function (res) {
            // console.log(res)
            // document.querySelector('#whiteboard').innerHTML = res;
            if(main){
                main.title = snippet.title;
                main.path = snippet.path;
                main.content = res;
            } else {
                main = new Vue({
                    el: '#main',
                    data: {
                        title: snippet.title,
                        path: snippet.path,
                        content: res
                    },
                });
            }
        });
    };
    renderWhiteBoard(snippets[cats[0].name][0]);
    new Vue({
        el: '#cats',
        data: {
            cats: cats
        },
        methods: {
            greet: function (key) {
                // 方法内 `this` 指向 vm
                list.snippets = snippets[key];
                renderWhiteBoard(snippets[key][0].url);
            }
        }
    });
})()