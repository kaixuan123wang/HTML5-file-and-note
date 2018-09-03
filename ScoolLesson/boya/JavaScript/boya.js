
  var show = function (n) {
      var imageWidth = $('.banner').width;
      $('.num>li').eq(n).css('backgroud','#fff').siblings().css('background','#ccc');
      $('.banner>div>ul').stop(true,false).animate({
          left:-n*imageWidth
      },1000)
  };
  var n = 0;
  var i = 0;
  var timer = null;
  var m = function () {
      if(i>=5){
          i = 0;
      }
      show(i);
      i += 1;
      timer=setTimeout(m,1000);
  };
  $(function () {
      $('.num>li').hover(function(){
          n = $(this).index();
          clearTimeout(timer);
          show(n)
      },function (){
          i = n;
          m();
      });
      $('.banner>div>ul').hover(function () {
          clearTimeout(timer);
      },function () {
          m();
      }).trigger('mouseleave');
  });
