
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
