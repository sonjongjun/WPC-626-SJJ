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