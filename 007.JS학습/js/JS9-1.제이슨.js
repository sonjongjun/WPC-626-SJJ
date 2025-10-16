// JS9-1.제이슨 파일 외부 JS

// 완전한 제이슨 파일 불러오기
import realJson from "./JS9-1.진짜제이슨.json" with {type:'json'};
// ㄴ> json파일 import시 쓰는 형식
//  ㄴ> import 변수명 from 경로 with {type:'json'}
// ->import 변수명 from 경로 assert {type:'json'}
// 지금은 assert가 브라우저에서 지원이 되지 않는다
// 프리티어 에러가 나지 않으려면 assert로 바꿔야 하지만
// with를 사용하면 프리티어 에러가 나지만 브라우저에서 에러가 나지 않는다.
// 그러므로 with를 사용하자!!!!!!

console.log("진짜제이슨 데이터:", realJson);

// 불러온 myJson파일을 파싱하여 재할당하자
 let myJson = JSON.parse(JSON.stringify(realJson));
      console.log("제이슨 데이터:", myJson);
      // -> shopping -> 메뉴찍기
      console.log(myJson.shopping.타이틀);

      // 화면에 출력하기
      // ㄴ>객체이므로 Object.keys()로 배열화를 한 다음
      //  ㄴ> forEach()로 배열 데이터를 돌면서 반복처리후 화면에 출력하기

    //   출력요소는 : exp-box
    const expBox = document.querySelector(".exp-box");

    expBox.innerHTML = "<hr/><h1>진짜 제이슨파일로부터 출력됨</h1>";

      Object.keys(myJson).forEach((v) => {
        expBox.innerHTML += 
        `<h2>${v} : ${myJson[v].타이틀}</h2>`;
      }); // forEach문 //