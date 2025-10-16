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
  // 대상 : #top-area, #bottom-area
  const $topArea = $("#top-area");
  const $bottomArea = $("#bottom-area");
  const $bannerPart =$(".banner-part");

  // 2.대상에 load() 메서드로 html 넣기
//   load(파일경로, 로딩 후 실행함수)
 /* 1번 */ $topArea.load("./include/header.html", headerFn);
//   ㄴ>상단부 html파일이 모두 로딩 된 후 headerFn함수 실행됨!
 /* 2번 */ $bottomArea.load("./include/footer.html");
 /* 3번 */ $bannerPart.load("./include/banner.html", bannerFn);
//   ㄴ>배너부 html파일이 모두 로딩 된 후 bannerFn함수 실행됨!
})(); // 지역화 코드 종료!!!!////////////





// 상단 파트에서 실행할 함수////////////////////////////
function headerFn() {
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
} //headerFn/////////////////




