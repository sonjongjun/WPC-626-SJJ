// JS실험실 : 04.스크롤액션 JS

// 나의 함수 불러오기
import myFn from "./my_function.js";

// 이 함수를 내보내기 세팅하기!!/////
export default function scrollAction(){
    


// 1. 대상선정 :
// (1) 이벤트 대상 : window
// (2) 변경대상 : .scroll-act
const daesang = myFn.qsa(".scroll-act");

// 등장위치값 계산변수
let gijun = window.innerHeight / 3 * 2;

// 기준검사함수
const checkFn = (el) =>{
// 등장 위치값(top)
    let pos =el.getBoundingClientRect().top;

    // 기준검사
    if(pos < gijun){
        el.classList.add("on");
    }//////if문
    else{
        el.classList.remove("on");
    }///////else///////////
}

// 2. 이벤트 설정하기 ////////
window.addEventListener('scroll',()=>{

    console.log('scroll활성');

    //대상의 개수만큼 하나씩 반복하여 
    // checkFn 함수로 보내준다!
    // 그러면 함수에서 해당 대상에게 on 클래스를 더해준다!
    daesang.forEach(el=>checkFn(el));
}); //scroll 이벤트
};/////// scrollAction();