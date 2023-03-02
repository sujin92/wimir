// 네비 바 (scroll)
let isOpen = false;
var isTop = false;

$(document).ready(function () {
  SetEvent();
  SetUI();
  window.onkeydown = function () {
    var kcode = event.keyCode;
    let id = "";
    if (kcode == 116 || (event.ctrlKey == true && (kcode == 78 || kcode == 82))) {
      id = location.href.split("?id=")[1];
      if (!isTop) {
        if (id.indexOf("&") != -1) {
          id = id.split("&")[0];
        }
      }

      history.replaceState({}, null, location.pathname + "?id=" + id);
    }
  };
});

function SetUI() {
  if (location.href.indexOf("&top=y") != -1) {
    isTop = true;
    $(".innerHeader").addClass("on");
    $(".innerHeader .gnb > li > div nav .inner").addClass("on");

    document.getElementById("logoChange").src = "/images/logo.png";

    let textChanges = document.getElementsByClassName("textChange");
    for (let i = 0; i < textChanges.length; i++) {
      let textChange = textChanges.item(i);
      textChange.style.color = "#333333";
    }
  }
}

function SetEvent() {
    $(".innerHeader").mouseover(header_on);
    $(".innerHeader").mouseout(header_off);
}

function header_on() {
  isTop = true;

  $(".innerHeader").addClass("on"); 
  $(".innerHeader .gnb > li > div nav .inner").addClass("on");

  document.getElementById("logoChange").src = "/images/logo.png";

  let textChanges = document.getElementsByClassName("textChange");
  for (let i = 0; i < textChanges.length; i++) {
    let textChange = textChanges.item(i);
    textChange.style.color = "#333333";
  }
}

function header_off() {
  isTop = false;
  if (!$(".side_menu").hasClass("active")) {
    $(".innerHeader ").removeClass("on");
    $(".innerHeader .gnb > li > .inner").removeClass("on");

    if (!$("header").hasClass("activated")) {
      document.getElementById("logoChange").src = "/images/logo_white.png";
      let textChanges = document.getElementsByClassName("textChange");
      for (let i = 0; i < textChanges.length; i++) {
        let textChange = textChanges.item(i);
        textChange.style.color = "#ffffff";
      }
    }
  }
}

const scrollPage = (event) => {
  event.preventDefault();
  let delta = 0;

  if (!event) event = window.event;
  if (event.wheelDelta) {
    delta = event.wheelDelta / 120;
    if (window.opera) delta = -delta;
  } else if (event.detail) delta = -event.detail / 3;

  let moveTop = window.scrollY;
  let elmSelector = document.querySelector(".slider");

  let header_height = $("header").height();

  if (delta < 0) {
    if (elmSelector !== 0) {
      try {
        moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top - header_height - 20;
      } catch (e) {}
    }
  }
  const body = document.querySelector("html");
  window.scrollTo({ top: moveTop, left: 0, behavior: "smooth" });
  document.querySelector(".slider").removeEventListener("mousewheel", scrollPage);
};

$(function () {
  $(window).scroll(function () {
    let navbar = $(this).scrollTop();
    // console.log(navbar);
    let $header = $("header");

    if (navbar <= 10) {
      document.querySelector(".slider").addEventListener("mousewheel", scrollPage);
    }

    if (navbar > 480) {
      $header.addClass("activated");
      document.getElementById("logoChange").src = "/images/logo.png";
      let textChanges = document.getElementsByClassName("textChange");
      for (let i = 0; i < textChanges.length; i++) {
        let textChange = textChanges.item(i);
        textChange.style.color = "#333333";
      }
    } else {
      $header.removeClass("activated");
      if (!$(".innerHeader").hasClass("on")) {
        document.getElementById("logoChange").src = "/images/logo_white.png";
        let textChanges = document.getElementsByClassName("textChange");
        for (let i = 0; i < textChanges.length; i++) {
          let textChange = textChanges.item(i);
          textChange.style.color = "#ffffff";
        }
      }
    }
  });
});

// business 이동
window.onload = function () {
  const target = document.querySelector(".slider");

  target.addEventListener("mousewheel", scrollPage);
};

// 퀵메뉴
$(document).ready(function () {
  let currentPosition = parseInt($(".quickmenu").css("top"));
  $(window).scroll(function () {
    let position = $(window).scrollTop();
    $(".quickmenu")
      .stop()
      .animate({ top: position + currentPosition + "px" }, 100);
  });
  const topMove = document.querySelector(".top").offsetHeight;

  goToSection2 = () => {
    window.scrollTo({ top: topMove, behavior: "smooth" });
  };

  const quickMenu = document.querySelector(".quickmenu");

  window.addEventListener(
    "scroll",
    _.throttle(function () {
      // console.log(window.scrollY);
      if (window.scrollY > 500) {
        quickMenu.style.display = "block";
      } else {
        quickMenu.style.display = "none";
      }
    }, 300)
  );
});

