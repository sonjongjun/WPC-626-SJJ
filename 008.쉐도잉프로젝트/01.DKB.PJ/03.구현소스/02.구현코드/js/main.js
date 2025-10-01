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

/******************************************************** 
        최신동영상 파트에 스와이퍼 적용하기

********************************************************/

var videoSwiper = new Swiper(".clip-box", {
  /* 한 화면에 보일 슬라이드 개수 */
  // breakpoints덕분에 따로 세팅필요가없다
  // slidesPerView: 4,
  /* 슬라이드 사이의 간격 - 따옴표없이 숫자만 쓰면 px임 */
  // spaceBetween: "20vw",
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },

  // 화면크기별 스와이퍼 슬라이드 갯수
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: "5vw",
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: "10vw",
    },
    // when window width is >= 1000px
    1000: {
      slidesPerView: 4,
      spaceBetween: "15vw",
    },
  }, ///// breakpoints //////
}); ///// swiper //////

// 선택시 주의 : .ab1, .ab2가 배너에도 있다
const btnPrev = document.querySelector("#video-part .ab1");
const btnNext = document.querySelector("#video-part .ab2");
console.log(btnPrev, btnNext);

// 이전 버튼은 처음 로딩시 숨기기
btnPrev.style.display = "none";

btnNext.addEventListener("click", () => {
    console.log("다음버튼 클릭");
  videoSwiper.slideNext();
});

// 이전버튼 클릭시 Swiper API를 이용한 코딩하기!!!
btnPrev.addEventListener("click", () => {
  videoSwiper.slidePrev();
});



videoSwiper.on("slideChange", () => {
  console.log("맨처음?", videoSwiper.isBeginning);
  console.log("맨끝?", videoSwiper.isEnd);
  // 맨처음인가? 맨끝인가?에 따른 분기
  if (videoSwiper.isBeginning) {
    btnPrev.style.display = "none";
  } /// if ////
  else if (videoSwiper.isEnd) {
    btnNext.style.display = "none";
  } /// else if ////
  else {
    btnPrev.style.display = "inline-block";
    btnNext.style.display = "inline-block";
  } /// else ////
}); //slideChange 이벤트
