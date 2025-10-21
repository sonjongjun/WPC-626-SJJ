// 도깨비 PJ 공통 JS - common.js///////////////


// 배너 슬라이드 함수 불러오기
import bannerFn from "./main1_jquery.js";


// default로 내보냈으므로 아무 이름이나 사용가능하다



// 같은 이름의 변수끼리의 충돌을 막기위해 지역변수화를 해줘야한다
// 방법은 (()=>{나의 코드})() 익명함수를 바로 실행하는 지역코드로 감싸준다!
// 나의 코드는 지역화가 되고 익명함수는 바로 실행된다
// -> (익명함수)() <<<<<<< 이렇게 쓰면 익명함수가 바로 실행된다

// 지역화 코드 시작//////////
(() => {
  // 1. 상단, 하단 공통 모듈 html넣기
  // 대상 : #top-area, #bottom-area, .banner-part, #spart-menu

  // 상단영역
  const $topArea = $("#top-area");
  // 하단영역
  const $bottomArea = $("#bottom-area");
  // 배너영역
  const $bannerPart =$(".banner-part");
  // 드라마 파트메뉴
  const $spartMenu = $("#spart-menu");

  // 2.대상에 load() 메서드로 html 넣기
//   load(파일경로, 로딩 후 실행함수)
 /* 1번 */ $topArea.load("./include/header.html", headerFn);
//   ㄴ>상단부 html파일이 모두 로딩 된 후 headerFn함수 실행됨!
 /* 2번 */ $bottomArea.load("./include/footer.html");
 /* 3번 */ $bannerPart.load("./include/banner.html", bannerFn);
//   ㄴ>배너부 html파일이 모두 로딩 된 후 bannerFn함수 실행됨!
// (2-4 파트메뉴 불러오기)
/* 4번 */ $spartMenu.load("./include/part_menu.html")

})(); // 지역화 코드 종료!!!!////////////





