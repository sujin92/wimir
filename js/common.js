var headerSpace = document.querySelector("#header");
var headerCont = `
<header>
<div class="innerHeader">
  <h1 class="logo">
    <a href="/page/main/index.html"
      ><img id="logoChange" src="/images/logo_white.png" alt="위미르 로고"
    /></a>
  </h1>

  <ul class="gnb">
    <li>
      <a href="/page/companyPage/companyPage.html?id=intro" class="textChange">회사소개</a>
      <div id="subwrapper">
        <nav id="subnav">
          <ul class="inner">
            <li><a href="/page/companyPage/companyPage.html?id=intro">기업소개</a></li>
            <li><a href="/page/companyPage/companyPage.html?id=history">연혁</a></li>
            <li><a href="/page/companyPage/companyPage.html?id=group">조직도</a></li>
            <li><a href="/page/companyPage/companyPage.html?id=map">찾아오시는 길</a></li>
          </ul>
        </nav>
      </div>
    </li>

    <li>
      <a href="/page/businessPage/businessPage.html?id=monitoring" class="textChange">사업분야</a>
      <div id="subwrapper">
        <nav id="subnav">
          <ul class="inner">
            <li><a href="/page/businessPage/businessPage.html?id=monitoring">실시간 모니터링</a></li>
            <li><a href="/page/businessPage/businessPage.html?id=fems">FEMS</a></li>
            <li><a href="/page/businessPage/businessPage.html?id=work">작업지시</a></li>
            <li><a href="/page/businessPage/businessPage.html?id=consulting">컨설팅</a></li>
            <li><a href="/page/businessPage/businessPage.html?id=marketing">온·오프라인 홍보</a></li>
          </ul>
        </nav>
      </div>
    </li>

    <li>
      <a href="/page/technologyPage/technologyPage.html?id=result" class="textChange">기술현황</a>
      <div id="subwrapper">
        <nav id="subnav">
          <ul class="inner">
            <li><a href="/page/technologyPage/technologyPage.html?id=result">수행실적</a></li>
            <li><a href="/page/technologyPage/technologyPage.html?id=confirm">인증현황</a></li>
            <li><a href="/page/technologyPage/technologyPage.html?id=material">자료실</a></li>
          </ul>
        </nav>
      </div>
    </li>

    <li>
      <a href="/page/communityPage/communityPage.html?id=introduce" class="textChange">커뮤니티</a>
      <div id="subwrapper">
        <nav id="subnav">
          <ul class="inner">
            <li><a href="/page/communityPage/communityPage.html?id=introduce">제품소개</a></li>
            <li><a href="/page/communityPage/communityPage.html?id=information">정보공유</a></li>
            <li><a href="/page/communityPage/communityPage.html?id=sns">공식 SNS</a></li>
            <li><a href="/page/communityPage/communityPage.html?id=news">NEWS</a></li>
          </ul>
        </nav>
      </div>
    </li>

    <li>
      <a href="/page/staffPage/staffPage.html?id=type" class="textChange">인재채용</a>
      <div id="subwrapper">
        <nav id="subnav">
          <ul class="inner">
            <li><a href="/page/staffPage/staffPage.html?id=type">인재상</a></li>
            <li><a href="/page/staffPage/staffPage.html?id=recruitment">채용안내</a></li>
            <li><a href="/page/staffPage/staffPage.html?id=welfare">복리후생</a></li>
          </ul>
        </nav>
      </div>
    </li>

    <li>
      <a href="/page/centerPage/centerPage.html?id=notice" class="textChange">고객지원</a>
      <div id="subwrapper">
        <nav id="subnav">
          <ul class="inner">
            <li><a href="/page/centerPage/centerPage.html?id=notice">공지사항</a></li>
            <li><a href="/page/centerPage/centerPage.html?id=inquiry">문의하기</a></li>
            <li><a href="/page/centerPage/centerPage.html?id=faq">FAQ</a></li>
          </ul>
        </nav>
      </div>
    </li>
  </ul>

  <!-- 메뉴 전체보기 -->
  <div>
    <h2 class="textChange">ALL MENU</h2>
    <div class="menu" onclick="sideMenu();"></div>
  </div>
  <div class="side_menu">
    <a href="/page/main/index.html"><img src="/images/logo.png" alt="logo" width="96px" /></a>
    <img src="/images/wimir_background.png" alt="위미르" />
    <ul class="side_gnb">
      <li>
        <a href="#">회사소개</a>
        <ul class="side_inner">
          <li><a href="/page/companyPage/companyPage.html?id=intro">기업소개</a></li>
          <li><a href="/page/companyPage/companyPage.html?id=history">연혁</a></li>
          <li><a href="/page/companyPage/companyPage.html?id=group">조직도</a></li>
          <li><a href="#">찾아오시는 길</a></li>
        </ul>
      </li>
      <li>
        <a href="#">사업분야</a>
        <ul class="side_inner">
          <li><a href="/page/businessPage/businessPage.html?id=monitoring">실시간 모니터링</a></li>
          <li><a href="/page/businessPage/businessPage.html?id=fems">FEMS</a></li>
          <li><a href="/page/businessPage/businessPage.html?id=work">작업지시</a></li>
          <li><a href="/page/businessPage/businessPage.html?id=consulting">컨설팅</a></li>
          <li><a href="/page/businessPage/businessPage.html?id=marketing">온·오프라인 홍보</a></li>
        </ul>
      </li>
      <li>
        <a href="#">기술현황</a>
        <ul class="side_inner">
          <li><a href="/page/technologyPage/technologyPage.html?id=result">수행실적</a></li>
          <li><a href="/page/technologyPage/technologyPage.html?id=confirm">인증현황</a></li>
          <li><a href="/page/technologyPage/technologyPage.html?id=material">자료실</a></li>
        </ul>
      </li>
      <li>
        <a href="#">커뮤니티</a>
        <ul class="side_inner">
          <li><a href="/page/communityPage/communityPage.html?id=introduce">제품소개</a></li>
          <li><a href="/page/communityPage/communityPage.html?id=information">정보공유</a></li>
          <li><a href="/page/communityPage/communityPage.html?id=sns">공식 SNS</a></li>
          <li><a href="/page/communityPage/communityPage.html?id=news">NEWS</a></li>
        </ul>
      </li>
      <li>
        <a href="#">인재채용</a>
        <ul class="side_inner">
          <li><a href="/page/staffPage/staffPage.html?id=type">인재상</a></li>
          <li><a href="/page/staffPage/staffPage.html?id=recruitment">채용안내</a></li>
          <li><a href="/page/staffPage/staffPage.html?id=welfare">복리후생</a></li>
        </ul>
      </li>
      <li>
        <a href="#">고객지원</a>
        <ul class="side_inner">
          <li><a href="/page/centerPage/centerPage.html?id=notice">공지사항</a></li>
          <li><a href="/page/centerPage/centerPage.html?id=inquiry">문의하기</a></li>
          <li><a href="/page/centerPage/centerPage.html?id=faq">FAQ</a></li>
        </ul>
      </li>
    </ul>
    <div class="sidesns">
      <a href="#"
        ><img src="/icon/instagram.png" alt="인스타그램" width="30px"
      /></a>
      <a href="#"
        ><img src="/icon//facebook.png" alt="페이스북" width="30px"
      /></a>
      <a href="#"
        ><img src="/icon/blog.png" alt="네이버블로그" width="30px"
      /></a>
      <a href="#"
        ><img src="/icon/kakao.png" alt="카카오톡상담" width="30px"
      /></a>
    </div>
  </div>
</div>
</header>
`;
headerSpace.innerHTML = headerCont;

