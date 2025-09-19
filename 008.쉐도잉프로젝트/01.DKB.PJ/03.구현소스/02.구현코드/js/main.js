//도깨비 PJ메인 JS - main.js

//1. 큐브로고 박스 일정 간격으로 클래스 넣고 빼기
// -> 로고가 돈다!
// 지금은 1.5초씩 alternate하였으므로 총3초 걸림
//1-1. 대상선정 : .cube-logo
const cubeLogo = document.querySelector(".cube-logo");

// 1-2. 클래스 세팅함수
const setClass = () => {
    //    클래스 넣기
    cubeLogo .classList.add("rotate-cube");

// 3초후 클래스 제거하기
setTimeout(() => {
    cubeLogo.classList.remove("rotate-cube");
},3000);
/////6초 간격으로 실행하기!
};/////////setClass함수 //////////////

//1-3. 일정간격으로 클래스 셋팅함수 호출하기



// 일정간격으로 클래스 넣기
// setInterval(함수명,간격);
setInterval(setClass, 10000);


//1-4. 처음에 회전하도록 클래스 셋팅함수 호출
setClass();