$('.content').smoove({offset:'20%'});

var btns = document.getElementsByClassName("block");
var list_wrap = document.getElementsByClassName("contrast-list")[0];
var list = list_wrap.getElementsByTagName("div");
var len = list.length;
var list1 = [],list2 = [];
for( ; len -- > 0; ) {
  if ( len % 2 ) {
    list2.push(list[len]);
  } else {
    list1.push(list[len]);
  }
}

var boo1 = true;
var boo2 = true;

btns[0].onclick = function () {
  if ( boo2 === false & !boo1 === false) return;
  var len = list1.length;
  for ( ; len -- > 0; ) {
    list1[len].style.display = boo1 ? "none" : "";
  }
  this.className = boo1 ? "block dark" : "block";
  boo1 = !boo1;
}

btns[1].onclick = function () {
  if ( boo1 === false & !boo2 === false) return;
  var len = list1.length;
  for ( ; len -- > 0; ) {
    list2[len].style.display = boo2 ? "none" : "";
  }
  this.className = boo2 ? "block dark" : "block";
  boo2 = !boo2;
}

var req = new XMLHttpRequest();


req.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
     console.info("访问已记录")
     console.info(req.response);
  }
};
req.onerror = function () {
  console.info("哎呀，这条没有记录下来");
};
req.open('GET', 'https://www.oponp.com/hello', false);
// 指定允许其他域名访问
// req.setRequestHeader('Access-Control-Allow-Origin','*');
// 响应类型
// req.setRequestHeader('Access-Control-Allow-Methods','GET');
// 响应头设置
// req.setRequestHeader('Access-Control-Allow-Headers','x-requested-with,content-type');
req.send(null);