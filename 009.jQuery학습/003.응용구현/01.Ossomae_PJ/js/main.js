// // 옷소매 갤러리 JS - main.js

// // import mFn from "./my_function.js";

// /*********************************************************** 
//     1. 기능정의: 
//         버튼 클릭시 갤러리박스를 잘라서 앞/뒤로 이동함

//     1-1. 오른쪽버튼 클릭시 - 맨앞div 맨뒤로 이동
//         JS -> 갤러리부모박스.appendChild(맨앞자식div)
//         제이쿼리 -> 갤러리부모박스.append(맨앞자식div)

//     1-2. 왼쪽버튼 클릭시 - 맨뒤div 맨앞으로 이동
//         JS -> 갤러리부모박스.insertBefore(맨뒤자식div,맨앞자식div)
//         제이쿼리 -> 갤러리부모박스.prepend(맨뒤자식div)

//  ***********************************************************/

// 변경대상 변수할당 : .gbx>div
const $target = $('.gbx');




// 1. 오른쪽 이동버튼 클릭시
$('.rb').click(()=>{
    // 광클 금지 넣기/////(문고리)
    if(blockClick()) return;
    // 맨앞 div를 맨 뒤로 이동
    $target.append($target.find('div').first());
});//rb click/////////////



// 2. 왼쪽 이동버튼 클릭시
$('.lb').click(()=>{
    // 광클 금지 넣기
    if(blockClick()) return;
    // 맨뒤 div를 맨 앞으로 이동
    $target.prepend($target.find('div').last());
});//lb click/////////////



/********************************* 
// 광클 금지 함수 만들기!!!!!!!!!!!
*********************************/

// [1]광클금지 상태변수
let stopClick = false;
// 값이 true면 클릭허용/flase면 금지

// [2]광클 금지 해제시간 상수세팅하기
const TIME_GAP = 400;


// 광클금지 
function blockClick(){
    // 1.만약(if)에 광클이라면 true를 리턴한다
    if(stopClick) return true;

    // 2.클릭 가능상태라면?? 전역변수 세팅
    stopClick = true;
    setTimeout(()=>stopClick=false, TIME_GAP);

    //3.상태값 리턴  (클릭가능상태 false)
    return false;
};///////////blickClick함수 //////////


/**********************************
*********자동넘김 세팅하기**********
**********************************/
// 1) 인터벌,타임아웃 저장용 변수
let autoI,autoT;
// ㄴ> 이 변수는 clear시 사용할것

// 1-2) 인터벌 타임아웃 시간 상수세팅하기
const INT_TIME = 2000;
const TO_TIME = 5000;

// 자동호출함수 최초호출하기
slideAuto();

// 2) 자동호출 함수////////
function slideAuto(){
    // 지우기위해 전역변수 autoI에 할당한다
    autoI = setInterval(()=>{
         // 맨앞 div를 맨 뒤로 이동
    $target.append($target.find('div').first());
    },INT_TIME);
}///////자동 넘기기 함수


// 이동버튼 클릭시 지우기 함수 호출하기
$('.abtn').click(clearAuto);


// 3)건들면 멈추기 함수
function clearAuto(){
    // 3-1)인터벌 지우기
    clearInterval(autoI);

    // 3-2)타임아웃 지우기 : 실행이 쌓이는것을 방지
    clearTimeout(autoT);



    // 3-3)타임아웃 세팅하기(일정시간 지나고 다시 호출)
    autoT = setTimeout(slideAuto,TO_TIME);


}////////////clearAuto 함수







// ////////////////////////////////////
// //자바스크립로 버튼 이동구현하기 /////
// // 변경대상 : .gbx///////////////////
// /////////////////////////////////////
// const gbx = document.querySelector('.gbx');



// //1. 오른쪽 이동버튼 클릭시
// // ㄴ> appendChild(맨앞자식div)
// // ㄴ> 맨앞 div를 맨 뒤로 이동!
// document.querySelector('.rb').onclick = ()=>{
//     console.log('오른쪽버튼 클릭');
//     gbx.appendChild(gbx.firstElementChild);
//     // === firstElementChild: .gbx>div:nth-child(1)
//     // 자식요소중 첫번째 요소를 선택한다.
//     // 맨뒤로 이동시키기
//     };//rb click/////////////






// //1. 왼쪽 이동버튼 클릭시
// // ㄴ> insertBefore(맨뒤자식div,맨앞자식div)
// // ㄴ> 맨뒤 div를 맨 앞으로 이동!
// document.querySelector('.lb').onclick = ()=>{
// console.log('왼쪽버튼 클릭');
// gbx.insertBefore(gbx.lastElementChild,gbx.firstElementChild);
// // === lastElementChild: .gbx>div:nth-child(4)
// // 자식요소중 마지막번째 요소를 선택한다.
// // 맨앞로 이동시키기
// };//lb click/////////////




// 