// 전체메뉴
function sideMenu() {
  let menu = document.querySelector(".menu");
  let side_menu = document.querySelector(".side_menu");
  menu.classList.toggle("active");
  side_menu.classList.toggle("active");

  isOpen = !isOpen;
  if (isOpen) $("header").off("mouseleave", scrollPage);
  else $("header").on("mouseleave", scrollPage);
  if (window.innerWidth < 581) {
    if ($(menu).hasClass("active")) {
      $("body").css("overflow", "hidden");
    } else {
      $("body").css("overflow", "auto");
    }
  }
}

// 모바일 전체메뉴
$(function () {
  let windowWidth = $(window).width();
  if (windowWidth < 580) {
    const acoAco = $(".side_gnb li a");

    acoAco.on("click", function () {
      const item = $(this);
      let speed = 300;

      acoAco.parent().find(".side_inner").stop().slideUp(speed);
      if (item.hasClass("active")) {
        item.find(".side_inner").stop().slideUp(speed);
        item.removeClass("active");
      } else {
        item.parent().find(".side_inner").stop().slideDown(speed);
        acoAco.removeClass("active");
        item.addClass("active");
      }
    });
  }
});

//메인 이미지슬라이드
$(function () {
  if ($(".visual").length != 0) {
    $(".visual").slick({
      arrows: true,
      dots: true,
      fade: true,
      autoplay: true,
      pauseOnHover: false,
      pauseOnFocus: false,
      autoplaySpeed: 2800,
      prevArrow: "<i class='prev-arrow fa-solid fa-chevron-left'></i>",
      nextArrow: "<i class='next-arrow fa-solid fa-chevron-right'></i>",
      customPaging: function (slider, i) {
        var tit = $(slider.$slides[i]).find(".dot").html();
        return '<div class="pager-tit" class= "+ i +">' + tit + "</div>";
      },
    });
  }
});

//이미지슬라이드- 넓이 높이 스크립트
$(function () {
  let winW = $(window).width();
  //let winH = $(window).height();
  let winH = window.innerHeight;

  list = $(".visual .list");
  list.css({ width: winW + "px", height: winH + "px" });
});

// 섹션 에니메이션
$(function () {
  let windowWidth = $(window).width();
  if (windowWidth < 600) {
    $(window).scroll(function () {
      let sct = $(this).scrollTop();

      $("section").each(function () {
        let sectionOST = $(this).offset().top - 900;
        let sectionEffect = $(this).attr("data-effect");
        if (sct >= sectionOST) {
          $(this).addClass(sectionEffect);
        }
      });
    });
  } else {
    $(window).scroll(function () {
      let sct = $(this).scrollTop();

      $("section").each(function () {
        let sectionOST = $(this).offset().top - 800;
        let sectionEffect = $(this).attr("data-effect");
        if (sct >= sectionOST) {
          $(this).addClass(sectionEffect);
        }
      });
    });
  }
});

//businessPage 슬라이드
$(function () {
  if ($(".business").length != 0) {
    $(".business").slick({
      arrows: true,
      dots: true,
      fade: true,
      autoplay: true,
      pauseOnHover: false,
      pauseOnFocus: false,
      autoplaySpeed: 2800,
      prevArrow: "<i class='prev-arrow fa-solid fa-chevron-left'></i>",
      nextArrow: "<i class='next-arrow fa-solid fa-chevron-right'></i>",
      customPaging: function (slider, i) {
        var tit = $(slider.$slides[i]).find(".dot").html();
        return '<div class="pager-tit" class= "+ i +">' + tit + "</div>";
      },
    });
  }
});

$(function () {
  let winW = $(window).width();
  //let winH = $(window).height();
  let winH = window.innerHeight;

  list = $(".business .list_2");
  list.css({ width: winW + "px", height: winH + "px" });
});

// 카운터
$(function () {
  if ($(".count").length != 0) {
    $(".count").counterUp({
      delay: 10,
      time: 1000,
    });
  }
});

// 탭 슬라이드
$(function () {
  if ($(".swiper-container2").length != 0) {
    let swiper = new Swiper(".swiper-container2", {
      slidesPerView: 4,
      spaceBetween: 24,
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      autoplay: {
        delay: 1000,
      },
      breakpoints: {
        200: {
          slidesPerView: 1.5,
          spaceBetween: 24,
        },
        300: {
          slidesPerView: 1.5,
          spaceBetween: 24,
        },
        400: {
          slidesPerView: 1.5,
          spaceBetween: 24,
        },
        500: {
          slidesPerView: 1.5,
          spaceBetween: 24,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        960: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },
    });

    // 제품 탭 메뉴
    let movBtn = $(".product_title > ul > li");
    let movCont = $(".product_chart > div");

    movCont.hide().eq(0).show();

    movBtn.click(function (e) {
      e.preventDefault();
      var target = $(this);
      var index = target.index();
      movBtn.removeClass("active");
      target.addClass("active");
      movCont.css("display", "none");
      movCont.eq(index).css("display", "block");
    });
  }
});
