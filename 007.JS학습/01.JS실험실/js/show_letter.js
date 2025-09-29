// 글자등장1 JS show_letter.js/////////

// 나의 함수 가져오기
import myFn from "./my_function.js";
// js확장자를 생략가능한 것은 node.js 에서만 가능하다
// 브라우저는 확장자를 꼭 써야한다.
console.log(myFn);

/************************************************************************* 
************************************************************************
    [ 요구사항 분석하기 ]

1. 글자가 한 글자씩 화면에 등장하기 위한 세팅은?
->
2. 등장할 글자를 배열에 미리 세팅한다.
3. 각 박스를 돌면서 글자를 넣어준다.
4. 글자는 한 글자씩 잘라서 span 태그로 감싼다.
5. span은 transition 지연시간을 세팅한다.
6. 해당 등장 스타일 클래스를 넣어준다.
7. 글자등장 시점에 해당 스타일 클래스에 on 클래스를 더해준다.

    [ 추가 미션 ]
1. html에 .stage-letters 박스하나 더 추가
2. myText 배열에 글자 하나 더 추가 
3. .style4 클래스를 추가하여 다른 스타일로 등장하기
3. .style4와  .style.on을 CSS에 추가하기

************************************************************************
*************************************************************************/
// 2. 등장할 글자를 배열에 미리 세팅한다.
const myText = [
  "너의 췌장을 먹고싶어🐷",
  "추락하는 것은 날개가 있다🦅",
  "뻐꾸기 둥지 위로 날아간 새🐓",
  "나는 강아지입니다🐶"
];

// 박스 대상 : stage-letters
const stage = myFn.qsa(".stage-letters");
console.log(stage);

//3. 각 박스를 돌면서 글자를 넣어준다.

stage.forEach((el,idx)=>{
    // el - 각 박스요소, idx - 순번!
    // 순번은 배열의 글자 순번으로 사용!
    
    console.log(el,idx);
    // 각 박스에 글자 넣기
    el.innerHTML = wrapSpan(myText[idx]);

    // wrapSpan(wrapSpan(myText[idx]));
    // el.innerHTML = myText[idx];

    // 6. 등장 스타일 클래스를 넣어준다.
    // 순서대로 .style1, style2, style3
    el.classList.add(`style${idx+1}`);

    // 7. 글자등장 시점에 해당 스타일 클래스에 on 클래스를 더해준다.
    // setTimeout(함수, 시간)
    setTimeout(() => {
        el.classList.add("on");
    }, 1000 * (idx+1));//1,2,3초
});
// forEach

// 4. 글자는 한 글자씩 잘라서 span 태그로 감싼다.
// 5. span은 transition 지연시간을 세팅

// 글자를 span으로 감싸는 함수 만들기
function wrapSpan(txt){
// 함수호출확인 및 전달값 확인
console.log('wrapSpan호출!',txt);
// 글자를 잘라서 span태그로 감싸기
// 결과변수 : 리턴할 값을 담을 변수
let result = '';

// 지연시간변수 : 트랜지션 지연시간을 담을 변수
let delayTime = 0;

// for of 문으로 글자 자르기
// span으로 감쌀때 트랜지션 지연시간도 같이 넣기
for(let x of txt){
    //띄어쓰기 공백문자일 경우 b태그로 처리
    if(x===' ') {
        result += `<b></b>`;
}// if
// 그밖의 경우에는span태그로 싸기
else{
    result += `
    <span
    style="transition-delay:${delayTime * 0.08}s"
    >${x}</span>
    `;
    // 지연시간 0.08씩 증가하기
    delayTime++;
}//else
} /// for of ////

// 결과값 리턴하기(호출한곳으로 값을 돌려보냄!)
return result;

}// wrapSpan함수!