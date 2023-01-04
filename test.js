$(function(){

  var nowIdx = 0;/*Math.floor(Math.random());*///article의 index번호 0~4
  var aniChk = false; // 페이지가 animate 중인지 표현하는 변수 (true:애니메이트 중)

  //header의 top값을 브라우저의 세로중앙에 위치

  $("header").css({
      "top" : ($(window).height()-$("header").height())/2
              //(브라우저의 높이-header의 높이)/2
  });

  //브라우저의 크기상태가 변화될때 실행되는 구문

  $(window).resize(function(){
    $("header").css({
      "top" : ($(window).height()-$("header").height())/2
              //(브라우저의 높이-header의 높이)/2
      });     
  });

  /* 배열을 이용해서 유동적인 데이터 값을 한꺼번에 핸들링할 (다룰) 수 있다. 배열*/

  /* 배열은 저장할 값들이 일정한 패턴을 가지고 있지 않을 때 사용하면 매우 편리하게 값을 관리 할 수 있는 장점이 있다.*/

  var arrTopVal = [];//각 article의 top 값

  //어떤 요소의 top값 (문서/브라우저/body로 부터의 거리)을 구하는 방법 => .offset() 메소드 사용

arrTopVal[0]=$(".cont_0").offset().top;

arrTopVal[1]=$(".cont_1").offset().top;

  /* 함수는 반복되는 코드를 만들어 놓고 사용하면 코드의 재활용 측면에서 유용하다.*/

var pageAni=function(topVal){

  aniChk = true;
    $("html,body").stop().animate({
      "scrollTop": topVal
    },function(){
        aniChk = false;
    });
  };

  //페이지 load된 시점에 작동

  $(window).load(function(){
      pageAni(arrTopVal[0]);
  });


  /*마우스 휠 스크롤 이벤트*/

  $(window).on("mousewheel DOMMouseScroll",function(evt){
      if(aniChk==false){
          evt.originalEvent.wheelDelta; //크롬 up:120,down:-120이찍힘
          evt.originalEvent.detail;//파이어폭스 up:-3,down:3이찍힘
          if(evt.originalEvent.wheelDelta>0 || evt.originalEvent.detail<0){ 
              //마우스 휠을 위쪽으로 스크롤 했을 때
            if(nowIdx>0){
                nowIdx--;
            }
            pageAni(arrTopVal[nowIdx]);
          }else{ 
              //마우스 휠을 아래쪽으로 스크롤 했을 때
            if(nowIdx<4){
                nowIdx++;
              }
              pageAni(arrTopVal[nowIdx]);
          }
      }
  });

});