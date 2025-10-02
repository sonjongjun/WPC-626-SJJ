// 03.스크롤 액션 예비편 JS
                    /////////////////////////////////////////////////////////////////////////
                    // 목표 : 각 위치로부터 스크롤되어 올라오는 비행기 박스의////////////////
                    // 보이는 화면 top위치로부터의 거리를 px로 화면출력하고////////////////
                    // 스크롤 이벤트와 함께 위치값을 구하는 코드를 연습한다////////////////
                    /////////////////////////////////////////////////////////////////////
// 화면 상단으로 부터 위치값을 리턴해주는 JS객체는?
// getBoundingClientRect() 메서드를 사용하여
// top값을 구할 수 있다!-> 소수점아래 2자리 까지만 표기
const getBCR = (el) => el.getBoundingClientRect().top.toFixed(1);
// ->toFixed(소수점 자리수)

// 화면높이값의 3/1지점값 구하기
// 즉, 윈도우 높이 2/3크기이다.
const winH = window.innerHeight * 2/3;
console.log('윈도우 높이:',winH);


// [ 위치값 화면에 찍기 구현코드 ]///////////////////
// 대상 : .track aside
const airp = document.querySelectorAll('.track aside');
console.log('비행기:',airp);

// 비행기의 3개의 span
let a1Span = airp[0].querySelector('span');
let a2Span = airp[1].querySelector('span');
let a3Span = airp[2].querySelector('span');




// [ 스크롤 이벤트 구현코드 ]
// 이벤트 대상 : window
// 이벤트 종류 : scroll 이벤트
window.addEventListener('scroll',()=>{ 

    console.log('scroll활성',getBCR(airp[0]));
// 각 비행기 위치변수
let a1Top = getBCR(airp[0]);
let a2Top = getBCR(airp[1]);
let a3Top = getBCR(airp[2]);

    // 첫번째 비행기 위치값 출력하기
    a1Span.innerText = a1Top;
    // 두번째 비행기 위치값 출력하기
    a2Span.innerText = a2Top;
    // 세번째 비행기 위치값 출력하기
    a3Span.innerText = a3Top;

// 해당위치에 비행기박스 올 때 클래스 action class 주기
// 첫번째 비행기 박스의 top값< 윈도우 높이
if(a1Top < winH) airp[0].classList.add('action');
else airp[0].classList.remove('action');
if(a2Top < winH) airp[1].classList.add('action');
else airp[1].classList.remove('action');
if(a3Top < winH) airp[2].classList.add('action');
else airp[2].classList.remove('action');
});//scroll 이벤트 