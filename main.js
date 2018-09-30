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

var boo1 = false;
btns[0].onclick = function () {
  var len = list1.length;
  for ( ; len -- > 0; ) {
    list1[len].style.display = boo1 ? "none" : "";
  }
  this.className = boo1 ? "block dark" : "block";
  boo1 = !boo1;
}

var boo2 = false;
btns[1].onclick = function () {
  var len = list1.length;
  for ( ; len -- > 0; ) {
    list2[len].style.display = boo2 ? "none" : "";
  }
  this.className = boo2 ? "block dark" : "block";
  boo2 = !boo2;
}