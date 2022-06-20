var Body = {
  setColor : function(color){
    //document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor : function(color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}
var Links = {
  setColor : function LinksSetColor(color){
    //   var alist = document.querySelectorAll('a');
    //   var i = 0;
    //   while(i<alist.length){
    //   console.log(alist[i]);
    //       alist[i].style.color = color;
    //   i = i + 1;
    // }
    $('a').css('color', color);//모든 a태그를 jquery로 제어하겠다 $('a')
  }
}
function nightDayHandler(self){  /*함수생성  매개변수에 self가 들어간 이유임*/
  var target = document.querySelector('body');
  if(self.value === 'night'){
    Body.setBackgroundColor('black');
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
