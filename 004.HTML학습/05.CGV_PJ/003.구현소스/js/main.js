// CGV PJ 추가기능 JS - main.js

// 로딩확인
console.log("나야나 로딩!");

// 영화정보객체
const 유튜브 = {
  "귀멸의칼날":"zN8K_uE1LYg",  
  "어쩔수가없다":"ckHwZNuV-wQ",  
  "얼굴":"dM0quIEmrYA",  
  "모노노케 히메":"zp53g5bqEzU",  
  "체인소 맨":"dOihGQCIw_w",  
  "대부":"Xvsr6K1TTt8",  
};

// 1. 대상 선정
// 1-1. 포스터 링크 이미지 -> 이벤트 대상
const 링크 = document.querySelectorAll(".poster-menu-box li a");
// 1-2. 영화상영 아이프레임 -> 변경대상
const 아이프레임 = document.querySelector(".screen iframe");

// 2. 이벤트 대상에 클릭이벤트 적용하기!
// forEach()메서드 내부함수에 첫번째 전달값으로
// 순회하는 요소나 값 하나하나가 순서대로 전달됨!
링크.forEach((요소) => {
    요소.onclick = () => {

        //3. 클릭된 a요소 자식중 h2요소의 글자읽기 
        let 영화명 = 요소.querySelector("h2").innerText;
        console.log("영화제목이 뭐야?",영화명);
        // 4. 영화상영 아이프레임 변경하기!
        아이프레임.src = `https://www.youtube.com/embed/${유튜브[영화명]}?autoplay=1`;
    }; 
});

//원래는 a요소에 직접 이벤트 속성에 코딩해서 테스트했었음!
/*

onclick="
                onclick="
                // ckHwZNuV-wQ
                document.querySelector('.screen iframe')
                .src = `https://www.youtube.com/embed/zN8K_uE1LYg?autoplay=1`;
                "
                
                // ckHwZNuV-wQ
                document.querySelector('.screen iframe')
                .src = `https://www.youtube.com/embed/ckHwZNuV-wQ?autoplay=1`;
                "
            
*/