var quickmenuSpace = document.querySelector("#quickmenu");
var quickmenuCont = `
<ul>
        <li class="topnone">
          <a href="#">sns<br />바로가기</a>
        </li>
        <li class="topnone">
          <a href="#"
            ><img src="/icon/instagram.png" alt="인스타그램" width="30px"
          /></a>
        </li>
        <li class="topnone">
          <a href="#"
            ><img src="/icon/facebook.png" alt="페이스북" width="30px"
          /></a>
        </li>
        <li class="topnone">
          <a href="#"
            ><img src="/icon/blog.png" alt="네이버블로그" width="30px"
          /></a>
        </li>
        <li class="topnone">
          <a href="#">카카오톡<br />상담</a>
        </li>
        <li class="topnone">
          <a href="#"
            ><img src="/icon/kakao.png" alt="카카오톡" width="30px"
          /></a>
        </li>
        <li class="top">
          <a href="#"><i class="fa-solid fa-arrow-up"></i>TOP</a>
        </li>
      </ul>
`;
quickmenuSpace.innerHTML = quickmenuCont;

var footerSpace = document.querySelector("#footer");
var footerCont = `
<footer>
<div class="footerView">
  <div class="footerLeft">
    <img src="/images/logo_gray.png" alt="logo" width="70px" />
    <p>
      위미르(주)<br />
      대표이사 : 김영주 / 사업자등록번호 : 692-87-01416<br />
      사업장 주소 : 경남 창원 마산회원구 봉암북 7길 21 <br />
      정보산업진흥본부 3동 601호
    </p>
    <p>대표번호 : 055-299-6652 / FAX 055-299-6643</p>
    <p>Copyright ⓒ WIMIR Co.,Ltd. All Rights Reserved.</p>
  </div>
  <div class="footerRight">
    <ul>
      <li>
        <a href="/page/companyPage/companyPage.html?id=intro">회사소개</a>
        <ul>
          <li><a href="/page/companyPage/companyPage.html?id=intro">기업소개</a></li>
          <li><a href="/page/companyPage/companyPage.html?id=history">연혁</a></li>
          <li><a href="/page/companyPage/companyPage.html?id=group">조직도</a></li>
          <li><a href="/page/companyPage/companyPage.html?id=map">찾아오시는 길</a></li>
        </ul>
      </li>
      <li>
        <a href="/page/businessPage/businessPage.html?id=monitoring">사업분야</a>
        <ul>
          <li><a href="/page/businessPage/businessPage.html?id=monitoring">실시간 모니터링</a></li>
          <li><a href="/page/businessPage/businessPage.html?id=fems">FEMS</a></li>
          <li><a href="/page/businessPage/businessPage.html?id=work">작업지시</a></li>
          <li><a href="/page/businessPage/businessPage.html?id=consulting">컨설팅</a></li>
          <li><a href="/page/businessPage/businessPage.html?id=marketing">온·오프라인 홍보</a></li>
        </ul>
      </li>
      <li>
        <a href="/page/technologyPage/technologyPage.html?id=result">기술현황</a>
        <ul>
          <li><a href="/page/technologyPage/technologyPage.html?id=result">수행실적</a></li>
          <li><a href="/page/technologyPage/technologyPage.html?id=confirm">인증현황</a></li>
          <li><a href="/page/technologyPage/technologyPage.html?id=material">자료실</a></li>
        </ul>
      </li>
      <li>
        <a href="/page/communityPage/communityPage.html?id=introduce">커뮤니티</a>
        <ul>
          <li><a href="/page/communityPage/communityPage.html?id=introduce">제품소개</a></li>
          <li><a href="/page/communityPage/communityPage.html?id=information">정보공유</a></li>
          <li><a href="/page/communityPage/communityPage.html?id=sns">공식 SNS</a></li>
          <li><a href="/page/communityPage/communityPage.html?id=news">NEWS</a></li>
        </ul>
      </li>
      <li>
        <a href="/page/staffPage/staffPage.html?id=type">인재채용</a>
        <ul>
          <li><a href="/page/staffPage/staffPage.html?id=type">인재상</a></li>
          <li><a href="/page/staffPage/staffPage.html?id=recruitment">채용안내</a></li>
          <li><a href="/page/staffPage/staffPage.html?id=welfare">복리후생</a></li>
        </ul>
      </li>
      <li>
        <a href="/page/centerPage/centerPage.html?id=notice">고객지원</a>
        <ul>
          <li><a href="/page/centerPage/centerPage.html?id=notice">공지사항</a></li>
          <li><a href="/page/centerPage/centerPage.html?id=inquiry">문의하기</a></li>
          <li><a href="/page/centerPage/centerPage.html?id=faq">FAQ</a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>
</footer>
`;
footerSpace.innerHTML = footerCont;
