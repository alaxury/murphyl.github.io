var init = function () {
  // 数据
  var snippets = {}, cats = [];
  // 分组逻辑
  var group = function (c, u) {
      if (snippets.hasOwnProperty(c)) {
          snippets[c].push(u);
      } else {
          cats.push({name: c});
          snippets[c] = [u];
      }
  };
  // 分组数据
  Array.from(arguments).forEach(function(ele, idx){
      ele && group(ele[3], {
          title: ele[0],
          url: ele[1],
          path: ele[2]
      } , idx);
  });

  // ajax
  var xhq = new XMLHttpRequest();
  var get = function (url, callback) {
      xhq.onreadystatechange = function () {
          if (xhq.readyState == 4 && xhq.status == 200) {
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
      },
      methods: {
          show: function (snippet) {
              renderWhiteBoard(snippet);
              // console.log(snippet);
          }
      }
  });
  var main;
  var renderWhiteBoard = function (snippet) {
      get(snippet.url, function (res) {
          if(main){
              main.$set('snippet', snippet);
              main.$set('content', res);
          } else {
              main = new Vue({
                  el: '#main',
                  data: {
                      snippet: snippet,
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
              list.snippets = snippets[key];
              renderWhiteBoard(snippets[key][0]);
          }
      }
  });
}
