//가로방향 배너 슬라이드 : 
// 제이쿼리 버전 - main1_jqery.js


//1.대상
//1-1. 이벤트 대상 : 이동버튼 2개 - .ab1, .ab2
//1-2. 변경 대상 : 슬라이드박스 - .slide
const $slide = $('.banner-slide');
// 보통 제이쿼리 선택할당은 변수명앞에 $로 시작
// ex) $slide, $btnMove

// 2. 구현하기
// 2-1. 오른쪽 이동버튼 클릭시 기능구현

// 슬라이드 순번 전역변수
let seq = 0;

// 클릭이벤트 설정하기
$('.ab2').click(()=>{
// 슬라이드 순번 전역변수 1증가
seq++;
// 2가 한계이므로 처리
if(seq > 2) seq = 0;
// 슬라이드의 translate값을 변경하기
$slide.css({
    translate: (-100 * seq) + '%',
    transition: '.5s'
});//css//////////////

});

// 클릭이벤트 설정하기
$('.ab1').click(()=>{
// 슬라이드 순번 전역변수 1감소
seq--;
// 0이 한계이므로 처리
if(seq < 0) seq = 2;
// 슬라이드의 translate값을 변경하기
$slide.css({
    translate: (-100 * seq) + '%',
    transition: '.5s'
});//css//////////////

});