// 도깨비 PJ 메인페이지 JS - main.js

// 데이터 불러오기
import { previewData, catData } from "../data/dkb_data.js";
console.log(catData);

//스크롤 액션 불러와서 실행하기
import  scrollAnimation  from "./scroll_action.js";
// 콘솔 찍어보기
console.log(scrollAnimation);
// 호출하기~
scrollAnimation();
/******************************************************** 
        1.미리보기 데이터 바인딩하기

********************************************************/
// 데이터를 요소에 넣어서 화면에 출력하는것을
// 데이터 바인딩 이라고 한다!
// (1) 바인딩 대상 : .preview-box .cont-box
const previewArea = document.querySelector(".preview-area ul.cont-box");
console.log(previewArea);
// (2) 바인딩 데이터 : previewData

// (3) 반복구조의 예시
/* <li>
    <h3>제목</h3>
    <p>내용</p>
  </li> 
  */
// (4) 데이터 바인딩하기 : map().join('') 사용하기
// 배열.map((배열값,순번)=> 리턴값)-> 새로운배열 생성
previewArea.innerHTML = previewData
  .map(
    (v) => `
  <li>
    <h3>${v.title}</h3>
    <p>${v.story}</p>
  </li> 
  `
  )
  .join("");

/********************************* 
      2.캐릭터 소개 영역 데이터 바인딩하기
  *********************************/
// 바인딩 대상: .cat-box
const catBox = document.querySelector(".cat-box");
console.log(catBox);
// 바인딩 데이터: catData

// 데이터 바인딩 태그구조:
/* 
<!-- 공유박스 -->
<div>
  <!-- 이미지박스 -->
  <figure>
    <img src="./images/dc1.png" alt="공유" />
    <figcaption>
      <img src="./images/d01.png" alt="도깨비진한글자" />
      <img src="./images/d011.png" alt="도깨비흐린글자" />
    </figcaption>
  </figure>
  <!-- 글박스 -->
  <aside class="scbar">
    <!-- 타이틀 -->
    <h3>도깨비(김신), 939세</h3>
    <!-- 내용 -->
    <p>
    </p>
  </aside>
</div>
*/

// 데이터 바인딩하기 : map().join('') 사용하기!!
catBox.innerHTML = catData
  .map(
    (v) => `
 <!-- ${v.actorName}박스 -->
<div>
  <!-- 이미지박스 -->
  <figure>
    <img src="./images/dc${v.idx}.png" alt="${v.actorName}" />
    <figcaption>
      <img src="./images/d${0 + v.idx}.png" alt="${v.actorName}진한글자" />
      <img src="./images/d${0 + v.idx + v.idx}.png" alt="도깨비흐린글자" />
    </figcaption>
  </figure>
  <!-- 글박스 -->
  <aside class="scbar">
    <!-- 타이틀 -->
    <h3>${v.catTitle}</h3>
    <!-- 내용 -->
    <p>
    ${v.catContent.replace(/\n/g, "<br />")}
    </p>
  </aside>
</div>
  `
  )
  .join("");
/* 정규식의 대한 설명서 */
// [기존 캐릭터 소개글에서 엔터부분에 br태그 넣기 ]
// 문자열중 특정문자를 변경해주는 메서드는?
// replace()
// 문자열. replace(바꿀문자열, 바뀔문자열)
//  ㄴ> 이렇게 하면 문자 하나만 변경되므로
//   ㄴ> 정규식을 사용해서 선택해야 모두 변경된다!
// 정규식은 문자열의 패턴을 찾아주는 문법이다.
// ->.replace(/선택문자열/g,'바뀔문자열')
// 정규식은 슬래쉬 사이에 쓴다.
// -> 정규식 슬래쉬 뒤에 g문자는 global(전체)라는 의미
// 그러면 모두 찾아서 변경을 한다.
// ->\n은 엔터기호를 찾아낸다
//.replace(/\n/g, "<br>")

/******************************************************** 
        3.최신동영상 파트에 스와이퍼 적용하기

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
