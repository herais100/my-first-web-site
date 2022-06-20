var Body = {
  setColor : function(color){
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor : function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
var Links = {
  setColor : function LinksSetColor(color){
      var alist = document.querySelectorAll('a');
      var i = 0;
      while(i<alist.length){
      console.log(alist[i]);
          alist[i].style.color = color;
      i = i + 1;
    }
  }
}
function nightDayHandler(self){  /*함수생성  매개변수에 self가 들어간 이유임*/
  var target = document.querySelector('body');
  if(self.value === 'night'){
    Body.setBackgroundColor('yellow');
    Body.setColor('white');
    self.value = 'day';

    Links.setColor('powderblue');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';

    Links.setColor('blue');
  }
}