// 상단 파트에서 실행할 함수////////////////////////////
function headerFn() {
  /************************ 
  //  JS로 링크 시스템 만들기!
  ************************/
// 대상 : 상단영역 a요소
  const $topLink = $("#top-area a");
  $topLink.click(function(e){ //e-이벤트 객체
    // 기본이동 막기
    e.preventDefault();
    // 클릭된 a요소의 글자 읽기
    let aTxt = $(this).text();
    console.log(aTxt);
    // 분기하여 이동
    // 이동은 location.href로 이동 = '링크주소';
    switch(aTxt){
      case"로그인" : location.href="./login.html"; break;
      case"회원가입" : location.href="./member.html"; break;
    }//switch문
  });/////// click //////////////



  //도깨비 PJ메인 JS - main.js

  //1. 큐브로고 박스 일정 간격으로 클래스 넣고 빼기
  // -> 로고가 돈다!
  // 지금은 1.5초씩 alternate하였으므로 총3초 걸림
  //1-1. 대상선정 : .cube-logo
  const cubeLogo = document.querySelector(".cube-logo");

  // 1-2. 클래스 세팅함수
  const setClass = () => {
    //    클래스 넣기
    cubeLogo.classList.add("rotate-cube");

    // 3초후 클래스 제거하기
    setTimeout(() => {
      cubeLogo.classList.remove("rotate-cube");
    }, 3000);
    /////6초 간격으로 실행하기!
  }; /////////setClass함수 //////////////

  //1-3. 일정간격으로 클래스 셋팅함수 호출하기

  // 일정간격으로 클래스 넣기
  // setInterval(함수명,간격);
  setInterval(setClass, 10000);

  //1-4. 처음에 회전하도록 클래스 셋팅함수 호출
  setClass();

  /************************************************ 
    3. 햄버거 버튼 클릭시 상단영역에 클래스넣기
************************************************/
// (1) 이벤트 대상 : .btn-ham
const $btnHam = $(".btn-ham");
// (2) 변경 대상 : #top-area
const $topArea = $("#top-area");
// (3) 클래스넣기
$btnHam.on("click", () => {
  $topArea.toggleClass("on");
});/* click 이벤트!!   */


/**************************************************** 
    4. 상위메뉴 li 클릭시 서브메뉴에 클래스 on넣기
    ㄴ>클래스 on을 넣어 서브메뉴가 등장하게하기
****************************************************/
// (1) 이벤트 대상 : .gnb-menu>ul>li
const $gnbLi = $(".gnb-menu>ul>li").has(".sub-menu");
// has(선택자) 메서드 -> 자식으로 선택요소가 있는 요소를 선택함.
//ㄴ>.sub-menu가 있는 li를 선택하게된다.
// console.log($gnbLi);<< 확인완료!!

// 하위메뉴 보이기 숨기기 할 때 메뉴박스의 z-index:1 처리위해 대상선정
const $menuBox = $(".menu-box");



// (2) 이벤트 함수 구현하기 :
$gnbLi.click(function(){
//this 키워드로 클릭된 li 자신을 선택하여
//하위의 .sub-menu에 클래스 on 넣기
  $(this).find(".sub-menu").addClass("on");
  // addClass() 메서드는 ->선택된 요소에 클래스를 넣기!
  // 메뉴박스 z-index:1 처리하기
  $menuBox.css("z-index", 1);
});// click 이벤트! ////

// (3) 리스트 하위의 a요소 클릭시 페이지 이동막기
$gnbLi.find('a').click(e=>e.preventDefault());

// (4) 이전버튼 클릭시 클래스on 제거하기
// 대상 : btn-up의 부모요소인 .sub-menu의 클래스 on제거하기
$(".btn-up").click(function(e){
  console.log("이전버튼클릭");
  // 클릭된 버튼의 부모들중 .sub-menu에 클래스 on제거
  $(this).parents(".sub-menu").removeClass("on");
  // parents(특정부모요소) ->부모들 중에서 선택자에 맞는 요소를 선택
  // 비교) parent() ->바로 직계부모 하나만 선택

  // 주의 : 이전버튼은 부모li의 자식이므로 클릭시
  // 이벤트 버블링이 일어나서 부모 li가 다시 클릭된다
  // 따라서 on을 제거후 다시 on이 들어가는 현상이 발생한다
  // 여기서 이벤트 버블링 막기를 해야한다.
  e.stopPropagation();


   // 메뉴박스 z-index:0 처리하기
  $menuBox.css("z-index", 0);
});// click 이벤트! ////

 // 코드의 지역화 //////
  // (()=>{})()

  ////////// 스크롤시 상단영역 방향별 보이기/숨기기 //////
  (() => {
    // 변경대상 : 상단영역 .header
    const header = document.querySelector("#top-area");
    const stkMenu = document.querySelector("#spart-menu");
    // 스티키 세팅값
    let stkValue = 122;

    // 스크롤 방향 알아내는 원리:
    // (1) 아랫방향
    // 이전 스크롤위치값 < 현재 스크롤위치값
    // (2) 윗방향
    // 이전 스크롤위치값 > 현재 스크롤위치값

    // 이전 스크롤 위치값 저장변수
    let prevScroll = 0;

    // 스크롤 이벤트 설정하기
    window.addEventListener("scroll", () => {
      // 스크롤 위치값 구하기
      let curScroll = window.scrollY;
      // console.log('스크롤~~~~!', curScroll);

      // (1) 아랫방향
      // 이전 스크롤위치값 < 현재 스크롤위치값
      if (prevScroll < curScroll) {
        console.log("스크롤 내려간다~~!");
        // 스크롤 내려가면 메뉴 숨기기
        header.classList.add("hide");
        stkMenu.style.top = "0px";
      } /// if ////
      // (2) 윗방향 : 아랫방향이 아니면 윗방향
      // 이전 스크롤위치값 > 현재 스크롤위치값
      else {
        console.log("스크롤 올라간다~~!");
        // 스크롤 올라가면 메뉴 보이기
        header.classList.remove("hide");
        stkMenu.style.top = stkValue + "px";
      } /// else ////

      // 중요!!! 마지막에 이전스크롤위치를 저장!
      prevScroll = curScroll;
    }); /////////// scroll ///////////////
  })(); /// 스크롤시 상단영역 방향별 보이기/숨기기 //////
} ////////////// headerFn ///////////////
