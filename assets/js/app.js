var init = function () {

  var snippets = Array.from(arguments).filter(function(ele){
      return ele;
  }).map(function(ele, index){
    return {
      index: index,
      title: ele[0],
      url: ele[1],
      path: ele[2],
      category: ele[3]
    }
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
  var show = function(snippet, e){
    var target = e.target,
        p = (target.nodeName === 'H3' ? target : target.parentElement).nextElementSibling;
    Array.from(document.querySelectorAll('.visible')).forEach(function(ele){
      ele.className = ele.className.replace(/visible/g, '');
    });
    if(p.getAttribute('data-bind') === 'true'){
      p.className += ' visible';
      return;
    }
    get(snippet.url, function(text){
      p.innerHTML = text;
      p.className += ' visible';
      p.setAttribute('data-bind', true);
    });
  };
  var main = new Vue({
      el: '#main',
      data: {
          snippets: snippets
      },
      methods: {
        show: show
      }
  });
}
